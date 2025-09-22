import React, { useState } from "react";
import { GenericCheckboxGroup, type SelectableItem } from "../../components/ui/checkboxgroup";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof GenericCheckboxGroup> = {
  title: "UI/CheckboxGroup",
  component: GenericCheckboxGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A generic checkbox group component for selecting multiple items with select all functionality and permission group support.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenericCheckboxGroup>;

// Sample data
const sampleHolidays: SelectableItem[] = [
  { id: 1, code: "NY", name: "New Year's Day", permissionGroupId: "national" },
  { id: 2, code: "CNY", name: "Chinese New Year", permissionGroupId: "national" },
  { id: 3, code: "EDL", name: "Eid al-Fitr", permissionGroupId: "religious" },
  { id: 4, code: "IND", name: "Independence Day", permissionGroupId: "national" },
  { id: 5, code: "CHR", name: "Christmas Day", permissionGroupId: "religious" },
  { id: 6, code: "LAB", name: "Labor Day", permissionGroupId: "national" },
];

const samplePermissions: SelectableItem[] = [
  { id: 100, code: "USER_READ", name: "View Users", permissionGroupId: "user-management" },
  { id: 101, code: "USER_WRITE", name: "Edit Users", permissionGroupId: "user-management" },
  { id: 200, code: "REPORT_READ", name: "View Reports", permissionGroupId: "reporting" },
  { id: 201, code: "REPORT_WRITE", name: "Generate Reports", permissionGroupId: "reporting" },
  { id: 300, code: "SYSTEM_READ", name: "View System Settings", permissionGroupId: "system" },
  { id: 301, code: "SYSTEM_WRITE", name: "Edit System Settings", permissionGroupId: "system" },
];

export const Default: Story = {
  render: (args: any) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">CheckboxGroup Default</h3>
          <div className="max-w-md">
            <GenericCheckboxGroup {...args} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    title: "Select Items",
  },
};

export const HolidaySelection: Story = {
  render: () => {
    const [selectedHolidays, setSelectedHolidays] = useState([]);

    const handleChange = (e: any) => {
      const { action, value } = e.target;

      switch (action) {
        case "addAll":
          // Convert all items to the expected format
          const allItems = value.map((item: any) => ({ itemId: item.id }));
          setSelectedHolidays(allItems);
          break;
        case "removeAll":
          setSelectedHolidays([]);
          break;
        case "add":
          // Add single item
          setSelectedHolidays(prev => [...prev, { itemId: value.itemId }]);
          break;
        case "sub":
          // Remove single item
          setSelectedHolidays(prev => prev.filter(item => item.itemId !== value.itemId));
          break;
        default:
          console.log("Unknown action:", action);
      }
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Holiday Selection</h3>
            <div className="max-w-md">
              <GenericCheckboxGroup
                data={sampleHolidays}
                name="holidays"
                value={selectedHolidays}
                valueName="itemId"
                title="Select All Holidays"
                OnFormChange={handleChange}
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Selected:</strong> {selectedHolidays.length} holidays
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const PermissionSelection: Story = {
  render: () => {
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const handleChange = (e: any) => {
      const { action, value } = e.target;

      switch (action) {
        case "addAll":
          const allItems = value.map((item: any) => ({ id: item.id }));
          setSelectedPermissions(allItems);
          break;
        case "removeAll":
          setSelectedPermissions([]);
          break;
        case "add":
          setSelectedPermissions(prev => [...prev, { id: value.id }]);
          break;
        case "sub":
          setSelectedPermissions(prev => prev.filter(item => item.id !== value.id));
          break;
        default:
          console.log("Unknown action:", action);
      }
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Permission Selection</h3>
            <div className="max-w-md">
              <GenericCheckboxGroup
                data={samplePermissions}
                name="permissions"
                value={selectedPermissions}
                valueName="id"
                title="Select All Permissions"
                OnFormChange={handleChange}
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Selected:</strong> {selectedPermissions.length} permissions<br/>
                <strong>Groups:</strong> User Management, Reporting, System
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const PreselectedItems: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState([
      { id: 1 },
      { id: 3 },
    ]);

    const handleChange = (e: any) => {
      const { action, value } = e.target;

      switch (action) {
        case "addAll":
          const allItems = value.map((item: any) => ({ id: item.id }));
          setSelectedItems(allItems);
          break;
        case "removeAll":
          setSelectedItems([]);
          break;
        case "add":
          setSelectedItems(prev => [...prev, { id: value.id }]);
          break;
        case "sub":
          setSelectedItems(prev => prev.filter(item => item.id !== value.id));
          break;
        default:
          console.log("Unknown action:", action);
      }
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Preselected Items</h3>
            <div className="max-w-md">
              <GenericCheckboxGroup
                name="preselected"
                value={selectedItems}
                valueName="id"
                title="Select All Items"
                OnFormChange={handleChange}
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Items 1 and 3 are preselected by default.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const CustomData: Story = {
  render: () => {
    const customCategories = [
      { id: "cat1", code: "TECH", name: "Technology", permissionGroupId: "product" },
      { id: "cat2", code: "FASH", name: "Fashion", permissionGroupId: "product" },
      { id: "cat3", code: "HOME", name: "Home & Garden", permissionGroupId: "product" },
      { id: "cat4", code: "BOOK", name: "Books", permissionGroupId: "media" },
      { id: "cat5", code: "MUSI", name: "Music", permissionGroupId: "media" },
      { id: "cat6", code: "GAME", name: "Games", permissionGroupId: "entertainment" },
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleChange = (e: any) => {
      const { action, value } = e.target;

      switch (action) {
        case "addAll":
          const allItems = value.map((item: any) => ({ id: item.id }));
          setSelectedCategories(allItems);
          break;
        case "removeAll":
          setSelectedCategories([]);
          break;
        case "add":
          setSelectedCategories(prev => [...prev, { id: value.id }]);
          break;
        case "sub":
          setSelectedCategories(prev => prev.filter(item => item.id !== value.id));
          break;
        default:
          console.log("Unknown action:", action);
      }
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product Categories</h3>
            <div className="max-w-md">
              <GenericCheckboxGroup
                data={customCategories}
                name="categories"
                value={selectedCategories}
                valueName="id"
                title="Select All Categories"
                OnFormChange={handleChange}
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Custom data example with product categories grouped by type.
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
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (e: any) => {
      const { action, value } = e.target;

      switch (action) {
        case "addAll":
          const allItems = value.map((item: any) => ({ id: item.id }));
          setSelectedItems(allItems);
          break;
        case "removeAll":
          setSelectedItems([]);
          break;
        case "add":
          setSelectedItems(prev => [...prev, { id: value.id }]);
          break;
        case "sub":
          setSelectedItems(prev => prev.filter(item => item.id !== value.id));
          break;
        default:
          console.log("Unknown action:", action);
      }
    };

    return (
      <ThemeProvider defaultTheme="dark">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dark Mode CheckboxGroup</h3>
            <div className="max-w-md">
              <GenericCheckboxGroup
                data={sampleHolidays}
                name="dark-holidays"
                value={selectedItems}
                valueName="id"
                title="Select All Holidays"
                OnFormChange={handleChange}
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                CheckboxGroup component in dark mode with proper theme adaptation.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};