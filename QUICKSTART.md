# AlignAI - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Get a Free Gemini API Key

1. Go to: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key

### Step 3: Create .env File

```bash
# Copy the example
cp .env.example .env
```

Edit `.env` and add your key:

```env
LLM_PROVIDER=gemini
GEMINI_API_KEY=your_api_key_here
VECTOR_DB_PROVIDER=chroma
```

### Step 4 (Optional): Start ChromaDB

**Option A: Docker (Recommended)**
```bash
docker run -d -p 8000:8000 chromadb/chroma
```

**Option B: Without ChromaDB**
The app will work without a vector database, but RAG features will be limited.

### Step 5: Start the Server

```bash
npm run dev
```

Server runs at: `http://localhost:3000`

---

## 🧪 Test the API

### Basic Dashboard

```bash
curl -X POST http://localhost:3000/api/forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{}'
```

### AI-Enhanced Dashboard (⭐️ Try this!)

```bash
curl -X POST http://localhost:3000/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{"enable_ai": true}'
```

### Natural Language Query

```bash
curl -X POST http://localhost:3000/api/ai-forecast/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What are best practices for harvest timing?"}'
```

### Chat Interface

```bash
curl -X POST http://localhost:3000/api/ai-forecast/chat \
  -H "Content-Type: application/json" \
  -d '{
    "question": "How should we handle high logistics stress?",
    "forecast_data": {
      "logistics_stress_level": "HIGH",
      "forecasted_volume": 1500
    }
  }'
```

---

## 📚 Seed Knowledge Base (Optional)

If you have ChromaDB running:

```bash
npm run seed
```

This adds agricultural best practices for RAG-powered recommendations.

---

## 🎯 Main Endpoints

| Endpoint | Description |
|----------|-------------|
| `POST /api/ai-forecast/dashboard` | AI-Enhanced forecast dashboard |
| `POST /api/ai-forecast/query` | Natural language queries |
| `POST /api/ai-forecast/chat` | Interactive chat |
| `POST /api/ai-forecast/advisory` | AI-powered advisories |
| `GET /health` | Health check |

---

## 🐛 Troubleshooting

### "LLM API Error"
- Check your API key is correct in `.env`
- Ensure you have internet connection
- Verify API key hasn't expired

### "Vector DB not available"
- ChromaDB is optional - app works without it
- If needed: `docker run -d -p 8000:8000 chromadb/chroma`

### "Redis not available"
- Redis is optional - app works without it
- Caching will be disabled but functionality remains

---

## 🎉 What You Can Do

1. **Get AI-Enhanced Forecasts** - Traditional forecasts + AI insights
2. **Ask Questions** - Natural language queries about agricultural practices
3. **Get Recommendations** - AI analyzes your data and suggests optimizations
4. **Chat About Data** - Interactive conversation about forecast results
5. **Generate Advisories** - Automated, context-aware guidance

---

## 📖 Full Documentation

See `README_AI.md` for complete documentation.

---

## 🆘 Need Help?

- Check the full README: `README_AI.md`
- Look at example requests in the documentation
- Open an issue on GitHub

**Happy Farming! 🌾**
