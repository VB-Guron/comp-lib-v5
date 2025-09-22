import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UploadForm } from "../../components/upgraded/upload-form";
import { AttachmentData } from "../../components/ui/upload/upload";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof UploadForm> = {
  title: "Upgraded/Upload Form",
  component: UploadForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "React Hook Form integrated upload component with file validation, form state management, and attachment handling.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadForm>;

// Form schemas
const documentFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  document: z.object({
    name: z.string(),
    data: z.string(),
    fileType: z.string(),
  }).nullable().refine(data => data !== null, "Please upload a document"),
});

const profileFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  avatar: z.object({
    name: z.string(),
    data: z.string(),
    fileType: z.string(),
  }).nullable(),
  resume: z.object({
    name: z.string(),
    data: z.string(),
    fileType: z.string(),
  }).nullable(),
});

const reportFormSchema = z.object({
  reportName: z.string().min(1, "Report name is required"),
  attachment: z.object({
    name: z.string(),
    data: z.string(),
    fileType: z.string(),
  }).nullable().refine(data => data !== null, "Report attachment is required"),
});

export const DocumentUploadForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(documentFormSchema),
      defaultValues: {
        title: "",
        description: "",
        document: null,
      },
    });

    const onSubmit = (data: any) => {
      alert(`Document Submitted!\nTitle: ${data.title}\nFile: ${data.document?.name || "None"}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Document Upload Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Document Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter document title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <UploadForm
                    name="document"
                    legend="Upload Document"
                    buttonText="Choose Document"
                    maxSizeInMB={10}
                    allowAllFileTypes={false}
                    showAttachmentLabel
                  />

                  <Button type="submit" className="w-full">
                    Submit Document
                  </Button>
                </form>
              </Form>
            </FormProvider>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ProfileForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(profileFormSchema),
      defaultValues: {
        name: "",
        email: "",
        avatar: null,
        resume: null,
      },
    });

    const onSubmit = (data: any) => {
      alert(`Profile Updated!\nName: ${data.name}\nEmail: ${data.email}\nAvatar: ${data.avatar?.name || "None"}\nResume: ${data.resume?.name || "None"}`);
    };

    const handleAvatarOpen = (fileName: string, data: string, fileType: string) => {
      console.log("Opening avatar:", fileName);
    };

    const handleResumeOpen = (fileName: string, data: string, fileType: string) => {
      console.log("Opening resume:", fileName);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Employee Profile Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <UploadForm
                    name="avatar"
                    legend="Profile Picture"
                    buttonText="Upload Avatar"
                    maxSizeInMB={2}
                    allowAllFileTypes
                    onOpen={handleAvatarOpen}
                    showAttachmentLabel
                  />

                  <UploadForm
                    name="resume"
                    legend="Resume/CV"
                    buttonText="Upload Resume"
                    maxSizeInMB={5}
                    allowAllFileTypes={false}
                    onOpen={handleResumeOpen}
                    showAttachmentLabel
                  />

                  <Button type="submit" className="w-full">
                    Update Profile
                  </Button>
                </form>
              </Form>
            </FormProvider>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const RequiredUpload: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(reportFormSchema),
      defaultValues: {
        reportName: "",
        attachment: null,
      },
    });

    const onSubmit = (data: any) => {
      alert(`Report Submitted!\nName: ${data.reportName}\nAttachment: ${data.attachment.name}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Required Upload Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="reportName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Report Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter report name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <UploadForm
                    name="attachment"
                    legend="Report Attachment *"
                    buttonText="Upload Report"
                    maxSizeInMB={5}
                    allowAllFileTypes={false}
                    showAttachmentLabel
                  />

                  <Button type="submit" className="w-full">
                    Submit Report
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Try submitting without uploading a file to see the validation error.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const PreexistingAttachment: Story = {
  render: () => {
    const existingAttachment: AttachmentData = {
      name: "existing-document.pdf",
      data: "base64datahere...",
      fileType: "pdf"
    };

    const form = useForm({
      resolver: zodResolver(documentFormSchema),
      defaultValues: {
        title: "Sample Document",
        description: "This is a sample document with preexisting attachment",
        document: existingAttachment,
      },
    });

    const onSubmit = (data: any) => {
      console.log("Form data:", data);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Form with Existing Attachment</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Document Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter document title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <UploadForm
                    name="document"
                    legend="Document File"
                    buttonText="Change Document"
                    maxSizeInMB={10}
                    allowAllFileTypes={false}
                    showAttachmentLabel
                  />

                  <Button type="submit" className="w-full">
                    Update Document
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                This form starts with an existing attachment that can be replaced or removed.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMode: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(documentFormSchema),
      defaultValues: {
        title: "",
        description: "",
        document: null,
      },
    });

    const onSubmit = (data: any) => {
      console.log("Dark mode upload:", data);
    };

    return (
      <ThemeProvider defaultTheme="dark">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dark Mode Upload Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Document Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter document title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <UploadForm
                    name="document"
                    legend="Upload Document"
                    buttonText="Choose File"
                    maxSizeInMB={5}
                    allowAllFileTypes
                    showAttachmentLabel
                  />

                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Upload form component with dark mode theme support and form validation.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};