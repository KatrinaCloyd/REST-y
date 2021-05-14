import React from 'react';
import style from '../app/app.css';

export default function FormSection() {
    return (
        <form>
            <input className={style.urlSearch} defaultValue="URL" /><br />
            <div>
                <label htmlFor="get">GET</label>
                <input type="radio" name="CRUD" id="get" value="get" />
                <label htmlFor="post">POST</label>
                <input type="radio" name="CRUD" id="post" value="post" />
                <label htmlFor="put">PUT</label>
                <input type="radio" name="CRUD" id="put" value="put" />
                <label htmlFor="delete">DELETE</label>
                <input type="radio" name="CRUD" id="delete" value="delete" />
                <button>Go!</button>
            </div><br />
            <textarea defaultValue="Raw JSON Body" rows='4' />
        </form>
    )
}
