import React from "react";
import { BgDemo } from "../../components/ui/bg-demo";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof BgDemo> = {
  title: "Theme/BackgroundDemo",
  component: BgDemo,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    children: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A background demo component that provides theme-aware background styling for showcasing components in different theme contexts.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BgDemo>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">BackgroundDemo Default</h3>
          <BgDemo {...args}>
            <div className="p-4">
              <p>Content within BgDemo component</p>
            </div>
          </BgDemo>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    theme: "light",
  },
};

export const LightBackground: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Light Background Demo</h3>

          <BgDemo theme="light">
            <div className="p-6 space-y-4">
              <h4 className="text-xl font-semibold">Light Theme Showcase</h4>
              <p className="text-muted-foreground">
                Components displayed on a light background for optimal contrast and readability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-medium">Buttons</h5>
                  <div className="space-y-2">
                    <Button>Primary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="destructive">Destructive Button</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-medium">Form Elements</h5>
                  <div className="space-y-2">
                    <Input placeholder="Light theme input" />
                    <Input variant="filled" placeholder="Filled input" />
                    <select className="w-full p-2 border rounded">
                      <option>Select option</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2">Color Palette</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="p-3 bg-primary text-primary-foreground rounded text-center text-sm">Primary</div>
                  <div className="p-3 bg-secondary text-secondary-foreground rounded text-center text-sm">Secondary</div>
                  <div className="p-3 bg-accent text-accent-foreground rounded text-center text-sm">Accent</div>
                  <div className="p-3 bg-muted text-muted-foreground rounded text-center text-sm">Muted</div>
                </div>
              </div>
            </div>
          </BgDemo>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const DarkBackground: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Dark Background Demo</h3>

          <BgDemo theme="dark">
            <div className="p-6 space-y-4">
              <h4 className="text-xl font-semibold">Dark Theme Showcase</h4>
              <p className="text-muted-foreground">
                Components displayed on a dark background to demonstrate dark mode styling.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-medium">Buttons</h5>
                  <div className="space-y-2">
                    <Button>Primary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="destructive">Destructive Button</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-medium">Form Elements</h5>
                  <div className="space-y-2">
                    <Input placeholder="Dark theme input" />
                    <Input variant="filled" placeholder="Filled input" />
                    <select className="w-full p-2 border rounded bg-background">
                      <option>Select option</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2">Dark Color Palette</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="p-3 bg-primary text-primary-foreground rounded text-center text-sm">Primary</div>
                  <div className="p-3 bg-secondary text-secondary-foreground rounded text-center text-sm">Secondary</div>
                  <div className="p-3 bg-accent text-accent-foreground rounded text-center text-sm">Accent</div>
                  <div className="p-3 bg-muted text-muted-foreground rounded text-center text-sm">Muted</div>
                </div>
              </div>
            </div>
          </BgDemo>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Theme Comparison</h3>
          <p className="text-muted-foreground">
            Side-by-side comparison of components in light and dark backgrounds.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-4">Light Background</h4>
              <BgDemo theme="light">
                <div className="p-4 space-y-4">
                  <div className="flex gap-2">
                    <Button size="sm">Primary</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                    <Button variant="ghost" size="sm">Ghost</Button>
                  </div>

                  <Input placeholder="Light input example" />

                  <div className="p-3 bg-muted rounded">
                    <p className="text-sm">Light muted background</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-primary text-primary-foreground rounded text-center">Primary</div>
                    <div className="p-2 bg-secondary text-secondary-foreground rounded text-center">Secondary</div>
                  </div>
                </div>
              </BgDemo>
            </div>

            <div>
              <h4 className="font-medium mb-4">Dark Background</h4>
              <BgDemo theme="dark">
                <div className="p-4 space-y-4">
                  <div className="flex gap-2">
                    <Button size="sm">Primary</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                    <Button variant="ghost" size="sm">Ghost</Button>
                  </div>

                  <Input placeholder="Dark input example" />

                  <div className="p-3 bg-muted rounded">
                    <p className="text-sm">Dark muted background</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-primary text-primary-foreground rounded text-center">Primary</div>
                    <div className="p-2 bg-secondary text-secondary-foreground rounded text-center">Secondary</div>
                  </div>
                </div>
              </BgDemo>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ComponentShowcase: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Component Showcase</h3>

          <BgDemo theme="light">
            <div className="p-6 space-y-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Design System Showcase</h4>
                <p className="text-muted-foreground">
                  Comprehensive display of components in themed backgrounds
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold">Actions</h5>
                  <div className="space-y-2">
                    <Button className="w-full">Primary Action</Button>
                    <Button variant="outline" className="w-full">Secondary Action</Button>
                    <Button variant="ghost" className="w-full">Tertiary Action</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold">Inputs</h5>
                  <div className="space-y-2">
                    <Input placeholder="Email address" />
                    <Input type="password" placeholder="Password" />
                    <Input variant="filled" placeholder="Filled input" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold">Status</h5>
                  <div className="space-y-2">
                    <div className="p-2 bg-green-100 text-green-800 rounded text-sm text-center">Success</div>
                    <div className="p-2 bg-yellow-100 text-yellow-800 rounded text-sm text-center">Warning</div>
                    <div className="p-2 bg-red-100 text-red-800 rounded text-sm text-center">Error</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h6 className="font-medium mb-2">Card Example</h6>
                    <p className="text-sm text-muted-foreground mb-3">
                      This is an example card component with consistent theming.
                    </p>
                    <Button size="sm">Learn More</Button>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h6 className="font-medium mb-2">Highlighted Content</h6>
                    <p className="text-sm text-muted-foreground">
                      Muted background for less prominent information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BgDemo>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Responsive Background Demo</h3>
          <p className="text-muted-foreground">
            The BgDemo component adapts to different screen sizes while maintaining theme consistency.
          </p>

          <BgDemo theme="light">
            <div className="p-4 space-y-4">
              <h4 className="text-lg font-semibold">Responsive Layout</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-3 bg-primary text-primary-foreground rounded text-center">
                  <div className="text-sm font-medium">Mobile</div>
                  <div className="text-xs">1 col</div>
                </div>
                <div className="p-3 bg-secondary text-secondary-foreground rounded text-center">
                  <div className="text-sm font-medium">Tablet</div>
                  <div className="text-xs">2 cols</div>
                </div>
                <div className="p-3 bg-accent text-accent-foreground rounded text-center lg:block hidden">
                  <div className="text-sm font-medium">Desktop</div>
                  <div className="text-xs">4 cols</div>
                </div>
                <div className="p-3 bg-muted text-muted-foreground rounded text-center lg:block hidden">
                  <div className="text-sm font-medium">Large</div>
                  <div className="text-xs">4 cols</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="flex-1">Responsive Button 1</Button>
                <Button variant="outline" className="flex-1">Responsive Button 2</Button>
              </div>

              <div className="p-3 bg-muted rounded">
                <p className="text-sm">
                  Resize your browser window to see the responsive behavior in action.
                </p>
              </div>
            </div>
          </BgDemo>
        </div>
      </div>
    </ThemeProvider>
  ),
};