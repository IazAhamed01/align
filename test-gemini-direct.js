/**
 * Direct LLM Test - bypasses server to test LLM configuration
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGemini() {
    console.log('\n🧪 Testing Gemini API directly...\n');

    const apiKey = process.env.GEMINI_API_KEY;
    const modelName = 'gemini-2.5-flash'; // Using the confirmed working model

    console.log('API Key:', apiKey.substring(0, 20) + '...');
    console.log('Model:', modelName);
    console.log('');

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: modelName });

        console.log('✅ Model initialized successfully');
        console.log('📝 Testing text generation...\n');

        const prompt = "In 2-3 sentences, explain what are the best practices for harvest timing in agriculture.";

        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 200
            }
        });

        const response = result.response;
        const text = response.text();

        console.log('✅ AI Response:');
        console.log('-'.repeat(60));
        console.log(text);
        console.log('-'.repeat(60));
        console.log('\n🎉 SUCCESS! Gemini API is working perfectly!\n');
        console.log('✅ Next step: Restart your server with Ctrl+C then npm run dev\n');

    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('\n💡 If you see a 404 error, the model name might be wrong.');
        console.log('   Try visiting: https://ai.google.dev/gemini-api/docs/models/gemini\n');
    }
}

testGemini();
