# 🎯 HOSTING QUICK START

## Choose Your Hosting Platform:

### 🥇 **EASIEST: Render.com** (Recommended for Beginners)
```
Time: 5 minutes
Cost: FREE
Difficulty: ⭐ Easy
```

**Steps:**
1. Push code to GitHub
2. Go to render.com
3. Connect GitHub repo
4. Add environment variables
5. Done!

**Full guide:** `DEPLOY_NOW.md`

---

### 🥈 **Railway.app** (Very Simple)
```
Time: 3 minutes
Cost: $5 free credit
Difficulty: ⭐ Easy
```

**Steps:**
1. Go to railway.app
2. "New Project" → GitHub repo
3. Add env vars
4. Deploy!

---

### 🥉 **Fly.io** (More Control)
```
Time: 10 minutes
Cost: FREE tier
Difficulty: ⭐⭐ Medium
```

**Steps:**
```bash
npm install -g flyctl
flyctl auth login
flyctl launch
flyctl deploy
```

---

## ✅ What You Need Before Deploying

1. ✅ GitHub account
2. ✅ Repository (push your code)
3. ✅ Gemini API key
4. ✅ 5 minutes of time

---

## 🔐 Environment Variables (Copy-Paste Ready)

```
NODE_ENV=production
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIzaSyDjhWGC6yOmkQxDJFux81q6YdWxn5Ct_qY
GEMINI_MODEL=gemini-2.5-flash
VECTOR_DB_PROVIDER=none
REDIS_URL=disabled
PORT=3000
```

---

## 📋 Deployment Checklist

- [ ] Code works locally (`npm run dev`)
- [ ] AI responds (`node test-debug.js`)
- [ ] Pushed to GitHub
- [ ] Created account on hosting platform
- [ ] Added environment variables
- [ ] Deployed!
- [ ] Tested live URL
- [ ] Updated frontend (if any)

---

##  🚀 Start Now!

### For Render.com (Easiest):

1. **Create GitHub Repo:**
   - Go to github.com
   - Click "New repository"
   - Name it `alignai-backend`
   - Click "Create repository"

2. **Push Your Code:**
   ```bash
   git init
   git add .
   git commit -m "AlignAI v2.0"
   git remote add origin https://github.com/YOUR-USERNAME/alignai-backend.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Render:**
   - Go to https://render.com
   - Sign up (free)
   - New + → Web Service
   - Connect GitHub
   - Select `alignai-backend`
   - Add environment variables (above)
   - Click "Create Web Service"
   - Wait 2-3 minutes
   - ✅ LIVE!

---

## 🌐 Your Live URL

After deployment:
```
https://alignai-backend.onrender.com
```

Test it:
```bash
curl https://alignai-backend.onrender.com/health
```

---

## 🎉 That's It!

**Your AI platform is now live on the internet!**

Share your URL with:
- Hackathon judges
- Team members
- Frontend developers
- Users

---

## 📞 Need Help?

1. Check `DEPLOY_NOW.md` for detailed guide
2. Check `HOSTING_GUIDE.md` for alternatives
3. Check logs in hosting dashboard
4. Verify environment variables

---

**Ready? Let's deploy!** 🚀

```bash
# Start with this command:
git init
```
