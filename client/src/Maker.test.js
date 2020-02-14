import React from 'react';
import { render } from '@testing-library/react';
import Maker from './Maker';
describe('Maker', () => {
    it('should be a number', () => {
        const { getByText } = render(<Maker />);
        const header = getByText("runners");

        // Assert
        expect(header).toBeTruthy();
        expect(header).not.toBeFalsy();
    })
})