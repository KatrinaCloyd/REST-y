import React from 'react';
import style from '../app/app.css';

export default function ResultsDisplay({ info }) {
    return (
        <section aria-label="jsonResults" className={style.results}>
            {JSON.stringify(info, null, '\t')}
        </section>
    )
}
