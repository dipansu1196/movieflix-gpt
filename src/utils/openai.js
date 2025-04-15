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
