import React from "react";
import { Button } from "../components/ui/button";
import { ButtonContainer } from "../components/ui/button-container";
import { BgDemo, BgDemoProps } from "../components/ui/bg-demo";
import type { Meta, StoryObj } from "@storybook/react";
import "../styles/globals.css";

const meta: Meta<typeof ButtonContainer> = {
  title: "UI/ButtonContainer",
  component: ButtonContainer,
  tags: ["autodocs"],
  argTypes: {
    location: {
      control: { type: "radio" },
      options: ["flex-start", "center", "flex-end", "space-between"],
      description: "Horizontal alignment of buttons",
      defaultValue: "center",
    },
    wrap: {
      control: { type: "radio" },
      options: ["wrap", "no-wrap"],
      description: "Wrap or no-wrap for buttons",
      defaultValue: "wrap",
    },
    className: { control: "text", description: "Additional Tailwind classes" },
  },
  args: {
    location: "center",
    wrap: "wrap",
  },
  decorators: [
    (Story, context) => {
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
  React.ComponentProps<typeof ButtonContainer> & {
    theme?: BgDemoProps["theme"];
  }
>;

const getButtons = (count: number) => {
  const variants = ["default", "secondary", "destructive", "outline"] as const;
  return Array.from({ length: count }).map((_, i) => (
    <Button
      key={i}
      variant={variants[i % variants.length]}
    >{`Button ${i + 1}`}</Button>
  ));
};

export const Demo: Story = {
  name: "ButtonContainer Demo",
  args: {
    location: "flex-start",
    wrap: "wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const FlexStartWrap: Story = {
  name: "Flex Start (wrap)",
  args: {
    location: "flex-start",
    wrap: "wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const CenterWrap: Story = {
  name: "Center (wrap)",
  args: {
    location: "center",
    wrap: "wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const FlexEndWrap: Story = {
  name: "Flex End (wrap)",
  args: {
    location: "flex-end",
    wrap: "wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const SpaceBetweenWrap: Story = {
  name: "Space Between (wrap)",
  args: {
    location: "space-between",
    wrap: "wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const FlexStartNoWrap: Story = {
  name: "Flex Start (no-wrap)",
  args: {
    location: "flex-start",
    wrap: "no-wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const CenterNoWrap: Story = {
  name: "Center (no-wrap)",
  args: {
    location: "center",
    wrap: "no-wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const FlexEndNoWrap: Story = {
  name: "Flex End (no-wrap)",
  args: {
    location: "flex-end",
    wrap: "no-wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const SpaceBetweenNoWrap: Story = {
  name: "Space Between (no-wrap)",
  args: {
    location: "space-between",
    wrap: "no-wrap",
    theme: "light",
    children: getButtons(2),
  },
};

export const UseCase: Story = {
  name: "Use Case: Close & Submit",
  args: {
    location: "flex-end",
    wrap: "no-wrap",
    theme: "light",
    children: [
      <Button key="close" variant="link">
        Close
      </Button>,
      <Button key="submit" variant="default">
        Submit
      </Button>,
    ],
  },
};
