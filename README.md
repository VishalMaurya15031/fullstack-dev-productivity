# DevInsight - Developer Productivity MVP 🚀

**🔗 [Live Demo Link](https://fullstack-dev-productivity.vercel.app/)**

Welcome to the **DevInsight Developer Productivity MVP**. This project was built as an intern assignment to demonstrate product thinking, full-stack engineering, and the ability to move beyond raw data into actionable insights.

## 🌟 The Problem
Developers and managers often have access to raw metrics (Lead Time, Cycle Time, etc.), but *metrics alone do not explain what is happening or what the user should do next.*

## 💡 The Solution
DevInsight is a focused, full-stack MVP designed to solve this problem. It doesn't just display charts; it translates raw data into a **"Story Behind the Data"** and provides **Actionable Next Steps** for the developer.

### Key Features:
- **Individual Contributor (IC) View**: Displays 5 core metrics (Lead Time, Cycle Time, Bug Rate, Deployment Frequency, PR Throughput). 
- **Interactive Insights**: Click on any metric card to expand and reveal AI-driven interpretations and practical next steps to improve workflows.
- **Manager Summary (Stretch Goal)**: A high-level dashboard for team health and bottlenecks.
- **Premium UI**: Built with a sleek, glassmorphism dark-mode aesthetic using purely Vanilla CSS (No heavy CSS frameworks).

## 🏗️ Architecture & Tech Stack
- **Frontend**: React.js (Vite)
- **Backend/API**: Node.js & Express
- **Data**: Mock API approach using an isolated `mockData.js` store (ready to be hooked up to a real DB).
- **Icons**: Lucide React

## 🚀 How to Run Locally

To run this full-stack application, you will need two terminal windows.

### 1. Start the Backend API Server
Open your first terminal in the root directory and run:
```bash
npm install express cors
node server.js
```
*The API will run on `http://localhost:3000`*

### 2. Start the React Frontend
Open your second terminal in the root directory and run:
```bash
npm install
npm run dev
```
*The UI will run on `http://localhost:5173`*

## 🧠 Product Thinking Highlights
- **Cycle Time vs Lead Time**: If Cycle Time is high but Lead Time is low, the MVP correctly identifies that work is sitting in "In Progress" for too long before a PR is opened.
- **Mock Data Layer**: By isolating the data in `mockData.js`, the UI is completely decoupled. This is a deliberate choice to allow rapid UI iteration before investing in heavy database infrastructure.

## 🤖 Responsible AI Usage
AI was used to:
1. Brainstorm the mapping between raw metrics and human-readable stories.
2. Accelerate boilerplate setup (Vite + Express).
3. Ensure high-quality, defensible code architecture.

---
*Built by Vishal Maurya*
