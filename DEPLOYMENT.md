# Production Deployment Guide

This guide covers deploying AlignAI to various production environments.

---

## 🎯 Pre-Deployment Checklist

- [ ] Environment variables configured
- [ ] LLM API key obtained and tested
- [ ] Vector database provisioned (or disabled)
- [ ] Redis configured (optional)
- [ ] Database migrated (if using PostgreSQL)
- [ ] Knowledge base seeded
- [ ] Security headers configured
- [ ] CORS origins set correctly
- [ ] Rate limits configured
- [ ] Logging configured
- [ ] Health checks working
- [ ] SSL/TLS certificate ready (production)

---

## 🚀 Deployment Options

### Option 1: Docker Deployment (Recommended)

#### Local Docker

```bash
# Build image
docker build -t alignai:latest .

# Run container
docker run -d \
  -p 3000:3000 \
  --name alignai \
  -e GEMINI_API_KEY=your_key \
  -e NODE_ENV=production \
  alignai:latest
```

#### Docker Compose (Full Stack)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Scale backend
docker-compose up -d --scale backend=3

# Stop
docker-compose down
```

---

### Option 2: Cloud Platforms

#### Google Cloud Run

```bash
# Install gcloud CLI
# https://cloud.google.com/sdk/docs/install

# Set project
gcloud config set project YOUR_PROJECT_ID

# Build and deploy
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/alignai
gcloud run deploy alignai \
  --image gcr.io/YOUR_PROJECT_ID/alignai \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=your_key,NODE_ENV=production
```

#### AWS ECS/Fargate

1. **Create ECR Repository**
```bash
aws ecr create-repository --repository-name alignai
```

2. **Build and Push**
```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com

# Build
docker build -t alignai .

# Tag
docker tag alignai:latest YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/alignai:latest

# Push
docker push YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/alignai:latest
```

3. **Create ECS Task Definition** (use AWS Console or CLI)

4. **Create ECS Service**

#### Heroku

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set GEMINI_API_KEY=your_key
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# Scale
heroku ps:scale web=2
```

#### Azure Container Apps

```bash
# Install Azure CLI
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login
az login

# Create resource group
az group create --name alignai-rg --location eastus

# Create container app environment
az containerapp env create \
  --name alignai-env \
  --resource-group alignai-rg \
  --location eastus

# Deploy
az containerapp create \
  --name alignai \
  --resource-group alignai-rg \
  --environment alignai-env \
  --image YOUR_REGISTRY/alignai:latest \
  --target-port 3000 \
  --ingress external \
  --env-vars GEMINI_API_KEY=your_key NODE_ENV=production
```

#### Vercel (Serverless)

The project includes `vercel.json` configuration:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Set environment variables via Vercel dashboard
# https://vercel.com/dashboard/[project]/settings/environment-variables
```

---

### Option 3: Traditional Server Deployment

#### Ubuntu/Debian Server

```bash
# 1. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Install PM2 (Process Manager)
sudo npm install -g pm2

# 3. Clone repository
git clone YOUR_REPO_URL
cd CENTILLION_POWERED_BY_ALIGN-main

# 4. Install dependencies
npm ci --only=production

# 5. Set environment variables
cp .env.example .env
nano .env  # Edit with your values

# 6. Start with PM2
pm2 start server.js --name alignai

# 7. Configure PM2 to start on boot
pm2 startup
pm2 save

# 8. Monitor
pm2 logs alignai
pm2 monit
```

#### Nginx Reverse Proxy

```nginx
# /etc/nginx/sites-available/alignai

server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/alignai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal is configured automatically
```

---

## 🔧 Environment Configuration

### Production Environment Variables

```env
# Required
NODE_ENV=production
PORT=3000

# LLM Provider (choose one)
LLM_PROVIDER=gemini
GEMINI_API_KEY=your_production_key

# OR
LLM_PROVIDER=openai
OPENAI_API_KEY=your_production_key

# Vector Database (optional)
VECTOR_DB_PROVIDER=pinecone
PINECONE_API_KEY=your_key
PINECONE_INDEX_NAME=alignai-prod

# Redis (recommended)
REDIS_URL=redis://your-redis-host:6379

# Database (if using PostgreSQL)
DATABASE_URL=postgresql://user:pass@host:5432/alignai

# Security
CORS_ORIGIN=https://your-frontend.com,https://admin.your-frontend.com

# Logging
LOG_LEVEL=info
LOG_FORMAT=json

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

---

## 🗄️ Database Setup

### ChromaDB (Self-Hosted)

```bash
# Docker
docker run -d -p 8000:8000 \
  -v chroma_data:/chroma/chroma \
  -e IS_PERSISTENT=TRUE \
  chromadb/chroma:latest
```

### Pinecone (Cloud)

1. Create account: https://www.pinecone.io/
2. Create index with dimensions matching your embeddings (1536 for OpenAI, varies for Gemini)
3. Add API key to environment

### Redis (Recommended)

#### Redis Cloud (Managed)
1. Create account: https://redis.com/try-free/
2. Create database
3. Get connection URL
4. Add to environment: `REDIS_URL=redis://...`

