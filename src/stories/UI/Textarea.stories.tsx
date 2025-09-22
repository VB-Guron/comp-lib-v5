import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../../components/ui/textarea";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "underline", "ghost", "fieldset"],
      description: "The visual variant of the textarea",
    },
    textareaSize: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      description: "The size of the textarea",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    legend: {
      control: "text",
      description: "Legend text for fieldset variant",
    },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"],
      description: "Color variant for fieldset style",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="bg-background w-screen h-screen p-8">
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>
          <div className="flex items-center justify-center h-full">
            <Story />
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled textarea variant",
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    placeholder: "Underline textarea variant",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    placeholder: "Ghost textarea variant",
  },
};

export const Fieldset: Story = {
  args: {
    variant: "fieldset",
    legend: "Message",
    placeholder: "Enter your message",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <label className="text-sm font-medium mb-2 block">Small</label>
        <Textarea textareaSize="sm" placeholder="Small textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Default</label>
        <Textarea placeholder="Default textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Large</label>
        <Textarea textareaSize="lg" placeholder="Large textarea" />
      </div>
    </div>
  ),
};

export const FieldsetColorVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <Textarea
        variant="fieldset"
        legend="Default"
        fieldsetColorVariant="default"
        placeholder="Default color"
      />
      <Textarea
        variant="fieldset"
        legend="Primary"
        fieldsetColorVariant="primary"
        placeholder="Primary color"
      />
      <Textarea
        variant="fieldset"
        legend="Secondary"
        fieldsetColorVariant="secondary"
        placeholder="Secondary color"
      />
      <Textarea
        variant="fieldset"
        legend="Success"
        fieldsetColorVariant="success"
        placeholder="Success color"
      />
      <Textarea
        variant="fieldset"
        legend="Danger"
        fieldsetColorVariant="danger"
        placeholder="Danger color"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "This textarea is disabled",
    value: "You cannot edit this text",
  },
};

export const WithValue: Story = {
  args: {
    value: "This textarea has a pre-filled value that you can edit.",
    placeholder: "This won't show because there's a value",
  },
};