import React from 'react';
import FormSection from '../components/elements/FormSection';
import HeaderEle from '../components/elements/HeaderEle';
import History from '../components/elements/History';
import ResultsDisplay from '../components/elements/ResultsDisplay';
import style from '../components/app/app.css';

export default function RestPage() {
    return (
        <>
            <HeaderEle />
            <div className={style.page}>
                <History />
                <div className={style.mainsection}>
                    <FormSection />
                    <ResultsDisplay />
                </div>
            </div>
        </>
    );
}