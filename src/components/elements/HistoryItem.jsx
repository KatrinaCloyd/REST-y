import React from 'react';

export default function HistoryItem({ route, url }) {
    return (
        < article >
            <p>{route}</p>
            <span>{url}</span>
        </article >
    )
}
