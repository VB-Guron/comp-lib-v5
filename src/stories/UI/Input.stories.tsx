import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "underline", "ghost", "fieldset", "password"]
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"]
    },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"]
    },
    disabled: { control: "boolean" },
    formatNumber: { control: "boolean" },
    legend: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input Default</h3>
          <Input {...args} />
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    placeholder: "Enter text...",
    variant: "default",
  },
};

export const AllVariants: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Input Variants</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Default</h4>
                <Input variant="default" placeholder="Default input" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Filled</h4>
                <Input variant="filled" placeholder="Filled input" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Underline</h4>
                <Input variant="underline" placeholder="Underline input" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Ghost</h4>
                <Input variant="ghost" placeholder="Ghost input" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Password</h4>
                <Input variant="password" placeholder="Password input" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Fieldset</h4>
                <Input variant="fieldset" legend="Field Label" placeholder="Fieldset input" />
              </div>
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
          <h3 className="text-lg font-semibold">Input Sizes</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">Small</h4>
              <Input size="sm" placeholder="Small input" />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Default</h4>
              <Input size="default" placeholder="Default input" />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Large</h4>
              <Input size="lg" placeholder="Large input" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const FieldsetVariants: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Fieldset Color Variants</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                variant="fieldset"
                fieldsetColorVariant="default"
                legend="Default Color"
                placeholder="Default fieldset"
              />
              <Input
                variant="fieldset"
                fieldsetColorVariant="primary"
                legend="Primary Color"
                placeholder="Primary fieldset"
              />
              <Input
                variant="fieldset"
                fieldsetColorVariant="secondary"
                legend="Secondary Color"
                placeholder="Secondary fieldset"
              />
            </div>

            <div className="space-y-4">
              <Input
                variant="fieldset"
                fieldsetColorVariant="success"
                legend="Success Color"
                placeholder="Success fieldset"
              />
              <Input
                variant="fieldset"
                fieldsetColorVariant="danger"
                legend="Danger Color"
                placeholder="Danger fieldset"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Input Types</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Text</h4>
                <Input type="text" placeholder="Text input" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Email</h4>
                <Input type="email" placeholder="email@example.com" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Password</h4>
                <Input variant="password" placeholder="Password" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Number</h4>
                <Input type="number" placeholder="123" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Date</h4>
                <Input type="date" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Month</h4>
                <Input type="month" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">URL</h4>
                <Input type="url" placeholder="https://example.com" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Search</h4>
                <Input type="search" placeholder="Search..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const NumberFormatting: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Number Formatting</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">Regular Number Input</h4>
              <Input type="number" placeholder="123.45" />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Formatted Number (Fieldset)</h4>
              <Input
                variant="fieldset"
                legend="Amount"
                formatNumber={true}
                placeholder="Auto-formats to 2 decimals"
                defaultValue="1234.5"
              />
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
          <h3 className="text-lg font-semibold">Disabled Input States</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input variant="default" disabled placeholder="Disabled default" />
              <Input variant="filled" disabled placeholder="Disabled filled" />
              <Input variant="underline" disabled placeholder="Disabled underline" />
            </div>

            <div className="space-y-4">
              <Input variant="ghost" disabled placeholder="Disabled ghost" />
              <Input variant="password" disabled placeholder="Disabled password" />
              <Input variant="fieldset" legend="Disabled Field" disabled placeholder="Disabled fieldset" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [values, setValues] = useState({
      text: "",
      email: "",
      password: "",
      number: "",
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Interactive Input Demo</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    value={values.text}
                    onChange={handleChange('text')}
                    placeholder="Enter your name"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Value: {values.text || '(empty)'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    placeholder="Enter your email"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Value: {values.email || '(empty)'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Input
                    variant="fieldset"
                    legend="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    placeholder="Enter password"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Length: {values.password.length} characters
                  </p>
                </div>

                <div>
                  <Input
                    variant="fieldset"
                    legend="Amount"
                    type="number"
                    formatNumber={true}
                    value={values.number}
                    onChange={handleChange('number')}
                    placeholder="Enter amount"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Value: {values.number || '(empty)'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};