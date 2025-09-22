import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const meta: Meta<typeof ThemeProvider> = {
  title: "Theme/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    attribute: {
      control: { type: "select" },
      options: ["class", "data-theme"],
      description: "HTML attribute to use for storing theme",
    },
    defaultTheme: {
      control: { type: "select" },
      options: ["light", "dark", "system"],
      description: "Default theme to use",
    },
    enableSystem: {
      control: "boolean",
      description: "Enable system theme detection",
    },
    disableTransitionOnChange: {
      control: "boolean",
      description: "Disable CSS transitions when theme changes",
    },
    storageKey: {
      control: "text",
      description: "Key to persist theme preference in localStorage",
    },
    themes: {
      control: "object",
      description: "Array of theme names",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ThemeDemo = () => (
  <div className="bg-background text-foreground min-h-screen p-8">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Theme Provider Demo</h1>
        <ModeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg bg-card">
          <div className="space-y-2 mb-4">
            <h3 className="text-lg font-semibold">Light/Dark Theme Support</h3>
            <p className="text-sm text-muted-foreground">
              This panel automatically adapts to the current theme
            </p>
          </div>
          <div className="space-y-4">
            <Input placeholder="Type something here..." />
            <div className="flex space-x-2">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>
        </div>

        <div className="p-6 border border-primary rounded-lg bg-card">
          <div className="space-y-2 mb-4">
            <h3 className="text-lg font-semibold text-primary">Themed Components</h3>
            <p className="text-sm text-muted-foreground">
              Components that respond to theme changes
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground">
                This background uses theme-aware colors
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 border rounded-lg bg-card">
        <h3 className="text-lg font-semibold mb-4">Theme Variables in Action</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="p-3 bg-background border rounded">
            <div className="font-medium">Background</div>
            <div className="text-muted-foreground">bg-background</div>
          </div>
          <div className="p-3 bg-foreground text-background rounded">
            <div className="font-medium">Foreground</div>
            <div className="opacity-70">bg-foreground</div>
          </div>
          <div className="p-3 bg-primary text-primary-foreground rounded">
            <div className="font-medium">Primary</div>
            <div className="opacity-70">bg-primary</div>
          </div>
          <div className="p-3 bg-secondary text-secondary-foreground rounded">
            <div className="font-medium">Secondary</div>
            <div className="opacity-70">bg-secondary</div>
          </div>
          <div className="p-3 bg-muted text-muted-foreground rounded">
            <div className="font-medium">Muted</div>
            <div className="opacity-70">bg-muted</div>
          </div>
          <div className="p-3 bg-accent text-accent-foreground rounded">
            <div className="font-medium">Accent</div>
            <div className="opacity-70">bg-accent</div>
          </div>
          <div className="p-3 bg-destructive text-destructive-foreground rounded">
            <div className="font-medium">Destructive</div>
            <div className="opacity-70">bg-destructive</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium">Border</div>
            <div className="text-muted-foreground">border</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const LightThemeDefault: Story = {
  args: {
    attribute: "class",
    defaultTheme: "light",
    enableSystem: false,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const DarkThemeDefault: Story = {
  args: {
    attribute: "class",
    defaultTheme: "dark",
    enableSystem: false,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const WithCustomStorageKey: Story = {
  args: {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    storageKey: "my-app-theme",
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const WithoutTransitions: Story = {
  args: {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: true,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};