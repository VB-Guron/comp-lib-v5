import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components/ui/textarea";

const meta: Meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Textarea placeholder="Default variant" />,
};

export const Filled: Story = {
  render: () => <Textarea variant="filled" placeholder="Filled variant" />,
};

export const Underline: Story = {
  render: () => (
    <Textarea variant="underline" placeholder="Underline variant" />
  ),
};

export const Ghost: Story = {
  render: () => <Textarea variant="ghost" placeholder="Ghost variant" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea textareaSize="sm" placeholder="Small" />
      <Textarea textareaSize="default" placeholder="Default" />
      <Textarea textareaSize="lg" placeholder="Large" />
    </div>
  ),
};
