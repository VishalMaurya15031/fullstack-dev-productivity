import express from 'express';
import cors from 'cors';
import { icMetrics, managerMetrics } from './src/data/mockData.js';

const app = express();
const PORT = 3000;

// Middleware to handle CORS so our React app (on port 5173) can fetch data
app.use(cors());

// IC View Endpoint
app.get('/api/metrics/ic', (req, res) => {
  // Simulating a slight delay to make it feel like a real API call
  setTimeout(() => {
    res.json(icMetrics);
  }, 500);
});

// Manager View Endpoint
app.get('/api/metrics/manager', (req, res) => {
  setTimeout(() => {
    res.json(managerMetrics);
  }, 500);
});

app.listen(PORT, () => {
  console.log(`✅ Backend API server is running on http://localhost:${PORT}`);
  console.log(`➡️  IC API Endpoint: http://localhost:${PORT}/api/metrics/ic`);
  console.log(`➡️  Manager API Endpoint: http://localhost:${PORT}/api/metrics/manager`);
});
