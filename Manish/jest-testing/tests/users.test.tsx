import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { create } from 'react-test-renderer'
import Users from '../components/Users'


describe("render users ccomponents correctly", () => {
    afterEach(cleanup);

    const user = {
        name: 'abc',
        dob: '04-06-1999',
        email: 'abc@domain.com'
      
    }
    it('Snapshot matched', () => {
        const userComponent = create(<Users user={user} />);
        expect(userComponent.toJSON()).toMatchSnapshot();

    })

    // it('user props matches', () => {
    //     const { getByTestId } = render(<Users user={user} />);

    //     expect(getByTestId('userintro').textContent).toBe('Hello, THis is abc,DOB 04-06-1999 and email Id abc@domain.com');

    // })
})