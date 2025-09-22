import React from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    htmlFor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Label Default</h3>
          <Label {...args}>{args.children}</Label>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    children: "Label text",
  },
};

export const WithFormControls: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Labels with Form Controls</h3>

          <div className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" variant="password" placeholder="Enter password" />
            </div>

            <div>
              <Label htmlFor="bio">Biography</Label>
              <textarea
                id="bio"
                className="w-full p-2 border rounded min-h-[80px] resize-none"
                placeholder="Tell us about yourself..."
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
          <h3 className="text-lg font-semibold">Labels with Disabled Controls</h3>

          <div className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="disabled-input">Disabled Input</Label>
              <Input id="disabled-input" disabled placeholder="This input is disabled" />
            </div>

            <div>
              <Label htmlFor="readonly-input">Read-only Input</Label>
              <Input id="readonly-input" readOnly value="This value cannot be changed" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const RequiredFields: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Required Field Labels</h3>

          <div className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="required-name">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input id="required-name" required placeholder="Enter your full name" />
            </div>

            <div>
              <Label htmlFor="required-email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input id="required-email" type="email" required placeholder="Enter your email" />
            </div>

            <div>
              <Label htmlFor="optional-phone">
                Phone Number <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input id="optional-phone" type="tel" placeholder="Enter your phone number" />
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
          <h3 className="text-lg font-semibold">Labels with Icons</h3>

          <div className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="user-input" className="flex items-center gap-2">
                <span>👤</span>
                <span>Username</span>
              </Label>
              <Input id="user-input" placeholder="Enter username" />
            </div>

            <div>
              <Label htmlFor="lock-input" className="flex items-center gap-2">
                <span>🔒</span>
                <span>Security Code</span>
              </Label>
              <Input id="lock-input" type="password" placeholder="Enter security code" />
            </div>

            <div>
              <Label htmlFor="location-input" className="flex items-center gap-2">
                <span>📍</span>
                <span>Location</span>
              </Label>
              <Input id="location-input" placeholder="Enter your location" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const FormLayouts: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Different Form Layouts</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">Vertical Layout</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="v-first">First Name</Label>
                  <Input id="v-first" placeholder="First name" />
                </div>
                <div>
                  <Label htmlFor="v-last">Last Name</Label>
                  <Input id="v-last" placeholder="Last name" />
                </div>
                <div>
                  <Label htmlFor="v-email">Email</Label>
                  <Input id="v-email" type="email" placeholder="Email address" />
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">Horizontal Layout</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <Label htmlFor="h-first">First Name</Label>
                  <Input id="h-first" placeholder="First name" className="col-span-2" />
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <Label htmlFor="h-last">Last Name</Label>
                  <Input id="h-last" placeholder="Last name" className="col-span-2" />
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <Label htmlFor="h-email">Email</Label>
                  <Input id="h-email" type="email" placeholder="Email address" className="col-span-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg max-w-2xl">
            <h4 className="font-medium mb-4">Inline Layout</h4>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[120px]">
                <Label htmlFor="inline-search">Search</Label>
                <Input id="inline-search" placeholder="Search..." />
              </div>
              <div className="flex-1 min-w-[120px]">
                <Label htmlFor="inline-filter">Filter</Label>
                <select id="inline-filter" className="w-full p-2 border rounded">
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};