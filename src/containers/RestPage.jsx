import React, { Component } from 'react';
import FormSection from '../components/elements/FormSection';
import HeaderEle from '../components/elements/HeaderEle';
import History from '../components/elements/History';
import ResultsDisplay from '../components/elements/ResultsDisplay';
import style from '../components/app/app.css';
import { makeDeleteCall, makeGetCall, makePutOrPostCall } from '../services/apiUtils';

export default class RestPage extends Component {

    state = {
        url: ' URL',
        route: 'GET',
        json: ' Raw JSON Body',
        response: [{ "root": { "Hello": "I am bored. PLEASE make a fetch!" } }],
        history: [{
            route: 'GET',
            url: 'http:blahblah.com'
        },
        {
            route: 'GET AGAIN',
            url: 'http:blahblah2.comhttp:blahblah2.comhttp:blahblah2.comhttp:blahblah2.comhttp:blahblah2.comhttp:blahblah2.comhttp:blahblah2.comhttp:blahblah2.comhttp:blahblah2.com'
        },
        ],
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

    handleSubmit = async (e) => {
        e.preventDefault();

        //add call to history array in state
        // const newHstItem = {
        //     route: this.state.route,
        //     url: this.state.url
        // }
        // this.setState({ history: this.state.history.push(newHstItem) });

        //make call
        if (this.state.route === 'GET') {
            const response = await makeGetCall(this.state.url);
            this.setState({ response });
        }
        else if (this.state.route === 'DELETE') {
            response = await makeDeleteCall(this.state.url);
            this.setState({ response });
        }
        else {
            response = await makePutOrPostCall(this.state.url, this.state.route);
            this.setState({ response });
        }
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
                            onRouteChange={this.handleRouteChange}
                            onUrlChange={this.handleUrlChange}
                            onJsonChange={this.handleJsonChange}
                            onSubmit={this.handleSubmit}
                        />
                        <ResultsDisplay info={this.state.response} />
                    </div>
                </div>
            </>
        );
    }
}