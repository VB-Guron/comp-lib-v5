import React from "react";
import { SkeletonShad } from "../../components/ui/skeleton";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof SkeletonShad> = {
  title: "Common/SkeletonShad",
  component: SkeletonShad,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A modern skeleton component with pulse animation and rounded corners, built with shadcn/ui styling patterns.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonShad>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">SkeletonShad Default</h3>
          <SkeletonShad className="h-4 w-48" {...args} />
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    className: "h-4 w-48",
  },
};

export const CommonShapes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Common Skeleton Shapes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-md font-medium">Text Elements</h4>
              <div className="space-y-2">
                <SkeletonShad className="h-6 w-32" />
                <SkeletonShad className="h-4 w-48" />
                <SkeletonShad className="h-4 w-36" />
                <SkeletonShad className="h-3 w-24" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-md font-medium">Buttons & Controls</h4>
              <div className="space-y-2">
                <SkeletonShad className="h-10 w-24" />
                <SkeletonShad className="h-8 w-16" />
                <SkeletonShad className="h-6 w-20" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-md font-medium">Cards & Containers</h4>
              <div className="space-y-2">
                <SkeletonShad className="h-32 w-full" />
                <SkeletonShad className="h-24 w-48" />
                <SkeletonShad className="h-16 w-32" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-md font-medium">Avatars & Images</h4>
              <div className="space-y-2">
                <SkeletonShad className="h-12 w-12 rounded-full" />
                <SkeletonShad className="h-8 w-8 rounded-full" />
                <SkeletonShad className="h-20 w-20 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const LoadingCards: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Loading Card Examples</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <SkeletonShad className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <SkeletonShad className="h-4 w-24" />
                  <SkeletonShad className="h-3 w-16" />
                </div>
              </div>
              <SkeletonShad className="h-32 w-full" />
              <div className="space-y-2">
                <SkeletonShad className="h-4 w-full" />
                <SkeletonShad className="h-4 w-3/4" />
              </div>
            </div>

            <div className="p-4 border rounded-lg space-y-3">
              <SkeletonShad className="h-40 w-full" />
              <div className="space-y-2">
                <SkeletonShad className="h-5 w-full" />
                <SkeletonShad className="h-4 w-2/3" />
                <SkeletonShad className="h-4 w-1/2" />
              </div>
              <div className="flex justify-between">
                <SkeletonShad className="h-8 w-16" />
                <SkeletonShad className="h-8 w-20" />
              </div>
            </div>

            <div className="p-4 border rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <SkeletonShad className="h-6 w-32" />
                <SkeletonShad className="h-4 w-4 rounded" />
              </div>
              <div className="space-y-2">
                <SkeletonShad className="h-4 w-full" />
                <SkeletonShad className="h-4 w-5/6" />
                <SkeletonShad className="h-4 w-4/6" />
              </div>
              <div className="flex space-x-2">
                <SkeletonShad className="h-6 w-12" />
                <SkeletonShad className="h-6 w-16" />
                <SkeletonShad className="h-6 w-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Table Loading State</h3>

          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <SkeletonShad className="h-6 w-32" />
                <SkeletonShad className="h-8 w-24" />
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                {/* Header row */}
                <div className="grid grid-cols-4 gap-4">
                  <SkeletonShad className="h-4 w-20" />
                  <SkeletonShad className="h-4 w-16" />
                  <SkeletonShad className="h-4 w-24" />
                  <SkeletonShad className="h-4 w-18" />
                </div>

                {/* Data rows */}
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4">
                    <SkeletonShad className="h-4 w-full" />
                    <SkeletonShad className="h-4 w-3/4" />
                    <SkeletonShad className="h-4 w-5/6" />
                    <SkeletonShad className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const FormSkeleton: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Form Loading State</h3>

          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <SkeletonShad className="h-4 w-20" />
              <SkeletonShad className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <SkeletonShad className="h-4 w-16" />
              <SkeletonShad className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <SkeletonShad className="h-4 w-24" />
              <SkeletonShad className="h-20 w-full" />
            </div>

            <div className="flex space-x-2">
              <SkeletonShad className="h-10 w-20" />
              <SkeletonShad className="h-10 w-24" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};