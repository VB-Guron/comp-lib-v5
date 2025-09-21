import React, { useState } from "react";
import Modal from "../components/common/Modal/modal";
import type { Meta, StoryObj } from "@storybook/react";

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
  args: {
    header: "Modal Header",
    show: true,
    size: "medium",
    children: "This is the modal content.",
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} show={open}>
          {args.children}
          <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
      </>
    );
  },
  args: {
    header: "Interactive Modal",
    size: "medium",
    children: "This is the modal content.",
  },
};
