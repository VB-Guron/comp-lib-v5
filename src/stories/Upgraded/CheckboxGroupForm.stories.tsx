import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GenericCheckboxFormField } from "../../components/upgraded/checkboxgroup-form";
import { SelectableItem } from "../../components/ui/checkboxgroup";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof GenericCheckboxFormField> = {
  title: "Upgraded/CheckboxGroup Form",
  component: GenericCheckboxFormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "React Hook Form integrated checkbox group component with validation support and automatic form state management.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenericCheckboxFormField>;

// Sample data
const samplePermissions: SelectableItem[] = [
  { id: 100, code: "USER_READ", name: "View Users", permissionGroupId: "user-management" },
  { id: 101, code: "USER_WRITE", name: "Edit Users", permissionGroupId: "user-management" },
  { id: 102, code: "USER_DELETE", name: "Delete Users", permissionGroupId: "user-management" },
  { id: 200, code: "REPORT_READ", name: "View Reports", permissionGroupId: "reporting" },
  { id: 201, code: "REPORT_WRITE", name: "Generate Reports", permissionGroupId: "reporting" },
  { id: 300, code: "SYSTEM_READ", name: "View System Settings", permissionGroupId: "system" },
  { id: 301, code: "SYSTEM_WRITE", name: "Edit System Settings", permissionGroupId: "system" },
];

const sampleHolidays: SelectableItem[] = [
  { id: 1, code: "NY", name: "New Year's Day", permissionGroupId: "national" },
  { id: 2, code: "CNY", name: "Chinese New Year", permissionGroupId: "national" },
  { id: 3, code: "EDL", name: "Eid al-Fitr", permissionGroupId: "religious" },
  { id: 4, code: "IND", name: "Independence Day", permissionGroupId: "national" },
  { id: 5, code: "CHR", name: "Christmas Day", permissionGroupId: "religious" },
  { id: 6, code: "LAB", name: "Labor Day", permissionGroupId: "national" },
];

// Form schemas
const permissionFormSchema = z.object({
  permissions: z.array(z.object({
    itemId: z.number()
  })).min(1, "Please select at least one permission"),
});

const holidayFormSchema = z.object({
  holidays: z.array(z.object({
    itemId: z.number()
  })).optional(),
  name: z.string().min(1, "Name is required"),
});

export const PermissionForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(permissionFormSchema),
      defaultValues: {
        permissions: [],
      },
    });

    const onSubmit = (data: any) => {
      alert(`Form submitted!\nPermissions: ${JSON.stringify(data.permissions, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Permission Assignment Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <GenericCheckboxFormField
                    data={samplePermissions}
                    name="permissions"
                    valueName="itemId"
                    title="Select All Permissions"
                  />

                  <Button type="submit" className="w-full">
                    Save Permissions
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                React Hook Form integration with validation. Try submitting without selecting any permissions.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const HolidaySelectionForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(holidayFormSchema),
      defaultValues: {
        name: "",
        holidays: [],
      },
    });

    const onSubmit = (data: any) => {
      alert(`Holiday Group Created!\nName: ${data.name}\nHolidays: ${JSON.stringify(data.holidays, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Holiday Group Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Group Name</label>
                    <input
                      {...form.register("name")}
                      type="text"
                      placeholder="Enter holiday group name"
                      className="w-full p-2 border rounded"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <GenericCheckboxFormField
                    data={sampleHolidays}
                    name="holidays"
                    valueName="itemId"
                    title="Select All Holidays"
                  />

                  <Button type="submit" className="w-full">
                    Create Holiday Group
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

export const PreselectedValues: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(permissionFormSchema),
      defaultValues: {
        permissions: [
          { itemId: 100 }, // Pre-select "View Users"
          { itemId: 200 }, // Pre-select "View Reports"
        ],
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
            <h3 className="text-lg font-semibold">Form with Preselected Values</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <GenericCheckboxFormField
                    data={samplePermissions}
                    name="permissions"
                    valueName="itemId"
                    title="Select All Permissions"
                  />

                  <Button type="submit" className="w-full">
                    Update Permissions
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                "View Users" and "View Reports" are preselected in the form's default values.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const MultipleCheckboxGroups: Story = {
  render: () => {
    const multiSchema = z.object({
      permissions: z.array(z.object({ itemId: z.number() })),
      holidays: z.array(z.object({ itemId: z.number() })),
    });

    const form = useForm({
      resolver: zodResolver(multiSchema),
      defaultValues: {
        permissions: [],
        holidays: [],
      },
    });

    const onSubmit = (data: any) => {
      alert(`Form Data:\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Multiple Checkbox Groups</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">User Permissions</h4>
                    <GenericCheckboxFormField
                      data={samplePermissions}
                      name="permissions"
                      valueName="itemId"
                      title="Select All Permissions"
                    />
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Holiday Access</h4>
                    <GenericCheckboxFormField
                      data={sampleHolidays}
                      name="holidays"
                      valueName="itemId"
                      title="Select All Holidays"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Save Configuration
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

export const DarkMode: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(permissionFormSchema),
      defaultValues: {
        permissions: [],
      },
    });

    const onSubmit = (data: any) => {
      console.log("Dark mode form:", data);
    };

    return (
      <ThemeProvider defaultTheme="dark">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dark Mode Checkbox Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <GenericCheckboxFormField
                    data={samplePermissions}
                    name="permissions"
                    valueName="itemId"
                    title="Select All Permissions"
                  />

                  <Button type="submit" className="w-full">
                    Save Permissions
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Checkbox form component with dark mode theme support and form validation.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};