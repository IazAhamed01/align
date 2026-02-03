/**
 * Test Live Deployed API
 * Tests all endpoints on https://align-jdcz.onrender.com
 */

const axios = require('axios');

const BASE_URL = 'https://align-jdcz.onrender.com';

async function testLiveAPI() {
    console.log('\n🌐 TESTING LIVE DEPLOYED API');
    console.log('='.repeat(60));
    console.log(`Base URL: ${BASE_URL}\n`);

    let passed = 0;
    let failed = 0;

    try {
        // Test 1: Health Check
        console.log('1️⃣  Health Check...');
        const healthResponse = await axios.get(`${BASE_URL}/health`);
        console.log('✅ PASSED');
        console.log('   Response:', JSON.stringify(healthResponse.data, null, 2));
        console.log('');
        passed++;

    } catch (error) {
        console.log('❌ FAILED:', error.message);
        console.log('');
        failed++;
    }

    try {
        // Test 2: AI Natural Language Query
        console.log('2️⃣  AI Natural Language Query...');
        const queryResponse = await axios.post(`${BASE_URL}/api/ai-forecast/query`, {
            question: 'What are the best practices for harvest timing?'
        });
        console.log('✅ PASSED');
        const answer = queryResponse.data.data.answer;
        console.log('   Question:', queryResponse.data.data.question);
        console.log('   Answer Preview:', answer.substring(0, 200) + '...');
        console.log('   Full answer length:', answer.length, 'characters');
        console.log('');
        passed++;

    } catch (error) {
        console.log('❌ FAILED:', error.message);
        console.log('');
        failed++;
    }

    try {
        // Test 3: Traditional Dashboard
        console.log('3️⃣  Traditional Forecast Dashboard...');
        const dashResponse = await axios.post(`${BASE_URL}/api/forecast/dashboard`, {
            date: '2024-02-15',
            region: 'Kalaburagi'
        });
        console.log('✅ PASSED');
        console.log('   Harvest Volume:', dashResponse.data.harvest_forecast?.total_volume || 'N/A', 'tonnes');
        console.log('   Logistics Score:', dashResponse.data.logistics_stress?.overall_score || 'N/A');
        console.log('');
        passed++;

    } catch (error) {
        console.log('❌ FAILED:', error.message);
        console.log('');
        failed++;
    }

    try {
        // Test 4: AI-Enhanced Dashboard
        console.log('4️⃣  AI-Enhanced Dashboard...');
        const aiDashResponse = await axios.post(`${BASE_URL}/api/ai-forecast/dashboard`, {
            date: '2024-02-15',
            region: 'Kalaburagi',
            enable_ai: true
        });
        console.log('✅ PASSED');
        console.log('   Total Volume:', aiDashResponse.data.harvest_forecast?.total_volume || 'N/A', 'tonnes');
        if (aiDashResponse.data.ai_insights) {
            console.log('   AI Insights:', aiDashResponse.data.ai_insights.summary?.substring(0, 150) + '...' || 'Generated');
        }
        console.log('');
        passed++;

    } catch (error) {
        console.log('❌ FAILED:', error.message);
        console.log('');
        failed++;
    }

    try {
        // Test 5: Knowledge Base
        console.log('5️⃣  Knowledge Base Index...');
        const knowledgeResponse = await axios.post(`${BASE_URL}/api/knowledge/index`, {
            content: 'Test agricultural knowledge: Optimal soil pH for wheat is 6.0-7.5',
            metadata: { source: 'test', category: 'soil' }
        });
        console.log('✅ PASSED');
        console.log('   Knowledge indexed successfully');
        console.log('');
        passed++;

    } catch (error) {
        console.log('❌ FAILED:', error.message);
        console.log('');
        failed++;
    }

    // Summary
    console.log('='.repeat(60));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📈 Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);
    console.log('');

    if (failed === 0) {
        console.log('🎉 ALL TESTS PASSED! YOUR API IS FULLY FUNCTIONAL!');
        console.log('');
        console.log('🌐 Your live API: ' + BASE_URL);
        console.log('📦 GitHub: https://github.com/IazAhamed01/align');
        console.log('');
        console.log('✅ Ready for production use!');
        console.log('✅ Ready for hackathon demo!');
        console.log('✅ Ready to share with team!');
    } else {
        console.log('⚠️  Some tests failed. Check the errors above.');
    }
    console.log('');
}

// Run tests
testLiveAPI();
