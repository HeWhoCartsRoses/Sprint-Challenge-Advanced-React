import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
describe('Navbar', () => {
    it('should be a number', () => {
        const { getByText } = render(<Navbar />);
        const header = getByText("Women's Sports");

        // Assert
        expect(header).toBeTruthy();
    })
})