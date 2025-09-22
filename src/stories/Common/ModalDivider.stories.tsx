import React from "react";
import ModalDivider, { LeftSideUpPart, RightSideDownPart, Divider } from "../../components/common/ModalDivider";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof ModalDivider> = {
  title: "Common/ModalDivider",
  component: ModalDivider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A layout utility component for creating divided modal content with responsive design. Switches from horizontal to vertical layout on mobile devices.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalDivider>;

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <ModalDivider>
          <LeftSideUpPart>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Left Side Content</h3>
              <p>This is the left side content area. It displays on the left on desktop and at the top on mobile.</p>
              <div className="mt-4 space-y-2">
                <p>Additional content goes here.</p>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                  Action Button
                </button>
              </div>
            </div>
          </LeftSideUpPart>
          <Divider />
          <RightSideDownPart label="Details Section">
            <div className="p-4">
              <h4 className="text-md font-medium mb-2">Right Side Content</h4>
              <p>This is the right side content area with a scrollable container.</p>
              <div className="mt-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </RightSideDownPart>
        </ModalDivider>
      </div>
    </ThemeProvider>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <ModalDivider>
          <LeftSideUpPart>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Form Section</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded" placeholder="Enter email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full p-2 border rounded h-20" placeholder="Enter message"></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">
                  Submit
                </button>
              </form>
            </div>
          </LeftSideUpPart>
          <Divider />
          <RightSideDownPart label="Preview & Information">
            <div className="p-4">
              <h4 className="text-md font-medium mb-2">Long Scrollable Content</h4>
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i} className="mb-2">
                  This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris.
                </p>
              ))}
            </div>
          </RightSideDownPart>
        </ModalDivider>
      </div>
    </ThemeProvider>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="mb-4 p-4 bg-muted rounded">
          <h3 className="font-semibold mb-2">Responsive Behavior</h3>
          <p>Resize your browser to see the layout change:</p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Desktop (≥1250px):</strong> Horizontal layout with vertical divider</li>
            <li><strong>Mobile (&lt;1250px):</strong> Vertical layout with horizontal divider</li>
          </ul>
        </div>
        <ModalDivider>
          <LeftSideUpPart>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20">
              <h3 className="text-lg font-semibold mb-2">Left/Top Section</h3>
              <p>This section appears on the left on desktop screens and at the top on mobile screens.</p>
              <div className="mt-2 text-sm text-muted-foreground">
                Width: 100% on mobile, flexible on desktop
              </div>
            </div>
          </LeftSideUpPart>
          <Divider />
          <RightSideDownPart label="Right/Bottom Section">
            <div className="p-4 bg-green-50 dark:bg-green-900/20">
              <h4 className="text-md font-medium mb-2">Right/Bottom Content</h4>
              <p>This section appears on the right on desktop and at the bottom on mobile.</p>
              <div className="mt-2 text-sm text-muted-foreground">
                Scrollable container with header label
              </div>
            </div>
          </RightSideDownPart>
        </ModalDivider>
      </div>
    </ThemeProvider>
  ),
};