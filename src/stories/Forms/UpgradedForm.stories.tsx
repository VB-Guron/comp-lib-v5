import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../components/ui/form";
import { UpgradedFieldsetFormInput } from "../../components/upgraded/fieldset-form-input";
import { UpgradedFieldsetFormTextarea } from "../../components/upgraded/fieldset-form-textarea";
import { ToggleForm } from "../../components/upgraded/toggle-form";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta = {
  title: "Forms/UpgradedForm",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Enhanced form components with fieldset styling, color variants, and advanced validation features.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const FieldsetContactForm: Story = {
  render: () => {
    const formSchema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Please enter a valid email address"),
      phone: z.string().optional(),
      subject: z.string().min(5, "Subject must be at least 5 characters"),
      message: z.string().min(10, "Message must be at least 10 characters"),
      newsletter: z.boolean(),
      urgent: z.boolean(),
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
        urgent: false,
      },
    });

    const onSubmit = (data: FormData) => {
      alert(
        `Enhanced Contact Form Submitted!\n${JSON.stringify(data, null, 2)}`
      );
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="bg-background flex h-screen w-screen flex-col gap-4 p-6">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">
              Enhanced Contact Form with Fieldsets
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-2xl space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <UpgradedFieldsetFormInput
                    name="name"
                    legend="Full Name"
                    placeholder="Enter your full name"
                  />

                  <UpgradedFieldsetFormInput
                    name="email"
                    type="email"
                    legend="Email Address"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <UpgradedFieldsetFormInput
                    name="phone"
                    type="tel"
                    legend="Phone Number"
                    placeholder="Enter your phone (optional)"
                  />

                  <UpgradedFieldsetFormInput
                    name="subject"
                    legend="Subject"
                    placeholder="What is this about?"
                  />
                </div>

                <UpgradedFieldsetFormTextarea
                  name="message"
                  legend="Message"
                  placeholder="Please describe your inquiry in detail..."
                  fieldsetColorVariant="default"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ToggleForm
                    name="newsletter"
                    legend="Subscribe to Newsletter"
                    checkedValue="SUBSCRIBED"
                    notCheckedValue="NOT SUBSCRIBED"
                    fieldsetColorVariant="success"
                  />

                  <ToggleForm
                    name="urgent"
                    legend="Mark as Urgent"
                    checkedValue="URGENT"
                    notCheckedValue="NORMAL"
                    fieldsetColorVariant="danger"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => form.reset()}
                  >
                    Clear Form
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ColorVariantsDemo: Story = {
  render: () => {
    const formSchema = z.object({
      defaultField: z.string().min(1, "Required field"),
      primaryField: z.string().min(1, "Required field"),
      secondaryField: z.string().min(1, "Required field"),
      successField: z.string().min(1, "Required field"),
      dangerField: z.string().min(1, "Required field"),
      defaultToggle: z.boolean(),
      primaryToggle: z.boolean(),
      secondaryToggle: z.boolean(),
      successToggle: z.boolean(),
      dangerToggle: z.boolean(),
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        defaultField: "",
        primaryField: "",
        secondaryField: "",
        successField: "",
        dangerField: "",
        defaultToggle: false,
        primaryToggle: false,
        secondaryToggle: false,
        successToggle: false,
        dangerToggle: false,
      },
    });

    const onSubmit = (data: FormData) => {
      alert(`Color Variants Form!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="bg-background flex h-screen w-screen flex-col gap-4 overflow-y-auto p-6">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Fieldset Color Variants</h3>
            <p className="text-muted-foreground">
              Demonstration of all available fieldset color variants for
              enhanced visual organization.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-4xl space-y-6"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-medium">Input Field Variants</h4>

                    <UpgradedFieldsetFormInput
                      name="defaultField"
                      legend="Default Color"
                      placeholder="Default fieldset color"
                      fieldsetColorVariant="default"
                    />

                    <UpgradedFieldsetFormInput
                      name="primaryField"
                      legend="Primary Color"
                      placeholder="Primary fieldset color"
                      fieldsetColorVariant="primary"
                    />

                    <UpgradedFieldsetFormInput
                      name="secondaryField"
                      legend="Secondary Color"
                      placeholder="Secondary fieldset color"
                      fieldsetColorVariant="secondary"
                    />

                    <UpgradedFieldsetFormInput
                      name="successField"
                      legend="Success Color"
                      placeholder="Success fieldset color"
                      fieldsetColorVariant="success"
                    />

                    <UpgradedFieldsetFormInput
                      name="dangerField"
                      legend="Danger Color"
                      placeholder="Danger fieldset color"
                      fieldsetColorVariant="danger"
                    />
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Toggle Variants</h4>

                    <ToggleForm
                      name="defaultToggle"
                      legend="Default Toggle"
                      fieldsetColorVariant="default"
                    />

                    <ToggleForm
                      name="primaryToggle"
                      legend="Primary Toggle"
                      fieldsetColorVariant="primary"
                    />

                    <ToggleForm
                      name="secondaryToggle"
                      legend="Secondary Toggle"
                      fieldsetColorVariant="secondary"
                    />

                    <ToggleForm
                      name="successToggle"
                      legend="Success Toggle"
                      checkedValue="ENABLED"
                      notCheckedValue="DISABLED"
                      fieldsetColorVariant="success"
                    />

                    <ToggleForm
                      name="dangerToggle"
                      legend="Danger Toggle"
                      checkedValue="ACTIVE"
                      notCheckedValue="INACTIVE"
                      fieldsetColorVariant="danger"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Submit Color Variants Form
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const AdvancedUserProfile: Story = {
  render: () => {
    const profileSchema = z.object({
      firstName: z.string().min(2, "First name must be at least 2 characters"),
      lastName: z.string().min(2, "Last name must be at least 2 characters"),
      email: z.string().email("Please enter a valid email address"),
      phone: z.string().optional(),
      bio: z.string().max(500, "Bio must be 500 characters or less").optional(),
      website: z
        .string()
        .url("Please enter a valid URL")
        .optional()
        .or(z.literal("")),
      publicProfile: z.boolean(),
      emailNotifications: z.boolean(),
      smsNotifications: z.boolean(),
      marketingEmails: z.boolean(),
    });

    type ProfileData = z.infer<typeof profileSchema>;

    const form = useForm<ProfileData>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        bio: "",
        website: "",
        publicProfile: false,
        emailNotifications: true,
        smsNotifications: false,
        marketingEmails: false,
      },
    });

    const onSubmit = (data: ProfileData) => {
      alert(`Profile Updated!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="bg-background flex h-screen w-screen flex-col gap-4 overflow-y-auto p-6">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">
              Advanced User Profile Form
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-4xl space-y-8"
              >
                <div className="space-y-6">
                  <h4 className="text-md border-b pb-2 font-medium">
                    Personal Information
                  </h4>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <UpgradedFieldsetFormInput
                      name="firstName"
                      legend="First Name"
                      placeholder="Enter your first name"
                      fieldsetColorVariant="primary"
                    />

                    <UpgradedFieldsetFormInput
                      name="lastName"
                      legend="Last Name"
                      placeholder="Enter your last name"
                      fieldsetColorVariant="primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <UpgradedFieldsetFormInput
                      name="email"
                      type="email"
                      legend="Email Address"
                      placeholder="Enter your email"
                      fieldsetColorVariant="primary"
                    />

                    <UpgradedFieldsetFormInput
                      name="phone"
                      type="tel"
                      legend="Phone Number"
                      placeholder="Enter your phone (optional)"
                      fieldsetColorVariant="secondary"
                    />
                  </div>

                  <UpgradedFieldsetFormTextarea
                    name="bio"
                    legend="Biography"
                    placeholder="Tell us about yourself (optional)"
                    fieldsetColorVariant="default"
                  />

                  <UpgradedFieldsetFormInput
                    name="website"
                    type="url"
                    legend="Website"
                    placeholder="https://yourwebsite.com (optional)"
                    fieldsetColorVariant="secondary"
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-md border-b pb-2 font-medium">
                    Privacy & Notifications
                  </h4>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ToggleForm
                      name="publicProfile"
                      legend="Public Profile"
                      checkedValue="VISIBLE"
                      notCheckedValue="PRIVATE"
                      fieldsetColorVariant="danger"
                    />

                    <ToggleForm
                      name="emailNotifications"
                      legend="Email Notifications"
                      checkedValue="ENABLED"
                      notCheckedValue="DISABLED"
                      fieldsetColorVariant="primary"
                    />

                    <ToggleForm
                      name="smsNotifications"
                      legend="SMS Notifications"
                      checkedValue="ENABLED"
                      notCheckedValue="DISABLED"
                      fieldsetColorVariant="secondary"
                    />

                    <ToggleForm
                      name="marketingEmails"
                      legend="Marketing Emails"
                      checkedValue="SUBSCRIBED"
                      notCheckedValue="UNSUBSCRIBED"
                      fieldsetColorVariant="success"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" size="lg">
                    Update Profile
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => form.reset()}
                  >
                    Reset Changes
                  </Button>
                  <Button type="button" variant="destructive" size="lg">
                    Delete Account
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ResponsiveFormLayout: Story = {
  render: () => {
    const formSchema = z.object({
      title: z.string().min(1, "Title is required"),
      description: z
        .string()
        .min(10, "Description must be at least 10 characters"),
      category: z.string().min(1, "Category is required"),
      tags: z.string().optional(),
      published: z.boolean(),
      featured: z.boolean(),
      allowComments: z.boolean(),
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: "",
        description: "",
        category: "",
        tags: "",
        published: false,
        featured: false,
        allowComments: true,
      },
    });

    const onSubmit = (data: FormData) => {
      alert(`Content Form Submitted!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="bg-background flex h-screen w-screen flex-col gap-4 p-6">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Responsive Form Layout</h3>
            <p className="text-muted-foreground">
              Resize your browser to see how the form adapts to different screen
              sizes.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-4xl space-y-6"
              >
                <UpgradedFieldsetFormInput
                  name="title"
                  legend="Content Title"
                  placeholder="Enter a compelling title"
                  fieldsetColorVariant="primary"
                />

                <UpgradedFieldsetFormTextarea
                  name="description"
                  legend="Description"
                  placeholder="Provide a detailed description of your content"
                  fieldsetColorVariant="default"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <UpgradedFieldsetFormInput
                    name="category"
                    legend="Category"
                    placeholder="e.g., Technology, Design, Business"
                    fieldsetColorVariant="secondary"
                  />

                  <UpgradedFieldsetFormInput
                    name="tags"
                    legend="Tags"
                    placeholder="Enter tags separated by commas"
                    fieldsetColorVariant="secondary"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ToggleForm
                    name="published"
                    legend="Publish Immediately"
                    checkedValue="PUBLISHED"
                    notCheckedValue="DRAFT"
                    fieldsetColorVariant="success"
                  />

                  <ToggleForm
                    name="featured"
                    legend="Featured Content"
                    checkedValue="FEATURED"
                    notCheckedValue="REGULAR"
                    fieldsetColorVariant="primary"
                  />

                  <ToggleForm
                    name="allowComments"
                    legend="Allow Comments"
                    checkedValue="ENABLED"
                    notCheckedValue="DISABLED"
                    fieldsetColorVariant="default"
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button type="submit" className="flex-1">
                    Save Content
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                  <Button type="button" variant="ghost" className="flex-1">
                    Preview
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};
