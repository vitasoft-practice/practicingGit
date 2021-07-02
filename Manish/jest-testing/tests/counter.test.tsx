import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import SimpleCounter from '../components/SimpleCounter'

let getByTestId: any;

describe('SimpleCounter components <SimpleCounter />', () => {

    beforeEach(() => {
        const component = render(<SimpleCounter />);
        getByTestId = component.getByTestId;
    })

    afterEach(cleanup);

    it('change value  of input correctly', () => {


        console.log(getByTestId('counterinput').value)

        expect(getByTestId('counterinput').value).toEqual('1');

        fireEvent.change(getByTestId('counterinput'), {
            target: {
                value: "5"
            }
        })

        expect(getByTestId('counterinput').value).toEqual('5')
    })


    it('add Counter works correctly', () => {



        expect(getByTestId('counterval').textContent).toEqual('0');

        fireEvent.click(getByTestId('counterAddBtn'))

        expect(getByTestId('counterval').textContent).toEqual('1')
    })


    it('substract Counter works correctly', () => {



        expect(getByTestId('counterval').textContent).toEqual('0');

        fireEvent.click(getByTestId('counterSubBtn'))

        expect(getByTestId('counterval').textContent).toEqual('-1')
    })



    it('add Counter works correctly with inputVal', () => {



        expect(getByTestId('counterval').textContent).toEqual('0');


        fireEvent.change(getByTestId('counterinput'), {
            target: {
                value: "5"
            }
        })

        fireEvent.click(getByTestId('counterAddBtn'))

        expect(getByTestId('counterval').textContent).toEqual('5')
    })


    it('substract Counter works correctly with InputVal', () => {



        expect(getByTestId('counterval').textContent).toEqual('0');


        fireEvent.change(getByTestId('counterinput'), {
            target: {
                value: "5"
            }
        })

        fireEvent.click(getByTestId('counterSubBtn'))

        expect(getByTestId('counterval').textContent).toEqual('-5')
    })



    it('add and substract Counter works correctly with InputVal', () => {



        expect(getByTestId('counterval').textContent).toEqual('0');


        fireEvent.change(getByTestId('counterinput'), {
            target: {
                value: "5"
            }
        })

        fireEvent.click(getByTestId('counterAddBtn'))
        fireEvent.click(getByTestId('counterAddBtn'))

        fireEvent.click(getByTestId('counterSubBtn'))
        fireEvent.click(getByTestId('counterSubBtn'))
        fireEvent.click(getByTestId('counterSubBtn'))

        expect(getByTestId('counterval').textContent).toEqual('-5')
    })




    it('add and substract Counter color functinality works correctly', () => {



        expect(getByTestId('counterval').textContent).toEqual('0');


        fireEvent.change(getByTestId('counterinput'), {
            target: {
                value: "5"
            }
        })

        fireEvent.click(getByTestId('counterAddBtn'))
        fireEvent.click(getByTestId('counterAddBtn'))

        fireEvent.click(getByTestId('counterSubBtn'))
        fireEvent.click(getByTestId('counterSubBtn'))
        fireEvent.click(getByTestId('counterSubBtn'))

        expect(getByTestId('counterval').className).toEqual('red')
    })






});