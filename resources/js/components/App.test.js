import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App', function () {

    it('首页应该重定向到帖子列表', async function () {
        axios.get.mockImplementation(() =>
            Promise.resolve({
                data: [],
            })
        );

        const history = createMemoryHistory({ initialEntries: ['/'] });
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        await waitFor(() => expect(history.location.pathname).toBe('/threads'));
    });
});
