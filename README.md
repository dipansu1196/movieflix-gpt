# 🎬MovieFlix GPT – Personalized Movie Recommendations with DeepSeek R1 Zero

Welcome to MovieFlix GPT, a Netflix-inspired web app that delivers AI-powered movie recommendations using DeepSeek R1 Zero (Free). Explore movies, watch trailers, and get personalized suggestions based on your unique viewing habits.


## 🎯 Key Features

## Movie Discovery
Browse trending, top-rated, and upcoming movies via TMDB API

Watch YouTube trailers instantly

Filter by genre, release year, and ratings

 ## 🔐 Secure & Personalized
Firebase Authentication (Email/Google/GitHub login)

Save favorites and track watch history

DeepSeek R1 Zero-powered recommendations

 ## 🧠 AI-Powered Recommendations
Powered by DeepSeek R1 Zero (Free), our model analyzes:
✔ Your watch history & ratings
✔ Novelty-seeking behavior (preference for new vs familiar genres)
✔ Forgetfulness patterns (how your interests shift over time)
✔ Contextual signals (time of day, device, session length)




## Sign in ( Email)

Browse movies and rate what you like

Get AI-driven recommendations in the "For You" section

## 🛠️ Developer Setup
Prerequisites
Node.js (v18+)

## Firebase project (for auth & hosting)

## TMDB API key

## Installation
bash
git clone https://github.com/rajatrawal/movieflix-gpt.git
cd movieflix-gpt
npm install
Configure Environment
Rename .env.example to .env.local

## Add your keys:

env
VITE_TMDB_API_KEY=your_tmdb_key
VITE_FIREBASE_API_KEY=your_firebase_config
Run Locally
bash
npm run dev
Open http://localhost:3000

## 🔧 Tech Stack
Category	Technology
Frontend	React, Vite
Backend	Firebase (Auth, Hosting)
AI Model	DeepSeek R1 Zero (Free)
Movie Data	TMDB API
Styling	Tailwind CSS
🤖 How DeepSeek R1 Zero Enhances Recommendations
Unlike traditional collaborative filtering, DeepSeek R1 Zero uses:

Zero-shot learning → Works even with sparse user data

Novelty detection → Suggests fresh content based on your taste

Forgetfulness modeling → Adjusts recommendations over time

## Diagram

![deepseek_mermaid_20250423_96220d](https://github.com/user-attachments/assets/0c780a18-fb49-4e54-9936-52de9749b4db)



## 📈 Future Roadmap
Multi-user profiles (Family/Shared accounts)

Netflix-like "Skip Intro" feature

DeepSeek Chat Integration (Ask AI: "Suggest a thriller with a twist ending")

## 🤝 Contribute
Want to improve MovieFlix GPT?
🔹 Report bugs → GitHub Issues
🔹 Submit PRs → New features, optimizations, or UI upgrades

🎬 Ready to find your next favorite movie? Try MovieFlix GPT Now! 🍿


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
