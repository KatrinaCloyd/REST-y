import React from 'react';
import style from '../app/app.css';
import HistoryItem from './HistoryItem';
import '../app/app.css';

export default function History({ history }) {
    return (
        <ul className={style.sideBar} aria-label="history">
            {history.map((item) => (
                <li key={`${item.route}-${item.url}`}>
                    <HistoryItem route={item.route} url={item.url} />
                </li>
            ))}
        </ul>
    )
}
