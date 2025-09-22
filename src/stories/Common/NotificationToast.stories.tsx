import React, { useState } from "react";
import { NotificationToast, NotificationToastProvider, useNotificationToast } from "../../components/common/NotificationToast";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof NotificationToast> = {
  title: "Common/NotificationToast",
  component: NotificationToast,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["error", "success", "default"],
    },
    header: { control: "text" },
    details: { control: "text" },
    show: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "A comprehensive toast notification system with auto-hide functionality, multiple status types, and context provider for global usage.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationToast>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">NotificationToast Default</h3>
          <NotificationToast {...args} />
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    status: "default",
    header: "Notification",
    details: "This is a default notification message.",
    show: true,
  },
};

export const AllStatusTypes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">All Status Types</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">Success Toast</h4>
              <NotificationToast
                status="success"
                header="Success!"
                details="Your action was completed successfully."
                show={true}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Error Toast</h4>
              <NotificationToast
                status="error"
                header="Error Occurred"
                details="Something went wrong. Please try again."
                show={true}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Default Toast</h4>
              <NotificationToast
                status="default"
                header="Information"
                details="This is a general information message."
                show={true}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Custom Icon Examples</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">Custom React Icon</h4>
              <NotificationToast
                status="success"
                header="Custom Icon"
                details="This toast uses a custom React icon."
                show={true}
                icon={<span style={{ fontSize: '20px' }}>🎉</span>}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Custom Image Icon</h4>
              <NotificationToast
                status="default"
                header="Custom Image"
                details="This toast uses a custom image source."
                show={true}
                customIconSrc="/placeholder-icon.png"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

// Interactive example using the context provider
const InteractiveExample = () => {
  const [, showNotification] = useNotificationToast();

  const handleShowSuccess = () => {
    showNotification({
      status: "success",
      header: "Operation Successful",
      details: "Your data has been saved successfully!"
    });
  };

  const handleShowError = () => {
    showNotification({
      status: "error",
      header: "Operation Failed",
      details: "Failed to save data. Please check your connection."
    });
  };

  const handleShowInfo = () => {
    showNotification({
      status: "default",
      header: "Information",
      details: "This is an informational message."
    });
  };

  return (
    <div className="space-y-4">
      <h4 className="text-md font-medium">Interactive Toast Triggers</h4>
      <div className="flex gap-4">
        <button
          onClick={handleShowSuccess}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Show Success
        </button>
        <button
          onClick={handleShowError}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Show Error
        </button>
        <button
          onClick={handleShowInfo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show Info
        </button>
      </div>
      <p className="text-sm text-muted-foreground">
        Click the buttons to trigger toast notifications. They will auto-hide after 3 seconds.
      </p>
    </div>
  );
};

export const WithProvider: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <NotificationToastProvider>
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Toast with Context Provider</h3>
            <InteractiveExample />
          </div>
        </div>
      </NotificationToastProvider>
    </ThemeProvider>
  ),
};

export const AutoHideDemo: Story = {
  render: () => {
    const [showToast, setShowToast] = useState(false);
    const [toastKey, setToastKey] = useState(0);

    const handleShowToast = () => {
      setShowToast(true);
      setToastKey(prev => prev + 1);
      // Auto hide after 3 seconds to match component behavior
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Auto-Hide Demonstration</h3>

            <div className="space-y-4">
              <button
                onClick={handleShowToast}
                className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
              >
                Show Auto-Hide Toast
              </button>

              <p className="text-sm text-muted-foreground">
                Click the button to show a toast that automatically hides after 3 seconds.
              </p>

              {showToast && (
                <NotificationToast
                  key={toastKey}
                  status="success"
                  header="Auto-Hide Demo"
                  details="This toast will disappear automatically in 3 seconds."
                  show={true}
                />
              )}
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const LongContent: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Toast with Long Content</h3>

          <div className="space-y-4">
            <NotificationToast
              status="error"
              header="Validation Failed"
              details="The form could not be submitted due to multiple validation errors. Please check the following fields: email format is invalid, password must be at least 8 characters long, and the confirmation password does not match."
              show={true}
            />

            <NotificationToast
              status="success"
              header="Data Import Completed Successfully"
              details="All 1,247 records have been imported successfully. The process took 2 minutes and 34 seconds. You can now view and manage your imported data in the dashboard."
              show={true}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};