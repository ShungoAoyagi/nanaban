import React from "react";
import { Meta, Story } from "@storybook/react";
import { PrimaryButton, PrimaryButtonProps } from ".";

export default {
  title: "PrimaryButton",
  component: PrimaryButton,
} as Meta;

const Template: Story<PrimaryButtonProps> = (args) => (
  <PrimaryButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "ボタン",
};
