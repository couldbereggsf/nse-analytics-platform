import React from 'react'

export default function MarketSummary({ rows }) {
    if (!rows || rows.length === 0) return null

    const totalChange = rows.reduce((sum, r) => sum + r.change, 0) / rows.length
    const advancing = rows.filter(r => r.change > 0).length
    const declining = rows.filter(r => r.change < 0).length

    return (
        <div className="market-summary">
            <div className="summary-item">
                <span className="summary-label">Market Sentiment</span>
                <span className={`summary-value ${totalChange >= 0 ? 'positive' : 'negative'}`}>
                    {totalChange >= 0 ? '📈 Bullish' : '📉 Bearish'}
                </span>
            </div>
            <div className="summary-item">
                <span className="summary-label">Advancing</span>
                <span className="summary-value positive">{advancing}</span>
            </div>
            <div className="summary-item">
                <span className="summary-label">Declining</span>
                <span className="summary-value negative">{declining}</span>
            </div>
            <div className="summary-item">
                <span className="summary-label">Stocks</span>
                <span className="summary-value">{rows.length}</span>
            </div>
        </div>
    )
}