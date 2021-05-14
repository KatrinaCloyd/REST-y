import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import RestPage from './RestPage';

describe('restish page component', () => {
    afterEach(() => cleanup());
    it('renders restish page', () => {
        render(<RestPage />);
        screen.getByText('REST-ish');

        //get url input 
        const urlInput = screen.getByRole('textbox', { name: 'urlInput' });
        //user input of a url

        //get radio bttns 
        const getBtn = screen.getByRole('radio', { name: 'get' });
        const postBtn = screen.getByRole('radio', { name: 'post' });
        const putBtn = screen.getByRole('radio', { name: 'put' });
        const deleteBtn = screen.getByRole('radio', { name: 'delete' });
        //select one with user input of click 

        //get json field 
        const jsonInput = screen.getByRole('textbox', { name: 'json' });
        //user input of info 

        //get submit bttn 
        const goBtn = screen.getByRole('button', { name: 'submit' })
        //user action of of submit 

        //get results area 
        const results = screen.getByRole('region', { name: 'jsonResults' })
        //check results to contain some expected result

        //get history section 
        const historyList = screen.getByRole('list', { name: 'history' })
        //expect to contain some li 

    });
});