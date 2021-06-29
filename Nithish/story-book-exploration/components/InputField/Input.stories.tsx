import InputpropsInterface from "./inputPropsInterface";
import Input from './Input';
import { Story, Meta } from '@storybook/react';
import { useState } from "react";

const black = "#000";
const red = "#CD113B";
const green = "#66DE93";
const primary = "#5F939A";
const secondary = "#FF7B54";
export default {
    title: 'Input',
    component: Input,
    argTypes: {
        color: { control: 'color' },
        borderColor: { options: [green, red, black], control: 'select' }
    }

} as Meta;

const Template: Story<InputpropsInterface> = (args) => <Input {...args} />

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
    placeholder: "Enter something",
    color: primary,
    borderColor: black
    // value: primaryVal,
    // onchange: setPrimaryVal
};

export const SecondaryInput = Template.bind({});
SecondaryInput.args = {
    ...PrimaryInput.args,
    color: secondary,
    borderColor: black
    // value: secondaryVal,
    // onchange: setSecondaryVal
};
