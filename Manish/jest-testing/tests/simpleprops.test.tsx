import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PassProps from '../components/PassProps'
import ChildProps from '../components/ChildProps'

Enzyme.configure({ adapter: new Adapter() });

describe("render users components correctly", () => {



    test('check child components exits or not ', () => {
        const wrapper = shallow(<PassProps />);

        const childComponents = wrapper.find('ChildProps');
        
        console.log(childComponents);

        const childProps = childComponents.props().onClick;

        expect(childComponents.exists()).toBeTruthy();
        // expect(childComponents.props()).toBe('click here!');


    })

    test('check props ', () => {
        const wrapper = shallow(<ChildProps />);
        const buttonElement = wrapper.find('button');
        expect(buttonElement.props().children).toBe('click here!');
        expect(buttonElement.props().onClick).toBe('onClick');

    })




    it('calls "handleClick()" on button click', () => {
        const wrapper = shallow(<ChildProps />);
        // const myfun = wrapper.instance();
        const spy = jest.spyOn(ChildProps.prototype, 'handleClick');
        wrapper.update();
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('calls correct function to save', () => {
        const onButtonClickMock = jest.fn();
        const wrapper = shallow(
            <button
                onClick={onButtonClickMock}
            />,
        );
        const buttonElement = wrapper.find('button');
        buttonElement.simulate('click');

        expect(onButtonClickMock).toHaveBeenCalledTimes(1);
        // expect(onButtonClickMock).toHaveBeenCalledWith(
        //     expect.objectContaining({
        //        onClick:'handleClick'
        //     })
        // )

    });


});
