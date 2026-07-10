import React, { useState, useEffect, useRef } from 'react'
import { TICKERS } from './data/tickers'
import Header from './components/Header'
import MarketSummary from './components/MarketSummary'
import TickerTable from './components/TickerTable'

function App() {
  const [rows, setRows] = useState(() =>
    TICKERS.map((t) => ({
      ...t,
      price: t.basePrice,
      change: 0,
      flash: null,
    }))
  )

  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRows((prev) =>
        prev.map((row) => {
          const delta = (Math.random() * 0.03 - 0.015) * row.price
          const newPrice = Math.max(0.01, row.price + delta)
          const change = ((newPrice - row.basePrice) / row.basePrice) * 100

          return {
            ...row,
            price: Number(newPrice.toFixed(2)),
            change: Number(change.toFixed(2)),
            flash: delta >= 0 ? 'up' : 'down',
          }
        })
      )

      setTimeout(() => {
        setRows((prev) => prev.map((r) => ({ ...r, flash: null })))
      }, 450)
    }, 1800)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className="app">
      <div className="container">
        <Header />
        <MarketSummary rows={rows} />
        <TickerTable rows={rows} />
        <div className="footer-note">
          <span>Data simulated for demonstration · Phase 1</span>
          <a
            href="https://github.com/couldbereggsf/nse-financial-analytics-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="ph ph-github-logo"></i> View Source
          </a>
        </div>
      </div>
    </div>
  )
}

export default App