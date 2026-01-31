# AlignAI - Production-Ready Agricultural Coordination Platform

## 🚀 Overview

AlignAI is an **AI-powered agricultural coordination platform** that combines traditional forecasting with cutting-edge **LLM (Large Language Models)** and **RAG (Retrieval-Augmented Generation)** technology to provide intelligent harvest forecasting, logistics optimization, and storage management.

### **Version 2.0 - AI-Enhanced**

This production-ready version includes:
- ✅ **LLM Integration** (OpenAI GPT-4 / Google Gemini)
- ✅ **RAG System** with Vector Database (Pinecone / ChromaDB)
- ✅ **Redis Caching** for high performance
- ✅ **Production Middleware** (Rate limiting, Security, Logging)
- ✅ **Natural Language Query Interface**
- ✅ **AI-Powered Advisories and Insights**
- ✅ **Docker Support** for easy deployment
- ✅ **Comprehensive API Documentation**

---

## 📋 Table of Contents

1. [Features](#features)
2. [Architecture](#architecture)
3. [Quick Start](#quick-start)
4. [API Documentation](#api-documentation)
5. [Configuration](#configuration)
6. [Deployment](#deployment)
7. [Development](#development)
8. [Production Considerations](#production-considerations)

---

## ✨ Features

### **Core Features**
- 🌾 **Harvest Forecasting** - AI-enhanced volume and timing predictions
- 🚚 **Logistics Management** - Smart capacity planning and stress assessment
- 📦 **Storage Optimization** - Intelligent allocation and utilization tracking
- 🌤️ **Weather Integration** - Real-time weather-based adjustments

### **AI Features (NEW)**
- 🤖 **Natural Language Queries** - Ask questions in plain English
- 📊 **AI-Generated Insights** - Intelligent analysis of forecast data
- ⚠️ **Risk Analysis** - Automated risk identification and mitigation strategies
- 💡 **Optimization Suggestions** - RAG-powered best practice recommendations
- 💬 **Interactive Chat** - Conversational interface for forecast data
- 📚 **Knowledge Base** - Searchable agricultural best practices database

### **Production Features**
- 🔒 **Security** - Helmet.js security headers, CORS, rate limiting
- 📝 **Logging** - Structured logging with Pino
- 💾 **Caching** - Redis-based caching for performance
- 🐳 **Docker** - Containerized deployment ready
- 📈 **Monitoring** - Health checks and graceful shutdown
- 🔄 **Error Handling** - Comprehensive error handling and recovery

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Client Application                │
│              (Frontend / API Consumer)              │
└───────────────────┬─────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────┐
│              AlignAI Backend (Node.js)              │
│  ┌──────────────────────────────────────────────┐   │
│  │  API Layer (Express + Middleware)            │   │
│  │  • Rate Limiting  • Security  • Logging      │   │
│  └──────────────────┬───────────────────────────┘   │
│                     │                               │
│  ┌──────────────────┴───────────────────────────┐   │
│  │         Core Services                        │   │
│  │  • Forecast Engine  • AI Service  • RAG     │   │
│  └──────────────────┬───────────────────────────┘   │
└────────────────────┬┼───────────────────────────────┘
                     ││
        ┌────────────┼┼────────────┐
        │            ││            │
        ▼            ▼▼            ▼
┌──────────────┐ ┌──────────┐ ┌──────────────┐
│Vector Database│ │LLM APIs  │ │Redis Cache   │
│(ChromaDB/    │ │(OpenAI/  │ │              │
│ Pinecone)    │ │ Gemini)  │ │              │
└──────────────┘ └──────────┘ └──────────────┘
```

---

## 🚀 Quick Start

### **Prerequisites**

- Node.js 18+ and npm 9+
- Docker and Docker Compose (optional, recommended)
- Redis (optional, for caching)
- API Keys for LLM provider (OpenAI or Google Gemini)

### **Installation**

#### **Option 1: Standard Installation**

```bash
# Clone the repository
cd CENTILLION_POWERED_BY_ALIGN-main

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env and add your API keys
# Required: GEMINI_API_KEY or OPENAI_API_KEY
```

#### **Option 2: Docker Installation (Recommended)**

```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your API keys

# Start all services with Docker
npm run docker:up

# This starts:
# - Backend API (port 3000)
# - ChromaDB (port 8000)
# - Redis (port 6379)
# - PostgreSQL (port 5432)
```

### **Configuration**

Edit `.env` file with your credentials:

```env
# Choose LLM Provider
LLM_PROVIDER=gemini  # or 'openai'

# Google Gemini (Recommended - Free tier available)
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.0-flash-exp

# OR OpenAI
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

# Vector Database
VECTOR_DB_PROVIDER=chroma  # or 'pinecone'
CHROMA_HOST=http://localhost:8000

# Redis (optional)
REDIS_URL=redis://localhost:6379
```

### **Seeding Knowledge Base**

```bash
# Seed the vector database with agricultural knowledge
npm run seed

# This will index 10+ agricultural best practice documents
# for RAG-powered recommendations
```

### **Starting the Server**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The API will be available at: `http://localhost:3000`

---

## 📖 API Documentation

### **Base URL**
```
http://localhost:3000/api
```

### **Main Endpoints**

#### **1. AI-Enhanced Dashboard** (⭐ Recommended)
```http
POST /api/ai-forecast/dashboard
```

**Request:**
```json
{
  "farmer_id": "F001",  // optional
  "weather_deviation": 0,  // -1 (adverse), 0 (normal), 1 (favorable)
  "enable_ai": true  // true for AI enhancements
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "crop": "Rice",
    "region": "Punjab North",
    "summary": {
      "harvest_level": "HIGH",
      "forecasted_harvest_volume": 1500,
      "logistics_stress_level": "MEDIUM"
    },
    "ai_insights": {
      "harvest_insights": "...",
      "risk_analysis": {...},
      "optimization_suggestions": {...}
    },
    "ai_advisories": [...]
  }
}
```

#### **2. Natural Language Query** (🆕 AI Feature)
```http
POST /api/ai-forecast/query
```

**Request:**
```json
{
  "question": "What are the best practices for harvest timing in rainy weather?"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "question": "...",
    "answer": "Based on agricultural best practices...",
    "sources": [
      {
        "title": "Weather Risk Mitigation Strategies",
        "score": 0.89,
        "category": "weather"
      }
    ]
  }
}
```

#### **3. AI Advisory Generation** (🆕 AI Feature)
```http
POST /api/ai-forecast/advisory
```

**Request:**
```json
{
  "forecast_data": {
    "total_forecasted_volume": 1500,
    "logistics_stress_level": "HIGH",
    "transport_capacity": 1000
  },
  "advisory_type": "logistics"  // harvest, logistics, storage, weather
}
```

#### **4. Interactive Chat** (🆕 AI Feature)
```http
POST /api/ai-forecast/chat
```

**Request:**
```json
{
  "question": "How should we handle the excess volume?",
  "forecast_data": {
    "excess_volume": 500,
    "total_forecasted_volume": 1500
  }
}
```

#### **5. Deep Analysis** (🆕 AI Feature)
```http
POST /api/ai-forecast/analyze
```

Provides comprehensive insights, risk analysis, and optimization suggestions.

### **Traditional Endpoints**

These endpoints work without AI enhancements:

- `POST /api/forecast/harvest` - Basic harvest forecast
- `POST /api/forecast/logistics` - Logistics assessment
- `POST /api/forecast/storage` - Storage allocation
- `POST /api/forecast/dashboard` - Traditional dashboard

### **Knowledge Base Management**

```http
POST /api/knowledge/index
```
Index new agricultural knowledge documents.

```http
POST /api/knowledge/query
```
Query the knowledge base directly.

---

## ⚙️ Configuration

### **Environment Variables**

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `LLM_PROVIDER` | LLM provider (openai/gemini) | gemini | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | - | Yes (if using Gemini) |
| `OPENAI_API_KEY` | OpenAI API key | - | Yes (if using OpenAI) |
| `VECTOR_DB_PROVIDER` | Vector DB (chroma/pinecone) | chroma | No |
| `REDIS_URL` | Redis connection URL | redis://localhost:6379 | No |
| `PORT` | Server port | 3000 | No |
| `NODE_ENV` | Environment | development | No |
| `LOG_LEVEL` | Logging level | info | No |
| `CORS_ORIGIN` | CORS allowed origins | * | No |

### **Getting API Keys**

#### **Google Gemini (Recommended)**
1. Visit: https://makersuite.google.com/app/apikey
2. Create a new API key
3. Free tier includes generous quotas

#### **OpenAI**
1. Visit: https://platform.openai.com/api-keys
2. Create a new API key
3. Requires billing setup

#### **Pinecone (Optional)**
1. Visit: https://www.pinecone.io/
2. Create account and index
3. Free tier available

---

## 🐳 Deployment

### **Docker Deployment**

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop services
docker-compose down
```

### **Manual Deployment**

#### **1. Install Dependencies**
```bash
npm ci --only=production
```

#### **2. Set Environment Variables**
```bash
export NODE_ENV=production
export PORT=3000
export GEMINI_API_KEY=your_key
# ... other variables
```

#### **3. Start Server**
```bash
npm start
```

### **Cloud Deployment**

The application is ready for deployment on:
- **Vercel** (Serverless)
- **Heroku**
- **Google Cloud Run**
- **AWS ECS/Fargate**
- **Azure Container Apps**

See `vercel.json` for Vercel configuration.

---

## 👨‍💻 Development

### **Project Structure**

```
.
├── config/              # Configuration files
│   ├── llm.config.js    # LLM provider configuration
│   ├── vectordb.config.js # Vector database config
│   └── cache.config.js  # Redis cache config
├── services/            # Business logic services
│   ├── rag.service.js   # RAG implementation
│   ├── aiForecast.service.js # AI forecast service
│   └── logger.js        # Logging service
├── routes/              # API routes
│   ├── forecast.js      # Traditional forecast routes
│   ├── aiForecast.js    # AI-enhanced routes
│   └── knowledge.js     # Knowledge base routes
├── engine/              # Core forecast algorithms
│   ├── harvestForecast.js
│   ├── logisticsStress.js
│   └── storageAllocation.js
├── middleware/          # Express middleware
│   └── production.middleware.js
├── scripts/             # Utility scripts
│   └── seedVectorDB.js  # Seed knowledge base
├── data/                # Sample data
├── server.js            # Main server file
├── package.json
├── docker-compose.yml
└── Dockerfile
```

### **Adding New Knowledge**

Edit `scripts/seedVectorDB.js` and add documents:

```javascript
{
  id: 'unique-id',
  title: 'Document Title',
  category: 'harvest|logistics|storage|weather',
  tags: ['tag1', 'tag2'],
  text: 'Detailed content...'
}
```

Then run: `npm run seed`

---

## 🔐 Production Considerations

### **Security**
- ✅ Helmet.js for security headers
- ✅ CORS configuration
- ✅ Rate limiting (100 req/15min general, 30 req/15min for AI)
- ✅ Input validation
- ⚠️ **TODO**: Add authentication/authorization
- ⚠️ **TODO**: Add API key management

### **Performance**
- ✅ Redis caching (5 min TTL for forecasts)
- ✅ Response compression (via nginx in production)
- ✅ Efficient database queries
- ⚠️ **TODO**: Add CDN for static assets
- ⚠️ **TODO**: Implement database connection pooling

### **Monitoring**
- ✅ Structured logging with Pino
- ✅ Health check endpoint
- ✅ Graceful shutdown
- ⚠️ **TODO**: Add APM (Application Performance Monitoring)
- ⚠️ **TODO**: Add error tracking (Sentry, etc.)

### **Scalability**
- ✅ Stateless design
- ✅ Horizontal scaling ready
- ✅ Containerized with Docker
- ⚠️ **TODO**: Add load balancing
- ⚠️ **TODO**: Add auto-scaling policies

### **Cost Optimization**
- Use **Google Gemini** (generous free tier)
- Use **ChromaDB** instead of Pinecone (self-hosted)
- Implement caching to reduce LLM API calls
- Monitor and set API rate limits

---

## 📊 API Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| General API | 100 requests | 15 minutes |
| AI Endpoints | 30 requests | 15 minutes |
| Knowledge Base | 30 requests | 15 minutes |

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm test -- --coverage

# Watch mode
npm run test:watch
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Ensure all tests pass
5. Submit a pull request

---

## 📝 License

MIT License - see LICENSE file for details

---

## 🆘 Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Email: support@alignai.com

---

## 🎉 What's New in v2.0

- ✨ **LLM Integration** - Choose between OpenAI and Google Gemini
- 🔍 **RAG System** - Semantic search over agricultural knowledge base
- 💬 **Natural Language Interface** - Ask questions in plain English
- 🤖 **AI-Generated Insights** - Automated analysis and recommendations
- ⚡ **Redis Caching** - 10x faster response times
- 🐳 **Docker Support** - One-command deployment
- 🔒 **Production-Ready** - Security, logging, monitoring built-in
- 📚 **Knowledge Base** - 10+ agricultural best practice documents

---

**Built with ❤️ for the agricultural community**
