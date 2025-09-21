import type { Meta, StoryObj } from "@storybook/react";
import { ContentMargin } from "../components/layout/content-margin";

const meta: Meta<typeof ContentMargin> = {
  title: "Layout/ContentMargin",
  component: ContentMargin,
  parameters: {
    docs: {
      description: {
        component:
          "A layout utility that applies responsive horizontal padding and max-width, matching your design system's breakpoints. Uses the .content-margin SCSS class.",
      },
    },
  },
  argTypes: {
    as: {
      description: "The HTML element to render (default: 'div')",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
    children: {
      description: "Content to render inside the margin container",
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentMargin>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          background: "#f3f4f6",
          border: "1px dashed #888",
          padding: 24,
        }}
      >
        <h2>ContentMargin Demo</h2>
        <p>
          This box is wrapped in <code>ContentMargin</code>. Resize the window
          to see the responsive horizontal padding and max-width in action.
        </p>
        <p>
          The <b>.content-margin</b> class is applied, matching your design
          system's breakpoints and layout rules.
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the responsive margin and max-width utility. The inner box is for visual clarity only.",
      },
    },
  },
};
