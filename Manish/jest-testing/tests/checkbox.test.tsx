import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CheckBoxWithLabel from '../components/CheckBoxWithLabel'

describe('should render successfully <CheckBoxWithLabel />', () => {
    afterEach(cleanup);
    it('checkbox text change after click  ', () => {
        const { getByLabelText } = render(<CheckBoxWithLabel labelOn='on' labelOff='off' />);

        expect(getByLabelText(/off/i)).toBeTruthy();

        fireEvent.click(getByLabelText(/off/i));

        expect(getByLabelText(/on/i)).toBeTruthy();
        
        fireEvent.click(getByLabelText(/on/i));

        expect(getByLabelText(/off/i)).toBeTruthy();


    })
})