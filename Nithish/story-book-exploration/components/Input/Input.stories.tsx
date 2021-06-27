import InputpropsInterface from "./inputPropsInterface";
import Input from './Input';
import { Story, Meta } from '@storybook/react';


export default {
    title: 'Input',
    component: Input
} as Meta;

const Template: Story<InputpropsInterface> = (args) => <Input {...args} />

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
    placeholder: "Enter something",
    color: '#FAF1E6'
};

export const SecondaryInput = Template.bind({});
SecondaryInput.args = {
    ...PrimaryInput.args,
    color: '#DDDDDD'
};
