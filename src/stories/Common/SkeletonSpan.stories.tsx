import React from "react";
import SkeletonSpan from "../../components/common/SkeletonSpan";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof SkeletonSpan> = {
  title: "Common/SkeletonSpan",
  component: SkeletonSpan,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "wide"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A simple skeleton loading component that renders as an h1 element with configurable width to show loading states.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonSpan>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">SkeletonSpan Default</h3>
          <SkeletonSpan {...args} />
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    size: "wide",
  },
};

export const AllSizes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">SkeletonSpan Sizes</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">Small (25% width)</h4>
              <SkeletonSpan size="small" />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Medium (50% width)</h4>
              <SkeletonSpan size="medium" />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Wide (100% width)</h4>
              <SkeletonSpan size="wide" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Loading State Examples</h3>

          <div className="space-y-4">
            <div className="p-4 border rounded">
              <h4 className="text-md font-medium mb-2">Article Title Loading</h4>
              <SkeletonSpan size="medium" />
            </div>

            <div className="p-4 border rounded">
              <h4 className="text-md font-medium mb-2">Short Label Loading</h4>
              <SkeletonSpan size="small" />
            </div>

            <div className="p-4 border rounded">
              <h4 className="text-md font-medium mb-2">Full Width Heading Loading</h4>
              <SkeletonSpan size="wide" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const InContext: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">SkeletonSpan in Context</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded">
              <h4 className="text-md font-medium mb-4">Card Loading State</h4>
              <div className="space-y-3">
                <SkeletonSpan size="medium" />
                <div className="text-sm text-muted-foreground">Content would appear here...</div>
                <SkeletonSpan size="small" />
              </div>
            </div>

            <div className="p-4 border rounded">
              <h4 className="text-md font-medium mb-4">List Item Loading</h4>
              <div className="space-y-2">
                <SkeletonSpan size="wide" />
                <SkeletonSpan size="medium" />
                <SkeletonSpan size="small" />
              </div>
            </div>

            <div className="p-4 border rounded">
              <h4 className="text-md font-medium mb-4">Form Field Loading</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Field Label</label>
                  <SkeletonSpan size="wide" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Another Field</label>
                  <SkeletonSpan size="medium" />
                </div>
              </div>
            </div>

            <div className="p-4 border rounded">
              <h4 className="text-md font-medium mb-4">Header Loading</h4>
              <div className="space-y-3">
                <SkeletonSpan size="small" />
                <div className="text-xs text-muted-foreground">Subtitle area</div>
                <SkeletonSpan size="wide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};