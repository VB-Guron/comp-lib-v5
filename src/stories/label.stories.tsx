import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/ui/label";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  args: {
    children: "Label Text",
    htmlFor: "input-id",
  },
  argTypes: {
    children: { control: "text" },
    htmlFor: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label Text",
    htmlFor: "input-id",
  },
};
