import type { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { ThemeProvider } from "../../components/theme-provider";

const meta: Meta<typeof ModeToggle> = {
  title: "Theme/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ModeToggle />,
};

export const InNavigation: Story = {
  render: () => (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <h3 className="font-semibold">Settings</h3>
      <ModeToggle />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium">Theme:</span>
      <ModeToggle />
      <ModeToggle />
      <ModeToggle />
    </div>
  ),
};

export const InHeader: Story = {
  render: () => (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">My App</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-sm hover:underline">Home</a>
          <a href="#" className="text-sm hover:underline">About</a>
          <a href="#" className="text-sm hover:underline">Contact</a>
        </nav>
      </div>
      <ModeToggle />
    </header>
  ),
};