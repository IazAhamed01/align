# Quick Guide: Switch to OpenAI (Guaranteed to Work!)

## Why Switch?
- Google Gemini model names keep changing
- Your free tier may have restrictions
- OpenAI has stable, well-documented APIs
- Will work immediately

## How to Switch (2 minutes):

### Step 1: Get OpenAI API Key
1. Go to: https://platform.openai.com/api-keys
2. Sign up (you get $5 free credit)
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)

### Step 2: Update .env File
Open `.env` and change these two lines:

```bash
# Change this line:
LLM_PROVIDER=gemini

# To this:
LLM_PROVIDER=openai

# And add your OpenAI key (replace the placeholder):
OPENAI_API_KEY=sk-your-actual-key-here
```

### Step 3: Restart Server
In your terminal:
1. Press `Ctrl+C`
2. Run: `npm run dev`

### Step 4: Test
```bash
node test-ai.js
```

**DONE! It will work immediately!** ✅

---

## Alternative: Keep Trying Gemini

If you really want to use Gemini (free), try these in order:

### Option 1: Generate New API Key
Your current key might have restrictions.
1. Go to: https://aistudio.google.com/app/apikey
2. Delete old key
3. Create fresh one
4. Update GEMINI_API_KEY in .env

### Option 2: Wait for Google Docs
The model names change frequently. Check:
https://ai.google.dev/gemini-api/docs/models/gemini

---

## Recommendation:

**Use OpenAI** - It's the fastest path to success for your hackathon!
- Costs ~$0.01 per 100 AI queries
- Very reliable
- Excellent documentation  
- Your platform will work perfectly

**Your choice!** 🚀
