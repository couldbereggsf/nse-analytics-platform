import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <span className="header-icon">📊</span>
                <h1>NSE Financial Analytics</h1>
            </div>
            <div className="header-right">
                <span className="live-badge">
                    <span className="live-dot"></span> LIVE
                </span>
                <span className="update-info">Updates every 1.8s</span>
            </div>
        </div>
    )
}