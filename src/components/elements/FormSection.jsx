import React from 'react';
import style from '../app/app.css';

export default function FormSection({
    url,
    json,
    onRouteChange,
    onUrlChange,
    onJsonChange,
    onSubmit
}) {
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onUrlChange} type="text" aria-label="urlInput" className={style.urlSearch} value={url} placeholder=' URL' /><br />
            <div>
                <input type="radio" aria-label="get" name="CRUD" id="get" value="GET" onChange={onRouteChange} />
                <label htmlFor="get">GET</label>
                <input type="radio" aria-label="post" name="CRUD" id="post" value="POST" onChange={onRouteChange} />
                <label htmlFor="post">POST</label>
                <input type="radio" aria-label="put" name="CRUD" id="put" value="PUT" onChange={onRouteChange} />
                <label htmlFor="put">PUT</label>
                <input type="radio" aria-label="delete" name="CRUD" id="delete" value="DELETE" onChange={onRouteChange} />
                <label htmlFor="delete">DELETE</label>
                <button aria-label="submit">Go!</button>
            </div><br />
            <textarea onChange={onJsonChange} type="text" aria-label="json" value={json} rows='4' className={style.json} placeholder=' Raw JSON Body' />
        </form>
    )
}
