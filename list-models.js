const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();
        console.log("Available Models:");
        if (data.models) {
            data.models.forEach(model => {
                console.log(`- ${model.name}`);
            });
        } else {
            console.log("No models found. Response:", JSON.stringify(data));
        }
    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
