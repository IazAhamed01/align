# API Examples and Testing

This document provides real-world examples for testing all AlignAI endpoints.

## Prerequisites

```bash
export BASE_URL=http://localhost:3000
```

Or for online deployment:
```bash
export BASE_URL=https://your-deployment-url.com
```

---

## 1. Health Check

```bash
curl -X GET $BASE_URL/health
```

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-01-31T16:00:00.000Z",
  "version": "2.0.0",
  "ai_enabled": true
}
```

---

## 2. Traditional Dashboard (No AI)

```bash
curl -X POST $BASE_URL/api/forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "farmer_id": null,
    "weather_deviation": 0
  }'
```

---

## 3. AI-Enhanced Dashboard (⭐ RECOMMENDED)

### Basic Request
```bash
curl -X POST $BASE_URL/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "enable_ai": true
  }'
```

### For Specific Farmer
```bash
curl -X POST $BASE_URL/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "farmer_id": "F001",
    "weather_deviation": 0,
    "enable_ai": true
  }'
```

### With Adverse Weather
```bash
curl -X POST $BASE_URL/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "weather_deviation": -1,
    "enable_ai": true
  }'
```

**Expected Response:**
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
      "harvest_insights": "Key opportunities: High volume indicates strong growing season...",
      "risk_analysis": {
        "identified_risks": [...],
        "analysis": "Risk mitigation strategies...",
        "risk_score": 35
      },
      "optimization_suggestions": {
        "suggestions": "To optimize operations, consider...",
        "sources": [...]
      }
    },
    "ai_advisories": [
      {
        "type": "harvest",
        "priority": 1,
        "content": "Based on forecasted volume...",
        "sources": [...]
      }
    ]
  },
  "metadata": {
    "ai_enhanced": true,
    "processing_time_ms": 1250
  }
}
```

---

## 4. Natural Language Query

### Example 1: Harvest Timing
```bash
curl -X POST $BASE_URL/api/ai-forecast/query \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What are the best practices for harvest timing in rainy weather?"
  }'
```

### Example 2: Storage Management
```bash
curl -X POST $BASE_URL/api/ai-forecast/query \
  -H "Content-Type: application/json" \
  -d '{
    "question": "How should I manage storage when capacity is near 90%?"
  }'
```

### Example 3: Logistics Optimization
```bash
curl -X POST $BASE_URL/api/ai-forecast/query \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What should I do when transport capacity is exceeded?"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "question": "What are the best practices for harvest timing in rainy weather?",
    "answer": "Based on agricultural best practices, when facing rainy weather during harvest season, you should:\n\n1. Monitor weather forecasts daily and have contingency plans ready...",
    "sources": [
      {
        "title": "Weather Risk Mitigation Strategies",
        "score": 0.89,
        "category": "weather"
      },
      {
        "title": "Harvest Timing Best Practices",
        "score": 0.82,
        "category": "harvest"
      }
    ],
    "generated_at": "2026-01-31T16:00:00.000Z"
  }
}
```

---

## 5. AI Advisory Generation

### Harvest Advisory
```bash
curl -X POST $BASE_URL/api/ai-forecast/advisory \
  -H "Content-Type: application/json" \
  -d '{
    "forecast_data": {
      "total_forecasted_volume": 1500,
      "harvest_window_days": 5,
      "expected_harvest_date": "2026-02-15",
      "weather_condition": "Normal",
      "total_farmers": 15
    },
    "advisory_type": "harvest"
  }'
```

### Logistics Advisory
```bash
curl -X POST $BASE_URL/api/ai-forecast/advisory \
  -H "Content-Type: application/json" \
  -d '{
    "forecast_data": {
      "total_forecasted_volume": 1500,
      "logistics_stress_level": "HIGH",
      "transport_capacity": 1000,
      "excess_volume": 500
    },
    "advisory_type": "logistics"
  }'
```

### Storage Advisory
```bash
curl -X POST $BASE_URL/api/ai-forecast/advisory \
  -H "Content-Type: application/json" \
  -d '{
    "forecast_data": {
      "forecasted_volume": 1500,
      "total_storage_capacity": 5000,
      "current_storage_usage": 4200,
      "storage_utilization_percentage": 84
    },
    "advisory_type": "storage"
  }'
```

### Weather Advisory
```bash
curl -X POST $BASE_URL/api/ai-forecast/advisory \
  -H "Content-Type: application/json" \
  -d '{
    "forecast_data": {
      "weather_condition": "Adverse",
      "total_forecasted_volume": 1200
    },
    "advisory_type": "weather"
  }'
```

---

## 6. Deep Analysis

```bash
curl -X POST $BASE_URL/api/ai-forecast/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "forecast_data": {
      "total_forecasted_volume": 1500,
      "logistics_stress_level": "HIGH",
      "storage_utilization_percentage": 84,
      "weather_condition": "Normal",
      "harvest_window_days": 5,
      "expected_harvest_date": "2026-02-15",
      "transport_capacity": 1000,
      "total_storage_capacity": 5000,
      "current_storage_usage": 4200,
      "excess_volume": 500
    },
    "analysis_type": "comprehensive"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "insights": "Key opportunities:\n1. High volume indicates strong growing season...",
    "risks": {
      "identified_risks": [
        {
          "type": "logistics",
          "description": "High transportation stress may cause delays",
          "severity": "high"
        },
        {
          "type": "overflow",
          "description": "Excess volume of 500 MT beyond capacity",
          "severity": "high"
        }
      ],
      "analysis": "Detailed risk analysis and mitigation strategies...",
      "risk_score": 65
    },
    "optimizations": {
      "suggestions": "Optimization recommendations...",
      "sources": [...]
    },
    "analysis_type": "comprehensive",
    "generated_at": "2026-01-31T16:00:00.000Z"
  }
}
```

