# Start AlignAI Development Server

Write-Host "`n🌾 Starting AlignAI Backend Server..." -ForegroundColor Green

# Check if .env exists
if (-Not (Test-Path ".env")) {
    Write-Host "⚠️  .env file not found. Creating from template..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
    Write-Host "✅ .env file created. Please edit it and add your API keys." -ForegroundColor Green
    Write-Host ""
    Write-Host "Required: Add one of these to .env:" -ForegroundColor Cyan
    Write-Host "  - GEMINI_API_KEY=your_key (Get free at https://makersuite.google.com/app/apikey)" -ForegroundColor White
    Write-Host "  - OPENAI_API_KEY=your_key (Get at https://platform.openai.com/api-keys)" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter after adding your API key to .env"
}

# Check if node_modules exists
if (-Not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Start the server
Write-Host "`n🚀 Starting server..." -ForegroundColor Green
Write-Host "📡 Server will be available at http://localhost:3000" -ForegroundColor Cyan
Write-Host "📖 API Documentation: http://localhost:3000" -ForegroundColor Cyan
Write-Host "`n💡 Test with: curl -X POST http://localhost:3000/api/ai-forecast/query -H 'Content-Type: application/json' -d '{\"question\": \"test\"}'" -ForegroundColor Gray
Write-Host ""

npm run dev
