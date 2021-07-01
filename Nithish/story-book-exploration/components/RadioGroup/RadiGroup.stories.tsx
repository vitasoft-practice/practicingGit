import { Meta, Story } from "@storybook/react";
import radiobuttonInterface from "./radiobuttonInterface";
import RadioButton from "./RadioGroup";

const primary = "#185ADB";
const secondary = "#0A1931";
export default {
    title: "RadioGroup",
    component: RadioButton,
    argTypes: {
        themeColor: {
            options: ["#185ADB", "#0A1931"],
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