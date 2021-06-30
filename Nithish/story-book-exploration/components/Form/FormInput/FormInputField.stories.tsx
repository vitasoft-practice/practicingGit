import { Meta, Story } from "@storybook/react";
import FormInputField from "./FormInputField";
import forminputInterface from "./forminputinterface";


const shadowDefaultActive = 'rgba(61, 109, 249, .8)';
export default {
    title: 'Form/FormInput',
    component: FormInputField,
    argTypes: {
        shadowColor: {
            control: 'color'
        }
    }
} as Meta
const Template: Story<forminputInterface> = (args) => <FormInputField {...args} />

export const FormInput = Template.bind({});
FormInput.args = {
    placeholder: "Full Name",
    shadowColor: shadowDefaultActive,
}