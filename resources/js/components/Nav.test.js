import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

describe('Nav', function () {
    it('应该包括网站的名字', function () {
        const { getByText } = render(<Nav />);

        expect(getByText('Laravel Pro')).toBeVisible();
    });
});
