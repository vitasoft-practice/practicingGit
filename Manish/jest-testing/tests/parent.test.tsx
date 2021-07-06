import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { create } from 'react-test-renderer'
import Parent from '../components/Parent'

describe("render users components correctly", () => {
    
    // const mockChild = jest.fn();

    jest.mock("./Child", () => (props: any) => {
        // mockChild(props);
        return <mock-Child />;
    });

    test('if parents is passed open and has data ,child is called when open true and passed data', () => {
        render(<Parent open data="some data" />);
        expect(mockChild).toHaveBeenCalledWith(
            expect.objectContaining({
                open: true,
                data: "some data",
            })
        )
    })


})