---

## 7. Interactive Chat

### Example 1: Simple Question
```bash
curl -X POST $BASE_URL/api/ai-forecast/chat \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What is the forecasted harvest volume?",
    "forecast_data": {
      "total_forecasted_volume": 1500
    }
  }'
```

### Example 2: Complex Analysis
```bash
curl -X POST $BASE_URL/api/ai-forecast/chat \
  -H "Content-Type: application/json" \
  -d '{
    "question": "We have high logistics stress and excess volume. What should we do?",
    "forecast_data": {
      "logistics_stress_level": "HIGH",
      "excess_volume": 500,
      "total_forecasted_volume": 1500,
      "transport_capacity": 1000
    }
  }'
```

### Example 3: Storage Inquiry
```bash
curl -X POST $BASE_URL/api/ai-forecast/chat \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Is our storage capacity sufficient?",
    "forecast_data": {
      "total_storage_capacity": 5000,
      "current_storage_usage": 4200,
      "forecasted_volume": 1500
    }
  }'
```

---

## 8. Knowledge Base Management

### Index New Knowledge
```bash
curl -X POST $BASE_URL/api/knowledge/index \
  -H "Content-Type: application/json" \
  -d '{
    "documents": [
      {
        "id": "custom-practice-1",
        "title": "Custom Best Practice",
        "category": "harvest",
        "tags": ["timing", "quality"],
        "text": "Detailed description of the best practice..."
      }
    ]
  }'
```

### Query Knowledge Base
```bash
curl -X POST $BASE_URL/api/knowledge/query \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What are quality control standards for harvest?",
    "options": {
      "topK": 5
    }
  }'
```

### Knowledge Base Health
```bash
curl -X GET $BASE_URL/api/knowledge/health
```

---

## 9. Testing Different Scenarios

### Scenario 1: Normal Harvest
```bash
curl -X POST $BASE_URL/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "weather_deviation": 0,
    "enable_ai": true
  }'
```

### Scenario 2: Favorable Weather
```bash
curl -X POST $BASE_URL/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "weather_deviation": 1,
    "enable_ai": true
  }'
```

### Scenario 3: Adverse Weather
```bash
curl -X POST $BASE_URL/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "weather_deviation": -1,
    "enable_ai": true
  }'
```

### Scenario 4: Single Farmer Analysis
```bash
curl -X POST $BASE_URL/api/ai-forecast/dashboard \
  -H "Content-Type: application/json" \
  -d '{
    "farmer_id": "F001",
    "enable_ai": true
  }'
```

---

## 10. Rate Limit Testing

Make 31+ requests within 15 minutes to test rate limiting:

```bash
for i in {1..35}; do
  echo "Request $i"
  curl -X POST $BASE_URL/api/ai-forecast/query \
    -H "Content-Type: application/json" \
    -d '{"question": "Test query '$i'"}'
  echo ""
done
```

After 30 requests, you should receive:
```json
{
  "success": false,
  "error": "Too many requests, please try again later."
}
```

---

## JavaScript/Node.js Examples

### Using Fetch
```javascript
// AI-Enhanced Dashboard
const response = await fetch('http://localhost:3000/api/ai-forecast/dashboard', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    enable_ai: true,
    weather_deviation: 0
  })
});

const data = await response.json();
console.log(data);
```

### Using Axios
```javascript
const axios = require('axios');

// Natural Language Query
const result = await axios.post('http://localhost:3000/api/ai-forecast/query', {
  question: 'What are best practices for harvest timing?'
});

console.log(result.data);
```

---

## Python Examples

```python
import requests

# AI-Enhanced Dashboard
response = requests.post(
    'http://localhost:3000/api/ai-forecast/dashboard',
    json={
        'enable_ai': True,
        'weather_deviation': 0
    }
)

data = response.json()
print(data)
```

```python
# Natural Language Query
response = requests.post(
    'http://localhost:3000/api/ai-forecast/query',
    json={
        'question': 'What are best practices for harvest timing?'
    }
)

print(response.json()['data']['answer'])
```

---

## Postman Collection

Import this JSON into Postman:

```json
{
  "info": {
    "name": "AlignAI API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "AI Dashboard",
      "request": {
        "method": "POST",
        "url": "{{base_url}}/api/ai-forecast/dashboard",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"enable_ai\": true\n}"
        }
      }
    }
  ],
  "variable": [
    {
      "key": "base_url",
      "value": "http://localhost:3000"
    }
  ]
}
```

---

## Performance Testing

### Apache Bench
```bash
# Test dashboard endpoint
ab -n 100 -c 10 -T application/json -p dashboard.json \
  http://localhost:3000/api/ai-forecast/dashboard
```

Where `dashboard.json` contains:
```json
{"enable_ai": true}
```

---

## Tips

1. **Enable Caching**: The API uses Redis caching for better performance
2. **AI Features**: Set `enable_ai: false` for faster responses without AI
3. **Rate Limits**: AI endpoints have stricter rate limits (30/15min)
4. **Error Handling**: Always check the `success` field in responses
5. **Sources**: Check the `sources` array in AI responses for knowledge base citations

---

**Happy Testing! 🧪**
