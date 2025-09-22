import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Modal> = {
  title: "Common/Modal",
  component: Modal,
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
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <Modal {...args}>
          {args.children}
        </Modal>
      </div>
    </ThemeProvider>
  ),
  args: {
    header: "Modal Header",
    show: true,
    size: "medium",
    children: "This is the modal content.",
  },
};

export const AllSizes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Modal Sizes</h3>
          <Modal header="Small Modal" show={true} size="small">
            This is a small modal.
          </Modal>
          <Modal header="Medium Modal" show={true} size="medium">
            This is a medium modal.
          </Modal>
          <Modal header="Medium2 Modal" show={true} size="medium2">
            This is a medium2 modal, slightly larger than medium.
          </Modal>
          <Modal header="Large Modal" show={true} size="large">
            This is a large modal that takes up 75% of the screen width.
          </Modal>
          <Modal header="Extra Large Modal" show={true} size="xlarge">
            This is an extra large modal that takes up most of the screen.
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 w-fit"
          >
            Open Modal
          </button>
          <Modal header="Interactive Modal" show={open} size="medium">
            <div className="space-y-4">
              <p>This is the modal content.</p>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90"
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </ThemeProvider>
    );
  },
};