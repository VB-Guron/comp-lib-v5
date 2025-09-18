import React from "react";
import { BgDemo, BgDemoProps } from "../components/ui/bg-demo";
import type { Meta, StoryObj } from "@storybook/react";
import "../styles/globals.css";

const meta: Meta<BgDemoProps> = {
  title: "UI/BgDemo",
  component: BgDemo,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: { type: "radio" },
      options: ["light", "dark"],
      description: "Theme mode for preview",
      defaultValue: "light",
      table: {
        category: "Appearance",
      },
    },
    children: { control: "text" },
  },
  args: {
    theme: "light",
    children: "Background Demo",
  },
};

export default meta;

type Story = StoryObj<BgDemoProps>;

export const Default: Story = {
  args: {},
};

export const WithCustomContent: Story = {
  args: {
    children: "Custom content on background",
  },
};
