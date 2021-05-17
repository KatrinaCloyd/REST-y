import React from 'react';
import style from '../app/app.css';

export default function ResultsDisplay({ info }) {
    return (
        <section aria-label="jsonResults" className={style.results}>
            <pre>
                {JSON.stringify(info, null, ' ')}
            </pre>
        </section>
    )
}
