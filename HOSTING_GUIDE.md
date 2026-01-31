# 🚀 How to Host Your AlignAI Platform

## ⚡ FASTEST & EASIEST: Render.com (FREE)

**Perfect for hackathons! Deploy in 5 minutes.**

### Step-by-Step:

#### 1️⃣ **Prepare Your Code**

First, create a `render.yaml` file (I'll create this for you below).

#### 2️⃣ **Push to GitHub**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "AlignAI v2.0 - Ready for deployment"

# Create a new repo on GitHub.com, then:
git remote add origin https://github.com/YOUR-USERNAME/alignai-backend.git
git branch -M main
git push -u origin main
```

#### 3️⃣ **Deploy on Render**

1. Go to https://render.com and sign up (free)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Render will auto-detect Node.js
5. Configure:
   - **Name**: `alignai-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

#### 4️⃣ **Add Environment Variables**

In Render dashboard, go to "Environment" and add:

```
NODE_ENV=production
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIzaSyDjhWGC6yOmkQxDJFux81q6YdWxn5Ct_qY
GEMINI_MODEL=gemini-2.5-flash
VECTOR_DB_PROVIDER=none
REDIS_URL=disabled
PORT=3000
```

#### 5️⃣ **Deploy!**

Click "Create Web Service" and wait 2-3 minutes.

**Your API will be live at:**
`https://alignai-backend.onrender.com`

---

## 🎯 Alternative Options

### **Option 2: Railway.app (FREE)**

1. Go to https://railway.app
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables
6. Deploy!

**URL:** `https://alignai-backend.up.railway.app`

### **Option 3: Fly.io (FREE tier)**

```bash
# Install Fly CLI
npm install -g flyctl

# Login
flyctl auth login

# Launch app
flyctl launch

# Deploy
flyctl deploy
```

### **Option 4: Heroku**

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create alignai-backend

# Set env vars
heroku config:set GEMINI_API_KEY=your_key_here
heroku config:set LLM_PROVIDER=gemini

# Deploy
git push heroku main
```

---

## 📝 Before Deploying - Create These Files

### 1. `.gitignore` (I'll create this)
Make sure sensitive files aren't pushed to GitHub

### 2. `render.yaml` (I'll create this)
Auto-configuration for Render

### 3. Update `package.json` start script
Already done! ✅

---

## 🔒 Security Checklist

Before going live:

- ✅ Never commit `.env` file
- ✅ Use environment variables on hosting platform
- ✅ Enable CORS for your frontend domain only
- ✅ Keep API key secret
- ✅ Use HTTPS (hosting platforms provide this)

---

## 🧪 Test Your Deployed API

Once deployed, test with:

```bash
# Health check
curl https://your-app.onrender.com/health

# AI query
curl -X POST https://your-app.onrender.com/api/ai-forecast/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What are best harvest practices?"}'
```

---

## 💡 Recommended: Render.com

**Why Render?**
- ✅ Free tier (perfect for hackathons)
- ✅ Auto-deploys from GitHub
- ✅ Built-in HTTPS
- ✅ Easy environment variables
- ✅ No credit card required
- ✅ Deploy in 5 minutes

**Free tier includes:**
- 750 hours/month
- Auto-scaling
- Global CDN
- SSL certificates

---

## 📊 What Hosting Platforms Provide

| Platform | Free Tier | Deploy Time | Difficulty |
|----------|-----------|-------------|------------|
| **Render** | ✅ Yes | 5 min | ⭐ Easy |
| Railway | ✅ $5 credit | 3 min | ⭐ Easy |
| Fly.io | ✅ Yes | 10 min | ⭐⭐ Medium |
| Heroku | ⚠️ Limited | 10 min | ⭐⭐ Medium |
| AWS/GCP | ❌ Free tier complex | 30+ min | ⭐⭐⭐ Hard |

---

## 🎉 After Deployment

Your API will be accessible at:
```
https://your-app-name.onrender.com
```

Update your frontend to use this URL instead of `localhost:3000`.

---

## 🚨 Common Issues & Fixes

### Issue: "Build failed"
**Fix:** Make sure `package.json` has:
```json
"engines": {
  "node": ">=18.0.0"
}
```

### Issue: "App crashes on startup"
**Fix:** Check you've set all environment variables:
- `GEMINI_API_KEY`
- `LLM_PROVIDER`
- `NODE_ENV`

### Issue: "CORS error"
**Fix:** Update CORS settings in your code to allow your frontend domain.

---

## 🎯 Next Steps

1. Create the deployment files (I'll do this for you)
2. Push to GitHub
3. Connect to Render
4. Add environment variables
5. Deploy!
6. Test your live API
7. **Demo your hackathon project!** 🏆

---

**Let's get you deployed!** 🚀

Should I create the deployment files now?