#### Self-Hosted Redis
```bash
# Docker
docker run -d -p 6379:6379 \
  -v redis_data:/data \
  redis:7-alpine redis-server --appendonly yes
```

---

## 🔐 Security Best Practices

### 1. Environment Variables
- Never commit `.env` files
- Use secret management (AWS Secrets Manager, Google Secret Manager, etc.)
- Rotate API keys regularly

### 2. CORS Configuration
```env
# Production - specific origins only
CORS_ORIGIN=https://your-domain.com,https://api.your-domain.com

# NOT this in production
CORS_ORIGIN=*
```

### 3. Rate Limiting
Adjust based on your needs:
```env
# Stricter for production
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
RATE_LIMIT_MAX_REQUESTS=50   # 50 requests per window
```

### 4. HTTPS/TLS
- Always use HTTPS in production
- Configure SSL certificate (Let's Encrypt, CloudFlare, etc.)
- Redirect HTTP to HTTPS

### 5. API Keys
- Use different keys for development/staging/production
- Implement API key authentication for public APIs
- Monitor API usage

---

## 📊 Monitoring and Logging

### Application Performance Monitoring (APM)

#### New Relic
```bash
npm install newrelic
```

Add to top of `server.js`:
```javascript
require('newrelic');
```

#### DataDog
```bash
npm install dd-trace
```

Add to top of `server.js`:
```javascript
require('dd-trace').init();
```

### Error Tracking

#### Sentry
```bash
npm install @sentry/node
```

Add to `server.js`:
```javascript
const Sentry = require('@sentry/node');
Sentry.init({ dsn: process.env.SENTRY_DSN });
```

### Log Management

#### Papertrail, Loggly, or CloudWatch
Configure in production:
```javascript
// In services/logger.js
const pino = require('pino');
const logger = pino({
  // Production: send to log aggregator
  transport: {
    target: 'pino-papertrail',
    options: {
      host: 'logs.papertrailapp.com',
      port: 12345
    }
  }
});
```

---

## 🧪 Health Checks

### Kubernetes Liveness/Readiness

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 30
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 5
```

### Docker Health Check
Already configured in `Dockerfile`:
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD node -e "require('http').get('http://localhost:3000/health', ...)"
```

---

## 📈 Scaling

### Horizontal Scaling

#### Docker Compose
```bash
docker-compose up -d --scale backend=3
```

#### Kubernetes
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: alignai
spec:
  replicas: 3
  # ... rest of config
```

#### Load Balancing
- Use nginx or cloud load balancers (ALB, GCP Load Balancer, etc.)
- Configure session affinity if needed

### Vertical Scaling
Adjust container resources:
```yaml
resources:
  requests:
    memory: "512Mi"
    cpu: "500m"
  limits:
    memory: "1Gi"
    cpu: "1000m"
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build and push Docker image
        run: |
          docker build -t alignai:${{ github.sha }} .
          # Push to registry
      
      - name: Deploy
        run: |
          # Deploy commands
```

---

## 💾 Backup Strategy

### Database Backups
```bash
# PostgreSQL
pg_dump -h host -U user alignai_db > backup.sql

# Automated with cron
0 2 * * * /path/to/backup-script.sh
```

### Vector Database Backups
- Pinecone: Handled by provider
- ChromaDB: Backup volume data regularly

---

## 🚨 Disaster Recovery

### Backup Checklist
- [ ] Database backups (daily)
- [ ] Environment variables stored securely
- [ ] Knowledge base backed up
- [ ] Application code in version control
- [ ] Disaster recovery plan documented
- [ ] Recovery time objective (RTO) defined
- [ ] Recovery point objective (RPO) defined

### Recovery Procedure
1. Restore database from backup
2. Deploy application from latest stable version
3. Restore environment variables
4. Re-seed knowledge base if needed
5. Verify health checks
6. Monitor logs and metrics

---

## 📞 Support and Maintenance

### Monitoring Points
- API response times
- Error rates
- LLM API usage and costs
- Database query performance
- Cache hit rates
- Request rates
- CPU and memory usage

### Alerts
Set up alerts for:
- API downtime
- High error rates (>5%)
- Response time slow (>2s)
- LLM API quota exceeded
- Database connection failures

---

## 💰 Cost Optimization

### LLM API Costs
- Use caching aggressively
- Choose appropriate models (Gemini Flash vs Pro)
- Monitor token usage
- Implement request limits

### Infrastructure Costs
- Right-size containers
- Use spot instances where applicable
- Auto-scale based on demand
- Clean up unused resources

---

## 📋 Post-Deployment

### Verification
```bash
# Test health endpoint
curl https://your-domain.com/health

# Test AI endpoint
curl -X POST https://your-domain.com/api/ai-forecast/query \
  -H "Content-Type: application/json" \
  -d '{"question": "test"}'
```

### Monitoring Dashboard
Set up dashboards for:
- Request rates
- Response times
- Error rates
- AI feature usage
- Cost tracking

---

**Deployment Complete! 🎉**

For issues or questions, refer to the main README or open an issue.
