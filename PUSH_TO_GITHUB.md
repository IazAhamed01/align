# 📦 How to Push Your Code to GitHub

## 🎯 You Already Have the Code!

Your project is at:
```
C:\Users\JSK ADMIN\Desktop\Iaz\KTR HACKATHON\CENTILLION_POWERED_BY_ALIGN-main
```

You just need to **push it to GitHub** so you can deploy it.

---

## 🚀 Step-by-Step: Push to GitHub

### **Step 1: Create GitHub Repository** (2 minutes)

1. Go to **https://github.com**
2. Click **"Sign in"** (or "Sign up" if you don't have an account)
3. Click the **"+" button** (top right) → **"New repository"**
4. Fill in:
   - **Repository name**: `alignai-backend`
   - **Description**: `AI-Powered Agricultural Platform with Gemini AI`
   - **Public** or **Private** (your choice)
   - **DO NOT** check "Add README" (you already have one)
5. Click **"Create repository"**

---

### **Step 2: Push Your Code** (3 minutes)

Open **PowerShell** or **Command Prompt** in your project folder:

```powershell
# Navigate to your project (if not already there)
cd "C:\Users\JSK ADMIN\Desktop\Iaz\KTR HACKATHON\CENTILLION_POWERED_BY_ALIGN-main"

# Initialize git (if not done yet)
git init

# Add all files
git add .

# Commit everything
git commit -m "AlignAI v2.0 - Initial commit with Gemini AI"

# Add your GitHub repo (REPLACE with YOUR username!)
git remote add origin https://github.com/YOUR-USERNAME/alignai-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR-USERNAME` with your actual GitHub username!

---

### **Step 3: Verify** ✅

Go to your GitHub repository:
```
https://github.com/YOUR-USERNAME/alignai-backend
```

You should see all your files! 🎉

---

## 🔐 If Git Asks for Password

GitHub no longer uses passwords. You need a **Personal Access Token**:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "AlignAI Deployment"
4. Check: `repo` (all repo permissions)
5. Click "Generate token"
6. **Copy the token** (you can't see it again!)
7. Use this token as your password when pushing

---

## 🌐 Now Others Can Clone Your Repo

Once pushed, anyone can clone it:

```bash
git clone https://github.com/YOUR-USERNAME/alignai-backend.git
cd alignai-backend
npm install
cp .env.example .env
# Add GEMINI_API_KEY to .env
npm run dev
```

---

## 🚀 After Pushing to GitHub

You can deploy to Render.com:

1. Go to https://render.com
2. New + → Web Service
3. Connect GitHub
4. Select `alignai-backend`
5. Add environment variables
6. Deploy!

---

## 📝 Quick Reference

| Command | What it does |
|---------|--------------|
| `git init` | Initialize git in folder |
| `git add .` | Stage all files |
| `git commit -m "message"` | Commit with message |
| `git remote add origin URL` | Link to GitHub repo |
| `git push -u origin main` | Push to GitHub |

---

## 🔧 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/alignai-backend.git
```

### Error: "Git not found"
Install Git: https://git-scm.com/download/win

### Error: "Authentication failed"
Use a Personal Access Token (see above)

---

## ✅ Checklist

- [ ] Created GitHub account
- [ ] Created new repository
- [ ] Ran `git init`
- [ ] Ran `git add .`
- [ ] Ran `git commit`
- [ ] Added remote with YOUR username
- [ ] Pushed to GitHub
- [ ] Verified files are on GitHub

---

## 🎯 Next Step

After pushing to GitHub, follow **`DEPLOY_NOW.md`** to deploy on Render!

---

**Your code is ready to share with the world!** 🌍
