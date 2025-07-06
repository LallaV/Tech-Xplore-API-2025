import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// Enable CORS for all domains
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}));

// Transaction Insights API
app.get("/api/transactions", (c) => {
  const response = {
    "transactions": [
      {
        "date": "2025-06-24",
        "merchant": "Coffee Shop",
        "category": "Food & Drink",
        "amount": 4.50
      },
      {
        "date": "2025-06-23",
        "merchant": "Uber",
        "category": "Transport",
        "amount": 12.00
      }
    ]
  };
  return c.json(response);
});

// Investment Suggestions API
app.get("/api/investments", (c) => {
  const response = {
    "investments": [
      {
        "name": "Investec ESG Fund",
        "riskLevel": "Medium",
        "recommendedAmount": 2500
      },
      {
        "name": "Renewable Energy ETF",
        "riskLevel": "Low",
        "recommendedAmount": 1500
      }
    ]
  };
  return c.json(response);
});

// Carbon Footprint API
app.get("/api/carbon", (c) => {
  const response = {
    "carbonFootprintKg": 75,
    "tips": [
      "Use public transportation twice per week",
      "Limit fast-fashion purchases to once per month"
    ]
  };
  return c.json(response);
});

// Health check endpoint
app.get("/", (c) => {
  return c.json({
    "message": "Mock API Template Worker",
    "endpoints": [
      "/api/transactions",
      "/api/investments",
      "/api/carbon"
    ]
  });
});

export default app;
