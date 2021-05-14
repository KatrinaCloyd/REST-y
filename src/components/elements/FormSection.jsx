import React from 'react';
import style from '../app/app.css';

export default function FormSection() {
    return (
        <form>
            <input type="text" aria-label="urlInput" className={style.urlSearch} defaultValue="URL" /><br />
            <div>
                <input type="radio" aria-label="get" name="CRUD" id="get" value="get" />
                <label htmlFor="get">GET</label>
                <input type="radio" aria-label="post" name="CRUD" id="post" value="post" />
                <label htmlFor="post">POST</label>
                <input type="radio" aria-label="put" name="CRUD" id="put" value="put" />
                <label htmlFor="put">PUT</label>
                <input type="radio" aria-label="delete" name="CRUD" id="delete" value="delete" />
                <label htmlFor="delete">DELETE</label>
                <button aria-label="submit">Go!</button>
            </div><br />
            <textarea type="text" aria-label="json" defaultValue="Raw JSON Body" rows='4' className={style.json} />
        </form>
    )
}
