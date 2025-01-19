import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
    test('renders the heading with correct text and structure', () => {
        render(<Home />);

        const headingElement = screen.getByText(/tuffz\.com/i);
        expect(headingElement).toBeInTheDocument();
        expect(headingElement.tagName).toBe('H1');

        const copyrightElement = screen.getByText(/©/i);
        expect(copyrightElement).toBeInTheDocument();

        expect(headingElement).toContainElement(copyrightElement);
    });
});

