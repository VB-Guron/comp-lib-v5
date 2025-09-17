import React from "react";
import { Navbar, NavbarAvatar } from "../components/common/navbar";
import "../components/common/navbar.scss";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  title: "Common/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    brand: { control: "object" },
    links: { control: "object" },
    transparent: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: { name: "Lucid", href: "/", logo: undefined },
    links: [
      { href: "/home", label: "Home", active: true },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    actions: <NavbarAvatar fallback="U" />,
    transparent: false,
  },
};

export const Transparent: Story = {
  args: {
    ...Default.args,
    transparent: true,
  },
};
