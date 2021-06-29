import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import HelloTest from '../components/HelloTest'


describe('HelloTest components', () => {

    afterEach(cleanup);


    it('should correctly render components', () => {
        // const { getByTestId } = 
        render(<HelloTest />);

        // console.log(getByTestId);

        const title = screen.getByTestId('header')
        // expect(title.textContent).toBe('Testing!');

        expect('title').toBeInTheDocument();
        expect('title').toHaveTextContent('Testing!')
    });

});