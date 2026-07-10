# NSE Financial Analytics Platform

Real-time market data dashboard for the Nairobi Stock Exchange.
Built for The Reggs Limited as both a client tool and a live portfolio demonstration.

**Live demo:** [thereggsltd.netlify.app/#magic](https://thereggsltd.netlify.app/#magic)

---

## Current State

Phase 1 — client-side simulation running live on the portfolio site.
Phase 2 — Spring Boot API + PostgreSQL time-series backend (in development).

---

## Planned Architecture

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite |
| Backend API | Java 21, Spring Boot 3 |
| Database | PostgreSQL (time-series), Redis cache |
| Data source | NSE market feed / yfinance for historical data |
| Deployment | AWS ECS, CloudFront |
| CI/CD | GitHub Actions |

---

## Running the demo locally

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173

---

## Roadmap

- [x] Client-side simulation with live-ticking prices
- [ ] Spring Boot REST API for market data ingestion
- [ ] PostgreSQL schema for OHLCV time-series data
- [ ] Redis caching layer for real-time feed
- [ ] WebSocket connection for true real-time updates
- [ ] Portfolio analytics — P&L, risk metrics, allocation charts
- [ ] Authentication for multi-user portfolio tracking
- [ ] AWS deployment with auto-scaling

---

## Author

Reagan Fwamba — [thereggsltd.netlify.app](https://thereggsltd.netlify.app)