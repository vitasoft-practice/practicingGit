import { Meta, Story } from "@storybook/react";
import FormButton from "./FormButton";
import formButtonInterface from "./formButtoninterface";

const defaultColor = '#275EFE';
const defaultSize = 14;
const defaultBorderRadius = 9;
export default {
    title: 'Form/FormButton',
    component: FormButton,
    argTypes: {
        color: { control: 'color' },
        fontSize: { control: 'number' },
        borderRadius: { control: 'number' }
    }
} as Meta

const Template: Story<formButtonInterface> = (args) => <FormButton {...args} />

export const FormDefaultButton = Template.bind({});
FormDefaultButton.args = {
    children: "Submit",
    color: defaultColor,
    fontSize: defaultSize,
    borderRadius: defaultBorderRadius,
}