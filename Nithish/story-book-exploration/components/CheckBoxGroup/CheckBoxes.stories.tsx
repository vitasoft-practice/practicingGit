import CheckBoxes from "./CheckBoxes";
import { Meta, Story } from "@storybook/react";
import checkboxInterface from "./checkboxinterface";

const primary = "#185ADB";
const secondary = "#0A1931";
export default {
    title: "CheckBoxGroup",
    component: CheckBoxes,
    argTypes: {
        themeColor: {
            options: ["#185ADB", "#0A1931"],
            control: 'radio'
        }
    }
} as Meta

const Template: Story<checkboxInterface> = (args) => <CheckBoxes {...args} />

export const PrimaryCheckBoxGroup = Template.bind({});
PrimaryCheckBoxGroup.args = {
    themeColor: primary,
    elements: [{ val: "One", disabled: false }, { val: "Two", disabled: true }, { val: "Three", disabled: false }, { val: "Four", disabled: false }],
}