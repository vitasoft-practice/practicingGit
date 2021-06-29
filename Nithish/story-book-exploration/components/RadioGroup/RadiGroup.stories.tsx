import { Meta, Story } from "@storybook/react";
import radiobuttonInterface from "./radiobuttonInterface";
import RadioButton from "./RadioGroup";

const primary = "#5F939A";
const secondary = "#FF7B54";
export default {
    title: "RadioGroup",
    component: RadioButton,
    argTypes: {
        themeColor: {
            options: ["#5F939A", "#FF7B54"],
            control: 'radio'
        }
    }
} as Meta

const Template: Story<radiobuttonInterface> = (args) => <RadioButton {...args} />;
export const PrimaryRadioGroup = Template.bind({});
PrimaryRadioGroup.args = {
    themeColor: primary,
    elements: [{ val: "One", disabled: false }, { val: "Two", disabled: true }, { val: "Three", disabled: false }, { val: "Four", disabled: false }],
}