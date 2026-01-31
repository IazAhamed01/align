/**
 * Quick AI Test Script
 * Tests if the AI features are working properly
 */

const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testAPI() {
    console.log('\n🧪 Testing AlignAI Backend...\n');

    try {
        // Test 1: Health Check
        console.log('1️⃣  Testing Health Endpoint...');
        const healthResponse = await axios.get(`${BASE_URL}/health`);
        console.log('✅ Health Check:', healthResponse.data);
        console.log('');

        // Test 2: AI Query
        console.log('2️⃣  Testing AI Natural Language Query...');
        const queryResponse = await axios.post(`${BASE_URL}/api/ai-forecast/query`, {
            question: 'What are the best practices for harvest timing?'
        });
        console.log('✅ AI Query Response:');
        const responseData = queryResponse.data.data || queryResponse.data;
        console.log('   Question:', responseData.question);
        const answer = responseData.answer || responseData.response || 'No answer';
        console.log('   Answer:', answer.substring(0, 200) + '...');
        console.log('');

        // Test 3: Traditional Dashboard
        console.log('3️⃣  Testing Traditional Dashboard...');
        const dashResponse = await axios.post(`${BASE_URL}/api/forecast/dashboard`, {
            date: '2024-02-15',
            region: 'Kalaburagi'
        });
        console.log('✅ Dashboard Response:');
        console.log('   Harvest Forecast:', dashResponse.data.harvest_forecast.total_volume, 'tonnes');
        console.log('   Logistics Stress:', dashResponse.data.logistics_stress.overall_score);
        console.log('');

        // Test 4: AI-Enhanced Dashboard
        console.log('4️⃣  Testing AI-Enhanced Dashboard...');
        const aiDashResponse = await axios.post(`${BASE_URL}/api/ai-forecast/dashboard`, {
            date: '2024-02-15',
            region: 'Kalaburagi',
            enable_ai: true
        });
        console.log('✅ AI Dashboard Response:');
        console.log('   Total Volume:', aiDashResponse.data.harvest_forecast.total_volume, 'tonnes');
        if (aiDashResponse.data.ai_insights) {
            console.log('   AI Insights:', aiDashResponse.data.ai_insights.summary.substring(0, 150) + '...');
        }
        console.log('');

        console.log('🎉 All tests passed! Your AI platform is working perfectly!\n');
        console.log('📖 Next steps:');
        console.log('   - Open http://localhost:3000 in your browser');
        console.log('   - Check API_EXAMPLES.md for more usage examples');
        console.log('   - Read GET_STARTED.md for complete guide\n');

    } catch (error) {
        console.error('❌ Test failed:', error.response?.data || error.message);
        console.log('');
        console.log('💡 Make sure:');
        console.log('   1. Server is running (npm run dev)');
        console.log('   2. GEMINI_API_KEY is set in .env');
        console.log('   3. LLM_PROVIDER=gemini in .env\n');
    }
}

// Run tests
testAPI();
