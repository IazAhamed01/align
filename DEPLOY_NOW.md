# 🚀 DEPLOY ALIGNAI IN 5 MINUTES

## ✅ Pre-Deployment Checklist

Your code is **READY TO DEPLOY**! Here's what's already done:

- ✅ `package.json` configured with start script
- ✅ `.gitignore` set up (protects `.env`)
- ✅ `render.yaml` created for auto-deployment
- ✅ AI working locally
- ✅ Health check endpoint ready
- ✅ Production-ready logging
- ✅ Security middleware enabled

---

## 🎯 EASIEST METHOD: Render.com (FREE)

### **Step 1: Push to GitHub** (5 minutes)

```bash
# If you don't have git initialized:
git init

# Add all files
git add .

# Commit
git commit -m "AlignAI v2.0 - Production ready with Gemini AI"

# Create a new repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/alignai-backend.git
git branch -M main
git push -u origin main
```

### **Step 2: Deploy on Render** (3 minutes)

1. **Sign up**: Go to https://render.com (free, no credit card)

2. **Create Web Service**:
   - Click "New +" → "Web Service"
   - Click "Connect account" → Select GitHub
   - Find and select your `alignai-backend` repository

3. **Auto-Configuration**:
   - Render will detect `render.yaml` 
   - Or manually set:
     - **Name**: `alignai-backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: `Free`

4. **Environment Variables**:
   Click "Advanced" → "Add Environment Variable":
   
   ```
   NODE_ENV = production
   LLM_PROVIDER = gemini
   GEMINI_API_KEY = AIzaSyDjhWGC6yOmkQxDJFux81q6YdWxn5Ct_qY
   GEMINI_MODEL = gemini-2.5-flash
   VECTOR_DB_PROVIDER = none
   REDIS_URL = disabled
   ```

5. **Deploy**:
   - Click "Create Web Service"
   - Wait 2-3 minutes for build
   - ✅ **LIVE!**

---

## 🌐 Your Live URL

After deployment, your API will be at:
```
https://alignai-backend.onrender.com
```

Or a custom name:
```
https://YOUR-APP-NAME.onrender.com
```

---

## 🧪 Test Your Live API

### Health Check:
```bash
curl https://alignai-backend.onrender.com/health
```

Expected response:
```json
{
  "status": "ok",
  "version": "2.0.0",
  "ai_enabled": true
}
```

### AI Query:
```bash
curl -X POST https://alignai-backend.onrender.com/api/ai-forecast/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What are best practices for harvest timing?"}'
```

---

## 📊 What You Get (FREE)

- ✅ 750 hours/month (enough for hackathon + demos)
- ✅ Auto-deploy on git push
- ✅ Free SSL certificate (HTTPS)
- ✅ Global CDN
- ✅ Zero-downtime deployments
- ✅ Auto-scaling
- ✅ Logging & monitoring

---

## 🚨 Common Issues & Solutions

### Issue: "Build Failed"
**Solution**: Check build logs in Render dashboard. Usually missing env vars.

### Issue: "Application Error"
**Solution**: 
1. Check you added `GEMINI_API_KEY` in environment variables
2. Verify `NODE_ENV=production`

### Issue: "502 Bad Gateway"  
**Solution**: 
1. Check server logs
2. Verify `npm start` works locally
3. Ensure port is set correctly (Render provides PORT env var)

### Issue: "CORS Error"
**Solution**: Update CORS in your code to allow your frontend domain:
```javascript
// In server.js
app.use(cors({
  origin: ['https://your-frontend.com', 'http://localhost:5173']
}));
```

---

## 🎨 Connect Your Frontend

Update your frontend API calls to use:
```javascript
const API_URL = 'https://alignai-backend.onrender.com';

//Example:
const response = await fetch(`${API_URL}/api/ai-forecast/query`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ question: 'your question' })
});
```

---

## 🔄 Auto-Deploy Updates

After initial deployment, any push to GitHub automatically deploys:

```bash
# Make changes to your code
git add .
git commit -m "Updated feature"
git push

# Render auto-deploys in 2-3 minutes! 
```

---

## 💡 Pro Tips

1. **Custom Domain** (Free):
   - Go to Settings → Custom Domains
   - Add your domain (e.g., `api.yourdomain.com`)

2. **View Logs**:
   - Click "Logs" in Render dashboard
   - See real-time application logs

3. **Monitor Health**:
   - Render checks `/health` endpoint automatically
   - Restarts if unhealthy

4. **Environment Variables**:
   - Never commit `.env` to GitHub
   - Always use Render's environment variable feature

---

## 📈 Scaling (If Needed Later)

Free tier is perfect for hackathons, but if you need more:

- **Starter Plan** ($7/month): More compute, no sleep
- **Pro Plan** ($25/month): More instances, priority support

But free tier handles:
- 100+ requests/day
- Perfect for demos
- Good for testing

---

## 🎉 You're Ready!

Your deployment checklist:

1. ✅ Code ready
2. ⬜ Push to GitHub
3. ⬜ Deploy on Render  
4. ⬜ Add environment variables
5. ⬜ Test live API
6. ⬜ Demo your project!

---

## 🏆 Alternative: Quick Deploy Button

Want even faster? Add this to your `README.md`:

```markdown
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/YOUR-USERNAME/alignai-backend)
```

Anyone can deploy your project with one click!

---

## 📞 Need Help?

- Render Docs: https://render.com/docs
- Community: https://community.render.com
- Status: https://status.render.com

---

**Ready to go live?** 🚀

Run these commands now:
```bash
git init
git add .
git commit -m "AlignAI v2.0 - Ready for deployment"
```

Then head to https://render.com!
