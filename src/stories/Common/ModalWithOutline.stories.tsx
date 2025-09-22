import React, { useState } from "react";
import ModalWithOutline from "../../components/common/ModalWithOutline";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof ModalWithOutline> = {
  title: "Common/ModalWithOutline",
  component: ModalWithOutline,
  tags: ["autodocs"],
  argTypes: {
    header: { control: "text" },
    show: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "medium2", "large", "xlarge"],
    },
    children: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A full-featured modal dialog with outlined styling, backdrop, fade-in animation, and multiple size options.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalWithOutline>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <ModalWithOutline {...args}>
          {args.children}
        </ModalWithOutline>
      </div>
    </ThemeProvider>
  ),
  args: {
    header: "Modal with Outline",
    show: true,
    size: "medium",
    children: "This is a modal with outline styling and backdrop.",
  },
};

export const AllSizes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Modal with Outline - All Sizes</h3>
          <div className="grid gap-4">
            <ModalWithOutline header="Small Outlined Modal" show={true} size="small">
              <p>Small modal with outline styling. Compact size for simple messages.</p>
            </ModalWithOutline>
            <ModalWithOutline header="Medium Outlined Modal" show={true} size="medium">
              <p>Medium-sized modal with outline styling. Good for forms and moderate content.</p>
            </ModalWithOutline>
            <ModalWithOutline header="Medium2 Outlined Modal" show={true} size="medium2">
              <p>Medium2 modal with outline styling. Slightly larger than medium for additional content.</p>
            </ModalWithOutline>
            <ModalWithOutline header="Large Outlined Modal" show={true} size="large">
              <p>Large modal with outline styling. Takes up 75% of screen width for extensive content.</p>
            </ModalWithOutline>
            <ModalWithOutline header="Extra Large Outlined Modal" show={true} size="xlarge">
              <p>Extra large modal with outline styling. Maximum size for complex layouts and detailed content.</p>
            </ModalWithOutline>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpenModal = (modalType: string) => {
      setOpenModal(modalType);
    };

    const handleCloseModal = () => {
      setOpenModal(null);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Interactive Modal with Outline</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleOpenModal("small")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Open Small
              </button>
              <button
                onClick={() => handleOpenModal("medium")}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Open Medium
              </button>
              <button
                onClick={() => handleOpenModal("large")}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                Open Large
              </button>
            </div>
          </div>

          <ModalWithOutline
            header="Small Interactive Modal"
            show={openModal === "small"}
            size="small"
          >
            <div className="space-y-4">
              <p>This is a small interactive modal with outline styling.</p>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90"
              >
                Close
              </button>
            </div>
          </ModalWithOutline>

          <ModalWithOutline
            header="Medium Interactive Modal"
            show={openModal === "medium"}
            size="medium"
          >
            <div className="space-y-4">
              <p>This is a medium interactive modal with outline styling and fade-in animation.</p>
              <div className="p-4 bg-muted rounded">
                <h4 className="font-medium mb-2">Features:</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Backdrop overlay</li>
                  <li>Smooth fade-in animation</li>
                  <li>Responsive sizing</li>
                  <li>Accessible modal role</li>
                </ul>
              </div>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90"
              >
                Close
              </button>
            </div>
          </ModalWithOutline>

          <ModalWithOutline
            header="Large Interactive Modal"
            show={openModal === "large"}
            size="large"
          >
            <div className="space-y-4">
              <p>This is a large interactive modal perfect for complex forms and detailed content.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <h4 className="font-medium mb-2">Left Column</h4>
                  <p>Content can be organized in multiple columns.</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded">
                  <h4 className="font-medium mb-2">Right Column</h4>
                  <p>Large modals provide ample space for layouts.</p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90"
              >
                Close
              </button>
            </div>
          </ModalWithOutline>
        </div>
      </ThemeProvider>
    );
  },
};

export const WithComplexContent: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <ModalWithOutline header="Complex Content Modal" show={true} size="large">
          <div className="space-y-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter email address" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea className="w-full p-2 border rounded h-24" placeholder="Enter description"></textarea>
              </div>
            </form>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Additional Information</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-muted rounded">
                  <div className="font-medium">Created</div>
                  <div className="text-muted-foreground">2 hours ago</div>
                </div>
                <div className="p-3 bg-muted rounded">
                  <div className="font-medium">Status</div>
                  <div className="text-green-600">Active</div>
                </div>
                <div className="p-3 bg-muted rounded">
                  <div className="font-medium">Priority</div>
                  <div className="text-orange-600">Medium</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 border rounded hover:bg-muted">
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
                Save Changes
              </button>
            </div>
          </div>
        </ModalWithOutline>
      </div>
    </ThemeProvider>
  ),
};