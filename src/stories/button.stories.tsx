import React from "react";
import { Button } from "../components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import "../styles/globals.css";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Primary Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Variants = {
  render: (args: any) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const Sizes = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon">
        Icon
      </Button>
    </div>
  ),
  args: {
    children: undefined,
  },
};
