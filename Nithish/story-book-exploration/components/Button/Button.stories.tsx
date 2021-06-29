import { Meta, Story } from "@storybook/react";
import Button from "./Button";
import ButtonPropsInterface from "./buttonPropsInterface";

const primary = "#5F939A";
const secondary = "#FF7B54";

export default {
    title: 'Button',
    component: Button,
    // argTypes: {
    //     size: {
    //         options: ['small', 'medium', 'large'],
    //         control: { type: 'radio' },
    //     },
    //     color: {
    //         options: [primary, secondary],
    //         control: { type: 'radio' },
    //     },
    // },
    argTypes: {
        onClick: { action: 'Clicked' },
        color: { control: 'color' }
    }
} as Meta;

const Template: Story<ButtonPropsInterface> = (args) => <Button {...args} />

export const PrimaryNormal = Template.bind({});
PrimaryNormal.args = {
    children: "Button",
    color: primary,
}
export const SecondaryNormal = Template.bind({});
SecondaryNormal.args = {
    children: "Secondary",
    color: secondary
}
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    ...PrimaryNormal.args,
    children: "Primary Small",
    size: "small"
}
export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    ...PrimaryNormal.args,
    children: "Primary Medium",
    size: "medium"
}
export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    ...PrimaryNormal.args,
    children: "Primary Large",
    size: "large"
}
export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    ...SecondaryNormal.args,
    children: "Secondary Small",
    size: "small"
}
export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
    ...SecondaryNormal.args,
    children: "Secondary Medium",
    size: "medium"
}
export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
    ...SecondaryNormal.args,
    children: "Secondary Large",
    size: "large"
}