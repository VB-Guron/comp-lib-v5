import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";
import { Button } from "../components/ui/button";

const meta: Meta = {
  title: "Theme/ThemeProvider",
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj;

export const ThemeProviderDemo: Story = {
  render: () => (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-background text-foreground flex flex-col items-center gap-6 rounded-xl p-8 shadow-lg">
        <h2 className="text-xl font-bold">ThemeProvider Demo</h2>
        <ModeToggle />
        <Button>Test Button</Button>
        <p>
          Toggle the theme using the button above. The background and text
          should update.
        </p>
      </div>
    </ThemeProvider>
  ),
};
