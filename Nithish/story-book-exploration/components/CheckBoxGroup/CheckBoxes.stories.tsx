import CheckBoxes from "./CheckBoxes";
import { Meta, Story } from "@storybook/react";
import checkboxInterface from "./checkboxinterface";

const primary = "#5F939A";
const secondary = "#FF7B54";
export default {
    title: "CheckBoxGroup",
    component: CheckBoxes,
    argTypes: {
        themeColor: {
            options: ["#5F939A", "#FF7B54"],
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