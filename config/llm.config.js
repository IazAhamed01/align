/**
 * LLM Configuration Module
 * Supports multiple LLM providers: OpenAI, Google Gemini
 */

require('dotenv').config();
const { OpenAI } = require('openai');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Determine which LLM provider to use
const LLM_PROVIDER = process.env.LLM_PROVIDER || 'gemini'; // 'openai' or 'gemini'

class LLMConfig {
    constructor() {
        this.provider = LLM_PROVIDER;
        this.initializeClients();
    }

    initializeClients() {
        // Initialize OpenAI
        if (this.provider === 'openai' && process.env.OPENAI_API_KEY) {
            this.openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY
            });
            this.model = process.env.OPENAI_MODEL || 'gpt-4-turbo-preview';
            this.embeddingModel = process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small';
        }

        // Initialize Google Gemini
        if (this.provider === 'gemini' && process.env.GEMINI_API_KEY) {
            this.gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
            this.model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
        }
    }

    /**
     * Generate text completion
     */
    async generateCompletion(prompt, options = {}) {
        try {
            if (this.provider === 'openai') {
                return await this.generateOpenAICompletion(prompt, options);
            } else if (this.provider === 'gemini') {
                return await this.generateGeminiCompletion(prompt, options);
            }
        } catch (error) {
            console.error('LLM completion error:', error);
            throw error;
        }
    }

    /**
     * OpenAI completion
     */
    async generateOpenAICompletion(prompt, options = {}) {
        const response = await this.openai.chat.completions.create({
            model: this.model,
            messages: [
                {
                    role: 'system',
                    content: options.systemPrompt || 'You are an expert agricultural AI assistant.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: options.temperature || 0.7,
            max_tokens: options.maxTokens || 1000,
            response_format: options.jsonMode ? { type: 'json_object' } : undefined
        });

        return response.choices[0].message.content;
    }

    /**
     * Google Gemini completion
     */
    async generateGeminiCompletion(prompt, options = {}) {
        // Use the correct model name for current SDK version
        const modelName = this.model || 'gemini-1.5-flash';

        const model = this.gemini.getGenerativeModel({
            model: modelName
        });

        const systemPrompt = options.systemPrompt || 'You are an expert agricultural AI assistant.';
        const fullPrompt = `${systemPrompt}\n\n${prompt}`;

        const generationConfig = {
            temperature: options.temperature || 0.7,
            maxOutputTokens: options.maxTokens || 1000,
            responseMimeType: options.jsonMode ? 'application/json' : undefined // Re-added for JSON mode support
        };

        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
            generationConfig
        });

        const response = result.response;
        return response.text();
    }

    /**
     * Generate embeddings for RAG
     */
    async generateEmbedding(text) {
        try {
            if (this.provider === 'openai') {
                const response = await this.openai.embeddings.create({
                    model: this.embeddingModel,
                    input: text
                });
                return response.data[0].embedding;
            } else if (this.provider === 'gemini') {
                // Use correct embedding model for Gemini
                const model = this.gemini.getGenerativeModel({ model: 'text-embedding-004' });
                const result = await model.embedContent(text);
                return result.embedding.values;
            }
        } catch (error) {
            console.error('Embedding generation error:', error.message);
            throw error;
        }
    }

    /**
     * Generate structured JSON output
     */
    async generateStructuredOutput(prompt, schema, options = {}) {
        const jsonPrompt = `${prompt}\n\nRespond ONLY with valid JSON matching this schema:\n${JSON.stringify(schema, null, 2)}`;

        const response = await this.generateCompletion(jsonPrompt, {
            ...options,
            jsonMode: true
        });

        try {
            return JSON.parse(response);
        } catch (error) {
            console.error('Failed to parse JSON response:', response);
            throw new Error('Invalid JSON response from LLM');
        }
    }
}

module.exports = new LLMConfig();
