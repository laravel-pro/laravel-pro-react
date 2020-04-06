import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import Nav from './Nav';

describe('Nav', function () {
    const renderNav = () => {
        const history = createMemoryHistory({ initialEntries: ['/threads'] });
        const utils = render(
            <Router history={history}>
                <Nav />
            </Router>
        );
        return {
            history,
            ...utils,
        };
    };

    it('应该包括网站的名字', function () {
        const { getByText, history } = renderNav();

        expect(getByText('Laravel Pro')).toBeVisible();
    });

    it('网站名字应该链接到首页', function () {
        const { getByText, history } = renderNav();

        fireEvent.click(getByText('Laravel Pro'));
        expect(history.location.pathname).toBe('/');
    });
});
