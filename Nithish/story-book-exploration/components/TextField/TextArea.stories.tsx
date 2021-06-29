import { Meta, Story } from "@storybook/react";
import TextInput from "./TextArea";
import textAreaInterface from "./textAreaInterface";

const defaultRows = 4;
const defaultCols = 80;
const defaultDisabled = false;
const primary = "#5F939A";
const secondary = "#FF7B54";
export default {
    title: 'TextArea',
    component: TextInput,
    argTypes: {
        rows: { control: 'number' },
        cols: { control: 'number' },
        disabled: { control: 'boolean' },
        themeColor: { control: 'color' },
    }
} as Meta

const Template: Story<textAreaInterface> = (args) => <TextInput {...args} />;

export const PrimaryTextInput = Template.bind({});
PrimaryTextInput.args = {
    placeholder: "Enter something",
    name: "TextArea",
    id: "Textarea",
    rows: defaultRows,
    cols: defaultCols,
    themeColor: primary,
    disabled: defaultDisabled,
}
export const SecondaryTextInput = Template.bind({});
SecondaryTextInput.args = {
    ...PrimaryTextInput.args,
    themeColor: secondary

}