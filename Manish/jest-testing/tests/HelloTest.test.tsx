import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import HelloTest from '../components/HelloTest'


describe('HelloTest components', () => {

    afterEach(cleanup);


    it('should correctly render components', () => {
        const { getByTestId } = render(<HelloTest />);

        // console.log(getByTestId);

        const title = getByTestId('heading')
        expect(title.textContent).toBe('Testing!');

    });

});