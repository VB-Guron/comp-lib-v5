import React, { useState } from "react";
import { Upload, UploadButton, AttachmentData } from "../../components/ui/upload/upload";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Upload> = {
  title: "UI/Upload",
  component: Upload,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "fieldset"]
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"]
    },
    buttonText: { control: "text" },
    legend: { control: "text" },
    maxSizeInMB: { control: "number" },
    allowAllFileTypes: { control: "boolean" },
    showAttachmentLabel: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "A comprehensive file upload component with drag & drop support, file type validation, size limits, and attachment management.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  render: (args: any) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Upload Default</h3>
          <div className="max-w-md">
            <Upload {...args} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    buttonText: "Choose File",
    maxSizeInMB: 5,
  },
};

export const WithAttachment: Story = {
  render: () => {
    const [attachment, setAttachment] = useState<AttachmentData | null>({
      name: "sample-document.pdf",
      data: "base64datahere...",
      fileType: "pdf"
    });

    const handleChoose = (name: string, data: string, fileType: string) => {
      setAttachment({ name, data, fileType });
      console.log("File chosen:", { name, fileType });
    };

    const handleRemove = () => {
      setAttachment(null);
      console.log("File removed");
    };

    const handleOpen = (fileName: string, data: string, fileType: string) => {
      console.log("Opening file:", fileName);
      alert(`Opening ${fileName} (${fileType})`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Upload with Attachment</h3>
            <div className="max-w-md">
              <Upload
                buttonText="Choose Document"
                attachment={attachment}
                onChoose={handleChoose}
                onFileRemove={handleRemove}
                onOpen={handleOpen}
                maxSizeInMB={10}
                showAttachmentLabel
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Current file:</strong> {attachment?.name || "None"}<br/>
                <strong>Actions:</strong> Upload, view, or remove files
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const FieldsetVariant: Story = {
  render: () => {
    const [attachment, setAttachment] = useState<AttachmentData | null>(null);
    const [error, setError] = useState<string>("");

    const handleChoose = (name: string, data: string, fileType: string) => {
      setAttachment({ name, data, fileType });
      setError("");
    };

    const handleError = (errorMessage: string) => {
      setError(errorMessage);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Fieldset Upload</h3>
            <div className="max-w-md">
              <Upload
                variant="fieldset"
                legend="Supporting Documents"
                buttonText="Attach File"
                attachment={attachment}
                onChoose={handleChoose}
                onFileRemove={() => setAttachment(null)}
                maxSizeInMB={5}
                onError={handleError}
                showAttachmentLabel
              />
            </div>
            {error && (
              <div className="mt-2 p-2 bg-red-100 text-red-700 rounded text-sm">
                {error}
              </div>
            )}
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Upload Sizes</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Small</h4>
              <Upload
                size="sm"
                buttonText="Small Upload"
                maxSizeInMB={1}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Default</h4>
              <Upload
                size="default"
                buttonText="Default Upload"
                maxSizeInMB={5}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Large</h4>
              <Upload
                size="lg"
                buttonText="Large Upload"
                maxSizeInMB={10}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const UploadButtonComponent: Story = {
  render: () => {
    const [files, setFiles] = useState<string[]>([]);

    const handleAdd = (name: string, data: string, fileType: string) => {
      setFiles(prev => [...prev, name]);
      console.log("File added:", { name, fileType });
    };

    const handleError = (error: string) => {
      alert(`Upload error: ${error}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Upload Button Component</h3>
            <div className="space-y-4">
              <UploadButton
                buttonText="Add Files"
                onAdd={handleAdd}
                onError={handleError}
                maxSizeInMB={5}
                allowAllFileTypes
              />

              {files.length > 0 && (
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-2">Uploaded Files:</p>
                  <ul className="text-sm space-y-1">
                    {files.map((file, index) => (
                      <li key={index}>• {file}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const FileTypeRestrictions: Story = {
  render: () => {
    const [status, setStatus] = useState<string>("");

    const handleChoose = (name: string, data: string, fileType: string) => {
      setStatus(`Uploaded: ${name} (${fileType.toUpperCase()})`);
    };

    const handleError = (error: string) => {
      setStatus(`Error: ${error}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">File Type Restrictions</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Documents Only</h4>
                <Upload
                  buttonText="Upload Document"
                  onChoose={handleChoose}
                  onError={handleError}
                  maxSizeInMB={5}
                  allowAllFileTypes={false}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Accepts: PDF, DOC, DOCX, TXT
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">All File Types</h4>
                <Upload
                  buttonText="Upload Any File"
                  onChoose={handleChoose}
                  onError={handleError}
                  maxSizeInMB={10}
                  allowAllFileTypes={true}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Accepts: Any file type
                </p>
              </div>
            </div>

            {status && (
              <div className="mt-4 p-3 bg-muted rounded">
                <p className="text-sm">{status}</p>
              </div>
            )}
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMode: Story = {
  render: () => {
    const [attachment, setAttachment] = useState<AttachmentData | null>(null);

    return (
      <ThemeProvider defaultTheme="dark">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dark Mode Upload</h3>
            <div className="max-w-md">
              <Upload
                variant="fieldset"
                legend="Document Upload"
                buttonText="Choose File"
                attachment={attachment}
                onChoose={(name, data, fileType) => setAttachment({ name, data, fileType })}
                onFileRemove={() => setAttachment(null)}
                maxSizeInMB={5}
                showAttachmentLabel
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Upload component with dark mode theme support and fieldset styling.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};