import type { Meta, StoryObj } from "@storybook/react";
import { ToggleForm } from "../../components/upgraded/toggle-form";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { useForm } from "react-hook-form";

const meta: Meta<typeof ToggleForm> = {
  title: "Upgraded/ToggleForm",
  component: ToggleForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name of the form field",
    },
    legend: {
      control: "text",
      description: "Legend text for the fieldset",
    },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"],
      description: "Color variant for the fieldset",
    },
    colorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"],
      description: "Color variant for the toggle",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      description: "The size of the toggle",
    },
    checkedValue: {
      control: "text",
      description: "Value when toggle is checked (defaults to 'YES')",
    },
    notCheckedValue: {
      control: "text",
      description: "Value when toggle is not checked (defaults to 'NO')",
    },
    disabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
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

const FormWrapper = ({ children, onSubmit }: { children: React.ReactNode; onSubmit?: (data: any) => void }) => {
  const form = useForm({
    defaultValues: {
      notifications: false,
      emailUpdates: false,
      darkMode: true,
      autoSave: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit || (() => {}))} className="w-full max-w-md space-y-4">
        {children}
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
};

export const Default: Story = {
  render: () => (
    <FormWrapper>
      <ToggleForm
        name="notifications"
        legend="Enable Notifications"
      />
    </FormWrapper>
  ),
};

export const AllColorVariants: Story = {
  render: () => (
    <FormWrapper>
      <div className="space-y-4">
        <ToggleForm
          name="default"
          legend="Default"
          fieldsetColorVariant="default"
          colorVariant="default"
        />
        <ToggleForm
          name="primary"
          legend="Primary"
          fieldsetColorVariant="primary"
          colorVariant="primary"
        />
        <ToggleForm
          name="secondary"
          legend="Secondary"
          fieldsetColorVariant="secondary"
          colorVariant="secondary"
        />
        <ToggleForm
          name="success"
          legend="Success"
          fieldsetColorVariant="success"
          colorVariant="success"
        />
        <ToggleForm
          name="danger"
          legend="Danger"
          fieldsetColorVariant="danger"
          colorVariant="danger"
        />
      </div>
    </FormWrapper>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <FormWrapper>
      <div className="space-y-4">
        <ToggleForm
          name="small"
          legend="Small Toggle"
          size="sm"
        />
        <ToggleForm
          name="default"
          legend="Default Toggle"
          size="default"
        />
        <ToggleForm
          name="large"
          legend="Large Toggle"
          size="lg"
        />
      </div>
    </FormWrapper>
  ),
};

export const CustomValues: Story = {
  render: () => (
    <FormWrapper>
      <div className="space-y-4">
        <ToggleForm
          name="autoSave"
          legend="Auto Save"
          checkedValue="ENABLED"
          notCheckedValue="DISABLED"
        />
        <ToggleForm
          name="darkMode"
          legend="Dark Mode"
          checkedValue="ON"
          notCheckedValue="OFF"
        />
        <ToggleForm
          name="emailUpdates"
          legend="Email Updates"
          checkedValue="SUBSCRIBE"
          notCheckedValue="UNSUBSCRIBE"
        />
      </div>
    </FormWrapper>
  ),
};

export const SettingsForm: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        notifications: true,
        emailDigest: false,
        autoBackup: true,
        twoFactor: false,
        marketingEmails: false,
      },
    });

    return (
      <Form {...form}>
        <div className="w-full max-w-md space-y-4">
          <h3 className="text-lg font-semibold">User Settings</h3>
          <ToggleForm
            name="notifications"
            legend="Push Notifications"
            colorVariant="primary"
          />
          <ToggleForm
            name="emailDigest"
            legend="Weekly Email Digest"
            colorVariant="secondary"
          />
          <ToggleForm
            name="autoBackup"
            legend="Automatic Backup"
            colorVariant="success"
          />
          <ToggleForm
            name="twoFactor"
            legend="Two-Factor Authentication"
            colorVariant="primary"
          />
          <ToggleForm
            name="marketingEmails"
            legend="Marketing Emails"
            colorVariant="default"
          />
          <Button type="submit" className="w-full">Save Settings</Button>
        </div>
      </Form>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper>
      <ToggleForm
        name="disabled"
        legend="Disabled Toggle"
        disabled={true}
      />
    </FormWrapper>
  ),
};