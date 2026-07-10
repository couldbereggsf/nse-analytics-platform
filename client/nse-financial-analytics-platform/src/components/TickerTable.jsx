import React from 'react'
import TickerRow from './TickerRow'

export default function TickerTable({ rows }) {
    return (
        <div className="table-wrapper">
            <table className="ticker-table">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Price (KES)</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <TickerRow key={row.symbol} {...row} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}