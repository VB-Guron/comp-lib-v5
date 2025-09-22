import React, { useState } from "react";
import { Toggle } from "../../components/ui/toggle";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    name: { control: "text" },
    checkedValue: { control: "text" },
    notCheckedValue: { control: "text" },
    legend: { control: "text" },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"]
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args: any) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Toggle Default</h3>
          <Toggle {...args} />
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    checked: false,
    legend: "Enable feature",
  },
};

export const AllStates: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Toggle States</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Unchecked</h4>
                <Toggle checked={false} legend="Feature disabled" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Checked</h4>
                <Toggle checked={true} legend="Feature enabled" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Disabled (Off)</h4>
                <Toggle checked={false} disabled legend="Disabled feature" />
              </div>

              <div>
                <h4 className="text-md font-medium mb-2">Disabled (On)</h4>
                <Toggle checked={true} disabled legend="Locked feature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Custom Label Text</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">Default Labels (YES/NO)</h4>
              <Toggle checked={true} legend="Standard toggle" />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">On/Off Labels</h4>
              <Toggle
                checked={false}
                checkedValue="ON"
                notCheckedValue="OFF"
                legend="Power switch"
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Enable/Disable Labels</h4>
              <Toggle
                checked={true}
                checkedValue="ENABLED"
                notCheckedValue="DISABLED"
                legend="Feature status"
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Show/Hide Labels</h4>
              <Toggle
                checked={false}
                checkedValue="SHOW"
                notCheckedValue="HIDE"
                legend="Visibility control"
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Active/Inactive Labels</h4>
              <Toggle
                checked={true}
                checkedValue="ACTIVE"
                notCheckedValue="INACTIVE"
                legend="Account status"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Fieldset Color Variants</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Toggle
                checked={true}
                fieldsetColorVariant="default"
                legend="Default color"
              />
              <Toggle
                checked={true}
                fieldsetColorVariant="primary"
                legend="Primary color"
              />
              <Toggle
                checked={true}
                fieldsetColorVariant="secondary"
                legend="Secondary color"
              />
            </div>

            <div className="space-y-4">
              <Toggle
                checked={true}
                fieldsetColorVariant="success"
                legend="Success color"
              />
              <Toggle
                checked={true}
                fieldsetColorVariant="danger"
                legend="Danger color"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      publicProfile: false,
      emailUpdates: true,
    });

    const handleToggleChange = (key: string) => (data: any) => {
      setSettings(prev => ({
        ...prev,
        [key]: data.checked
      }));
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Interactive Settings Panel</h3>

            <div className="p-6 border rounded-lg">
              <h4 className="text-lg font-medium mb-4">User Preferences</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Toggle
                    checked={settings.notifications}
                    onChange={handleToggleChange('notifications')}
                    legend="Push Notifications"
                    checkedValue="ENABLED"
                    notCheckedValue="DISABLED"
                    fieldsetColorVariant="primary"
                  />

                  <Toggle
                    checked={settings.darkMode}
                    onChange={handleToggleChange('darkMode')}
                    legend="Dark Mode"
                    checkedValue="ON"
                    notCheckedValue="OFF"
                    fieldsetColorVariant="secondary"
                  />

                  <Toggle
                    checked={settings.autoSave}
                    onChange={handleToggleChange('autoSave')}
                    legend="Auto Save"
                    checkedValue="ACTIVE"
                    notCheckedValue="INACTIVE"
                    fieldsetColorVariant="success"
                  />
                </div>

                <div className="space-y-4">
                  <Toggle
                    checked={settings.publicProfile}
                    onChange={handleToggleChange('publicProfile')}
                    legend="Public Profile"
                    checkedValue="VISIBLE"
                    notCheckedValue="HIDDEN"
                    fieldsetColorVariant="danger"
                  />

                  <Toggle
                    checked={settings.emailUpdates}
                    onChange={handleToggleChange('emailUpdates')}
                    legend="Email Updates"
                    checkedValue="SUBSCRIBED"
                    notCheckedValue="UNSUBSCRIBED"
                    fieldsetColorVariant="default"
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded">
                <h5 className="font-medium mb-2">Current Settings:</h5>
                <div className="text-sm space-y-1">
                  <div>Notifications: <span className="font-mono">{settings.notifications ? 'Enabled' : 'Disabled'}</span></div>
                  <div>Dark Mode: <span className="font-mono">{settings.darkMode ? 'On' : 'Off'}</span></div>
                  <div>Auto Save: <span className="font-mono">{settings.autoSave ? 'Active' : 'Inactive'}</span></div>
                  <div>Public Profile: <span className="font-mono">{settings.publicProfile ? 'Visible' : 'Hidden'}</span></div>
                  <div>Email Updates: <span className="font-mono">{settings.emailUpdates ? 'Subscribed' : 'Unsubscribed'}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      termsAccepted: false,
      newsletter: false,
      privacy: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Form submitted with: ${JSON.stringify(formData, null, 2)}`);
    };

    const handleToggleChange = (field: string) => (data: any) => {
      setFormData(prev => ({
        ...prev,
        [field]: data.checked
      }));
    };

    const isFormValid = formData.termsAccepted && formData.privacy;

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Form Integration</h3>

            <form onSubmit={handleSubmit} className="p-6 border rounded-lg max-w-md">
              <h4 className="text-lg font-medium mb-4">Account Setup</h4>

              <div className="space-y-4">
                <Toggle
                  name="terms"
                  checked={formData.termsAccepted}
                  onChange={handleToggleChange('termsAccepted')}
                  legend="Accept Terms & Conditions *"
                  checkedValue="ACCEPTED"
                  notCheckedValue="REQUIRED"
                  fieldsetColorVariant={formData.termsAccepted ? "success" : "danger"}
                />

                <Toggle
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleToggleChange('newsletter')}
                  legend="Subscribe to Newsletter"
                  checkedValue="SUBSCRIBED"
                  notCheckedValue="SKIPPED"
                  fieldsetColorVariant="primary"
                />

                <Toggle
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleToggleChange('privacy')}
                  legend="Acknowledge Privacy Policy *"
                  checkedValue="ACKNOWLEDGED"
                  notCheckedValue="REQUIRED"
                  fieldsetColorVariant={formData.privacy ? "success" : "danger"}
                />

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
                  >
                    Create Account
                  </button>
                  {!isFormValid && (
                    <p className="text-xs text-red-500 mt-2">
                      Please accept required terms and privacy policy
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};