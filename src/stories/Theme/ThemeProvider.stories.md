import React, { useState } from "react";
import { ThemeProvider, useTheme } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Toggle } from "../../components/ui/toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof ThemeProvider> = {
  title: "Theme/ThemeProvider",
  component: ThemeProvider,
  tags: ["autodocs"],
  argTypes: {
    defaultTheme: {
      control: { type: "select" },
      options: ["light", "dark", "system"],
    },
    storageKey: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A theme provider component that manages light/dark mode theming across the application with system preference detection and local storage persistence.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

// Component to demonstrate theme usage
const ThemeDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Theme System Demo</h3>
        <ModeToggle />
      </div>

      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Current Theme Information</h4>
        <div className="text-sm space-y-1">
          <p><strong>Active Theme:</strong> {theme}</p>
          <p><strong>System Preference:</strong> {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Theme Controls</h4>
        <div className="flex gap-2">
          <Button
            onClick={() => setTheme("light")}
            variant={theme === "light" ? "default" : "outline"}
            size="sm"
          >
            Light
          </Button>
          <Button
            onClick={() => setTheme("dark")}
            variant={theme === "dark" ? "default" : "outline"}
            size="sm"
          >
            Dark
          </Button>
          <Button
            onClick={() => setTheme("system")}
            variant={theme === "system" ? "default" : "outline"}
            size="sm"
          >
            System
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ThemeDemo />
      </div>
    </ThemeProvider>
  ),
  args: {
    defaultTheme: "system",
    storageKey: "vite-ui-theme",
  },
};

export const LightTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Light Theme</h3>
            <ModeToggle />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">UI Components</h4>
              <div className="space-y-2">
                <Button>Primary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Form Elements</h4>
              <div className="space-y-2">
                <Input placeholder="Text input" />
                <Input variant="filled" placeholder="Filled input" />
                <select className="w-full p-2 border rounded">
                  <option>Select option</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Theme Colors</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="p-2 bg-background border rounded">background</div>
              <div className="p-2 bg-foreground text-background rounded">foreground</div>
              <div className="p-2 bg-muted rounded">muted</div>
              <div className="p-2 bg-primary text-primary-foreground rounded">primary</div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Dark Theme</h3>
            <ModeToggle />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">UI Components</h4>
              <div className="space-y-2">
                <Button>Primary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Form Elements</h4>
              <div className="space-y-2">
                <Input placeholder="Text input" />
                <Input variant="filled" placeholder="Filled input" />
                <select className="w-full p-2 border rounded bg-background">
                  <option>Select option</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Dark Theme Colors</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="p-2 bg-background border rounded">background</div>
              <div className="p-2 bg-foreground text-background rounded">foreground</div>
              <div className="p-2 bg-muted rounded">muted</div>
              <div className="p-2 bg-primary text-primary-foreground rounded">primary</div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const SystemTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">System Theme</h3>
            <ModeToggle />
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">System Theme Detection</h4>
            <p className="text-sm text-muted-foreground">
              The system theme automatically detects your OS preference and updates accordingly.
              Change your system theme settings to see it in action.
            </p>
            <div className="mt-2 text-xs">
              <p><strong>System preference:</strong> {typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Adaptive Components</h4>
              <div className="space-y-2">
                <Button>Adaptive Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Input placeholder="Adaptive input" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Theme Features</h4>
              <ul className="text-sm space-y-1">
                <li>• Automatic OS detection</li>
                <li>• Real-time preference updates</li>
                <li>• Persistent storage</li>
                <li>• CSS custom properties</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="w-screen h-screen bg-gray-100 p-6 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-900">Theme Comparison</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ThemeProvider defaultTheme="light">
          <div className="bg-background border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Light Theme</h3>
              <ModeToggle />
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <Button size="sm">Primary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </div>

              <Input placeholder="Light theme input" />

              <div className="p-3 bg-muted rounded">
                <p className="text-sm">Muted background content</p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2 bg-primary text-primary-foreground rounded text-center">Primary</div>
                <div className="p-2 bg-secondary text-secondary-foreground rounded text-center">Secondary</div>
                <div className="p-2 bg-destructive text-destructive-foreground rounded text-center">Destructive</div>
              </div>
            </div>
          </div>
        </ThemeProvider>

        <ThemeProvider defaultTheme="dark">
          <div className="bg-background border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Dark Theme</h3>
              <ModeToggle />
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <Button size="sm">Primary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </div>

              <Input placeholder="Dark theme input" />

              <div className="p-3 bg-muted rounded">
                <p className="text-sm">Muted background content</p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2 bg-primary text-primary-foreground rounded text-center">Primary</div>
                <div className="p-2 bg-secondary text-secondary-foreground rounded text-center">Secondary</div>
                <div className="p-2 bg-destructive text-destructive-foreground rounded text-center">Destructive</div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  ),
};

export const PersistentStorage: Story = {
  render: () => {
    const StorageDemo = () => {
      const { theme, setTheme } = useTheme();
      const [storageValue, setStorageValue] = useState("");

      React.useEffect(() => {
        const stored = localStorage.getItem("vite-ui-theme");
        setStorageValue(stored || "none");
      }, [theme]);

      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Persistent Storage Demo</h3>
            <ModeToggle />
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Storage Information</h4>
            <div className="text-sm space-y-1">
              <p><strong>Current Theme:</strong> {theme}</p>
              <p><strong>Storage Key:</strong> vite-ui-theme</p>
              <p><strong>Stored Value:</strong> {storageValue}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Test Theme Persistence</h4>
            <p className="text-sm text-muted-foreground">
              Change the theme and refresh the page to see the persistence in action.
            </p>
            <div className="flex gap-2">
              <Button
                onClick={() => setTheme("light")}
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
              >
                Light
              </Button>
              <Button
                onClick={() => setTheme("dark")}
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
              >
                Dark
              </Button>
              <Button
                onClick={() => setTheme("system")}
                variant={theme === "system" ? "default" : "outline"}
                size="sm"
              >
                System
              </Button>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">How It Works</h4>
            <ul className="text-sm space-y-1">
              <li>• Theme preference is stored in localStorage</li>
              <li>• Automatically restored on page load</li>
              <li>• System theme watches for OS changes</li>
              <li>• CSS custom properties update dynamically</li>
            </ul>
          </div>
        </div>
      );
    };

    return (
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <StorageDemo />
        </div>
      </ThemeProvider>
    );
  },
};