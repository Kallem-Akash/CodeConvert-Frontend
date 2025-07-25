# CodeConvert-Frontend


> **Checkout my Github profile for backend repository.**

---

## Project Overview

**CodeConvert AI** is a full-stack web application that uses OpenAI's GPT model to instantly convert code from one programming language to another.  
It's built for developers who want to save time switching tech stacks, learning syntax, or prototyping across languages.

Just select your source and target languages, paste your code, and get a clean, converted result — with no comments, markdown, or fluff.

---

## Features

| Feature             | Description                                                  |
|--------------------|--------------------------------------------------------------|
| 🧠 AI Conversion     | Uses OpenAI GPT (gpt-4o or gpt-3.5-turbo) for accurate code transforms |
| 🖥️ Multi-language   | Converts between Python, Java, JavaScript, C++, Go, and more |
| 🎯 No Frills Output | Returns **only code**, no explanations, no markdown         |
| ⚡ Fast + Responsive | Optimized UI built with Tailwind + React                    |
| 🔐 Env-based Config | API keys and URLs secured via environment variables         |
| 🌍 Deployed         | Fully deployed backend (Railway) and frontend (Vercel)      |

---

## Tech Stack

| Layer           | Technology                                     |
|----------------|------------------------------------------------|
| Frontend       | React 18, Vite, Tailwind CSS                   |
| Backend        | Java 17, Spring Boot 3, Maven                  |
| AI API         | OpenAI GPT (via `chat/completions` endpoint)  |
| Hosting        | Vercel (frontend), Railway (backend)          |

---

## Screenshots

### 🧠 Code Converter Page


![CodeConvert Screenshot 1](src/assets/codeconvert1.png)
![CodeConvert Screenshot 2](src/assets/codeconvert2.png)

*Paste → Convert → Copy. Clean, simple, and developer-friendly.*

---

## Live Demo

👉 **Try it now:** [https://codexconvert.vercel.app](https://codexconvert.vercel.app)

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn
- Java 17+
- An OpenAI API Key (with GPT access)

---


