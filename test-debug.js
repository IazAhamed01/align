/**
 * Simple test to see actual API responses
 */

const axios = require('axios');

async function test() {
    console.log('\n🧪 Testing API endpoints...\n');

    try {
        // Test AI Query
        console.log('Testing: POST /api/ai-forecast/query');
        const response = await axios.post('http://localhost:3000/api/ai-forecast/query', {
            question: 'What are best practices for harvest timing?'
        });

        console.log('\n📊 Full Response:');
        console.log(JSON.stringify(response.data, null, 2));

    } catch (error) {
        console.error('\n❌ Error:');
        if (error.response) {
            console.log('Status:', error.response.status);
            console.log('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.log(error.message);
        }
    }
}

test();
