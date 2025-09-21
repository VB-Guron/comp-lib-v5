import React from "react";
import { Button } from "../components/ui/button";
import { BgDemo, BgDemoProps } from "../components/ui/bg-demo";
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
  decorators: [
    (Story, context) => {
      // Default to 'light' if not provided
      const theme =
        (context.args as { theme?: BgDemoProps["theme"] }).theme || "light";
      return (
        <BgDemo theme={theme}>
          <Story />
        </BgDemo>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<
  React.ComponentProps<typeof Button> & { theme?: BgDemoProps["theme"] }
>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Primary Button",
    disabled: false,
    theme: "light",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
    theme: "light",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex w-full flex-col gap-2 sm:w-auto">
      {" "}
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
    theme: "light",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-full flex-col gap-2 sm:w-auto">
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
    theme: "light",
  },
};
