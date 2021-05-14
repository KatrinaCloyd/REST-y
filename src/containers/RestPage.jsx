import React, { Component } from 'react';
import FormSection from '../components/elements/FormSection';
import HeaderEle from '../components/elements/HeaderEle';
import History from '../components/elements/History';
import ResultsDisplay from '../components/elements/ResultsDisplay';
import style from '../components/app/app.css';

export default class RestPage extends Component {

    state = {
        url: '',
        route: '',
        json: '',
        response: [{ "root": { "Hello": "I am bored. PLEASE make a fetch!" } }],
        history: [],
    }

    handleRouteChange = (e) => {
        this.setState({ route: e.target.value })
    }

    handleUrlChange = (e) => {
        this.setState({ url: e.target.value })
    }

    handleJsonChange = (e) => {
        this.setState({ json: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //need to do all the things with state
    }

    render() {
        return (
            <>
                <HeaderEle />
                <div className={style.page}>
                    <History history={this.state.history} />
                    <div className={style.mainsection}>
                        <FormSection
                            url={this.state.url}
                            route={this.state.route}
                            json={this.state.json}
                        />
                        <ResultsDisplay info={this.state.response} />
                    </div>
                </div>
            </>
        );
    }
}