// src/utils/openai.js
import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: "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",
    defaultHeaders: {
        "HTTP-Referer": "http://localhost:3001",
        "X-Title": "MovieFlix-GPT",
        "Content-Type": "application/json",
    },
    dangerouslyAllowBrowser: true
});

export default openai;
