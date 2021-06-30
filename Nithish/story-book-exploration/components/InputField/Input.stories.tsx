import InputpropsInterface from "./inputPropsInterface";
import Input from './Input';
import { Story, Meta } from '@storybook/react';

const black = "#000";
const red = "#CD113B";
const green = "#66DE93";
const primary = "#185ADB";
const secondary = "#0A1931";
export default {
    title: 'Input',
    component: Input,
    argTypes: {
        color: { control: 'color' },
        borderColor: { options: [green, red, black], control: 'select' },
        disabled: { control: 'boolean' }
    }

} as Meta;

const Template: Story<InputpropsInterface> = (args) => <Input {...args} />

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
    placeholder: "Enter something",
    color: primary,
    borderColor: black,
    disabled: false,
};

export const SecondaryInput = Template.bind({});
SecondaryInput.args = {
    ...PrimaryInput.args,
    color: secondary,
    borderColor: black
};
