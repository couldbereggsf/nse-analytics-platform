import React from 'react'

export default function TickerRow({ symbol, name, price, change, flash }) {
    const flashClass = flash === 'up' ? 'tick-flash-up' :
        flash === 'down' ? 'tick-flash-down' : ''

    return (
        <tr className={flashClass}>
            <td>
                <div className="ticker-info">
                    <span className="ticker-symbol">{symbol}</span>
                    <span className="ticker-name">{name}</span>
                </div>
            </td>
            <td className="ticker-price">{price.toFixed(2)}</td>
            <td>
                <span className={change >= 0 ? 'tick-up' : 'tick-down'}>
                    {change >= 0 ? '+' : ''}{change.toFixed(2)}%
                </span>
            </td>
        </tr>
    )
}