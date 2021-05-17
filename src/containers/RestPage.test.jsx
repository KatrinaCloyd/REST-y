import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import RestPage from './RestPage';
import userEvent from '@testing-library/user-event';

describe('restish page component', () => {
    afterEach(() => cleanup());
    it('tests get route user story', () => {
        render(<RestPage />);
        screen.getByText('REST-ish');

        const urlInput = screen.getByRole('textbox', { name: 'urlInput' });
        userEvent.type(urlInput, "https://rocky-refuge-35369.herokuapp.com/characters");

        const getRouteBtn = screen.getByRole('radio', { name: 'get' });
        userEvent.click(getRouteBtn);

        const goBtn = screen.getByRole('button', { name: 'submit' })
        userEvent.click(goBtn);

        screen.getByRole('region', { name: 'jsonResults' })

        const historyList = screen.getByRole('list', { name: 'history' });

        return waitFor(() => {
            const jsonResponse = screen.getAllByText('Yzma', { exact: false });
            expect(jsonResponse).toHaveLength(1);
            expect(historyList).not.toBeEmptyDOMElement();
        });

    });

    it('tests post route user story', () => {
        render(<RestPage />);
        screen.getByText('REST-ish');

        const urlInput = screen.getByRole('textbox', { name: 'urlInput' });
        userEvent.type(urlInput, "https://rocky-refuge-35369.herokuapp.com/characters");

        const postRouteBtn = screen.getByRole('radio', { name: 'post' });
        userEvent.click(postRouteBtn);

        const jsonInput = screen.getByRole('textbox', { name: 'json' });
        userEvent.type(jsonInput, `{{"name":"HELLLLLOOOOOOOOO","species_id":4,"role":"sidekick","unique_power":"none","movie":"No Movie","movie_year":1951,"hand_drawn":true,"image":"https:blah.jpeg","gif":"https:blah.gif"}`);

        const goBtn = screen.getByRole('button', { name: 'submit' })
        userEvent.click(goBtn);

        screen.getByRole('region', { name: 'jsonResults' })
        const historyList = screen.getByRole('list', { name: 'history' });

        return waitFor(() => {
            const jsonResponse = screen.getAllByText('HELLLLLOOOOOOOOO', { exact: false });
            expect(jsonResponse).toHaveLength(2);
            expect(historyList).not.toBeEmptyDOMElement();
        });
    });

    it('tests post route user story', () => {
        render(<RestPage />);
        screen.getByText('REST-ish');

        const urlInput = screen.getByRole('textbox', { name: 'urlInput' });
        userEvent.type(urlInput, "https://rocky-refuge-35369.herokuapp.com/characters");

        const postRouteBtn = screen.getByRole('radio', { name: 'post' });
        userEvent.click(postRouteBtn);

        const jsonInput = screen.getByRole('textbox', { name: 'json' });
        userEvent.type(jsonInput, `{{"name":"HELLLLLOOOOOOOOO","species_id":4,"role":"sidekick","unique_power":"none","movie":"No Movie","movie_year":1951,"hand_drawn":true,"image":"https:blah.jpeg","gif":"https:blah.gif"}`);

        const goBtn = screen.getByRole('button', { name: 'submit' })
        userEvent.click(goBtn);

        screen.getByRole('region', { name: 'jsonResults' })
        const historyList = screen.getByRole('list', { name: 'history' });

        return waitFor(() => {
            const jsonResponse = screen.getAllByText('HELLLLLOOOOOOOOO', { exact: false });
            expect(jsonResponse).toHaveLength(2);
            expect(historyList).not.toBeEmptyDOMElement();
        });
    });

    it('tests put route user story', () => {
        render(<RestPage />);
        screen.getByText('REST-ish');

        const urlInput = screen.getByRole('textbox', { name: 'urlInput' });
        userEvent.type(urlInput, "https://rocky-refuge-35369.herokuapp.com/characters/32");

        const putRouteBtn = screen.getByRole('radio', { name: 'put' });
        userEvent.click(putRouteBtn);

        const jsonInput = screen.getByRole('textbox', { name: 'json' });
        userEvent.type(jsonInput, `{{"name":"Sir Purrs Alot", "owner_id":1, "species_id":4, "role":"hero", "unique_power":"Making Things Better...", "movie":"The Movie in His Mind", "movie_year": 2045, "hand_drawn":false, "image": "http://placekitten.com/200/200", "gif":"http://placekitten.com/300/300"}`);

        const goBtn = screen.getByRole('button', { name: 'submit' })
        userEvent.click(goBtn);

        screen.getByRole('region', { name: 'jsonResults' })
        const historyList = screen.getByRole('list', { name: 'history' });

        return waitFor(() => {
            const jsonResponse = screen.getAllByText('Sir Purrs Alot', { exact: false });
            expect(jsonResponse).toHaveLength(2);
            expect(historyList).not.toBeEmptyDOMElement();
        });
    });

    it('tests delete route user story', () => {
        render(<RestPage />);
        screen.getByText('REST-ish');

        const urlInput = screen.getByRole('textbox', { name: 'urlInput' });
        userEvent.type(urlInput, "https://rocky-refuge-35369.herokuapp.com/characters/HELLLLLOOOOOOOOO");

        const deleteRouteBtn = screen.getByRole('radio', { name: 'delete' });
        userEvent.click(deleteRouteBtn);

        const goBtn = screen.getByRole('button', { name: 'submit' })
        userEvent.click(goBtn);

        screen.getByRole('region', { name: 'jsonResults' })
        const historyList = screen.getByRole('list', { name: 'history' });

        return waitFor(() => {
            const jsonResponse = screen.getAllByText('HELLLLLOOOOOOOOO', { exact: false });
            expect(jsonResponse).toHaveLength(2);
            expect(historyList).not.toBeEmptyDOMElement();
        });
    });
});

