import React from "react";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link", "yellow"]
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"]
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Button Default</h3>
          <Button {...args}>{args.children}</Button>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    variant: "default",
    children: "Button",
    disabled: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Button Variants</h3>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="yellow">
                <span>💰</span>
                <span>Yellow</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Button Sizes</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔍</Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Disabled Button States</h3>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default" disabled>Default Disabled</Button>
              <Button variant="destructive" disabled>Destructive Disabled</Button>
              <Button variant="outline" disabled>Outline Disabled</Button>
              <Button variant="secondary" disabled>Secondary Disabled</Button>
              <Button variant="ghost" disabled>Ghost Disabled</Button>
              <Button variant="link" disabled>Link Disabled</Button>
              <Button variant="yellow" disabled>
                <span>💰</span>
                <span>Yellow Disabled</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Buttons with Icons</h3>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">
                <span>📁</span>
                <span>Open</span>
              </Button>
              <Button variant="destructive">
                <span>🗑️</span>
                <span>Delete</span>
              </Button>
              <Button variant="outline">
                <span>📝</span>
                <span>Edit</span>
              </Button>
              <Button variant="secondary">
                <span>⚙️</span>
                <span>Settings</span>
              </Button>
              <Button size="icon" variant="ghost">
                🔍
              </Button>
              <Button size="icon" variant="outline">
                ❤️
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Loading Button States</h3>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button disabled>
                <span className="animate-spin">⏳</span>
                <span>Loading...</span>
              </Button>
              <Button variant="outline" disabled>
                <span className="animate-spin">🔄</span>
                <span>Processing</span>
              </Button>
              <Button variant="secondary" disabled>
                <span className="animate-pulse">💾</span>
                <span>Saving</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [clickCount, setClickCount] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = () => {
      setClickCount(prev => prev + 1);
    };

    const handleAsyncAction = async () => {
      setIsLoading(true);
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Interactive Button Demo</h3>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Click Counter</h4>
                <div className="flex items-center gap-4">
                  <Button onClick={handleClick}>
                    Click me ({clickCount})
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setClickCount(0)}
                    disabled={clickCount === 0}
                  >
                    Reset
                  </Button>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Async Action</h4>
                <Button
                  onClick={handleAsyncAction}
                  disabled={isLoading}
                  variant="secondary"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      <span>Loading...</span>
                    </>
                  ) : (
                    'Start Async Action'
                  )}
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Button Group Actions</h4>
                <div className="flex gap-2">
                  <Button variant="default" size="sm">Save</Button>
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const SpecialVariant: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Yellow Variant (Special)</h3>

          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-4">
                The yellow variant is a special button designed for payment actions and important CTAs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="yellow">
                  <span>💰</span>
                  <span>Pay Now</span>
                </Button>
                <Button variant="yellow" size="lg">
                  <span>💳</span>
                  <span>Complete Purchase</span>
                </Button>
                <Button variant="yellow" size="sm">
                  <span>💵</span>
                  <span>Quick Pay</span>
                </Button>
                <Button variant="yellow" disabled>
                  <span>💰</span>
                  <span>Payment Disabled</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};