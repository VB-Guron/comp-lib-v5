"use client";

import { useCallback, useState } from "react";
import { cn } from "../../lib/utils";

// Generic type for any selectable item
export interface SelectableItem {
  id: string | number;
  code: string;
  name: string;
  permissionGroupId?: string;
}

// Generic component props - all optional with defaults
export interface GenericCheckboxGroupProps<T extends SelectableItem> {
  data?: T[];
  OnFormChange?: (e: any) => void;
  name?: string;
  value?: any[];
  valueName?: string;
  title?: string; // Generic title for the select all button
}

// Default mock data - can represent anything (holidays, permissions, categories, etc.)
const DEFAULT_ITEMS: SelectableItem[] = [
  { id: 1, code: "ITEM1", name: "First Item", permissionGroupId: "group-a" },
  { id: 2, code: "ITEM2", name: "Second Item", permissionGroupId: "group-a" },
  { id: 3, code: "ITEM3", name: "Third Item", permissionGroupId: "group-b" },
  { id: 4, code: "ITEM4", name: "Fourth Item", permissionGroupId: "group-b" },
  { id: 5, code: "ITEM5", name: "Fifth Item", permissionGroupId: "group-c" },
  { id: 6, code: "ITEM6", name: "Sixth Item", permissionGroupId: "group-c" },
  { id: 7, code: "ITEM7", name: "Seventh Item", permissionGroupId: "group-d" },
  { id: 8, code: "ITEM8", name: "Eighth Item", permissionGroupId: "group-d" },
];

// Generic checkbox group component
export const GenericCheckboxGroup = <T extends SelectableItem>({
  data = DEFAULT_ITEMS as T[],
  name = "items",
  value = [],
  valueName = "itemId",
  title = "Select All",
  OnFormChange = (e) => console.log("Form change:", e),
}: GenericCheckboxGroupProps<T>) => {
  // Track selected items using Set for better performance
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(value.map((item: any) => item[valueName]?.toString()))
  );

  // Check if all items are selected
  const isAllSelected = selectedItems.size === data.length && data.length > 0;
  // Check if some (but not all) items are selected
  const isIndeterminate =
    selectedItems.size > 0 && selectedItems.size < data.length;

  // Handle select all / deselect all functionality
  const handleSelectAll = useCallback(() => {
    if (isAllSelected) {
      // Clear all selections
      setSelectedItems(new Set());
      OnFormChange({ target: { name, value: data, action: "removeAll" } });
    } else {
      // Select all items
      const allIds = new Set(data.map((item) => item.id.toString()));
      setSelectedItems(allIds);
      OnFormChange({ target: { name, value: data, action: "addAll" } });
    }
  }, [isAllSelected, data, name, OnFormChange]);

  // Handle individual item selection toggle
  const handleItemToggle = useCallback(
    (item: T, isSelected: boolean) => {
      const itemId = item.id.toString();
      const newSelectedItems = new Set(selectedItems);

      if (isSelected) {
        // Remove item from selection
        newSelectedItems.delete(itemId);
        OnFormChange({
          target: {
            name,
            value: {
              [valueName]: item.id,
              permissionGroupId: item.permissionGroupId,
            },
            action: "sub",
          },
        });
      } else {
        // Add item to selection
        newSelectedItems.add(itemId);
        OnFormChange({
          target: {
            name,
            value: {
              [valueName]: item.id,
              permissionGroupId: item.permissionGroupId,
            },
            action: "add",
          },
        });
      }

      setSelectedItems(newSelectedItems);
    },
    [selectedItems, name, valueName, OnFormChange]
  );

  return (
    // Main container - responsive layout: column on mobile, row on xl screens
    <div className="flex flex-col gap-4 xl:flex-row">
      {/* Left side - Select All button */}
      <div className="flex flex-col gap-2">
        <SelectAllCheckbox
          isChecked={isAllSelected}
          isIndeterminate={isIndeterminate}
          onToggle={handleSelectAll}
          label={title}
        />
      </div>

      {/* Right side - Individual items with divider border */}
      <div className="xl:border-l-3 border-t-3 border-primary pt-5 xl:border-t-0 xl:border-primary xl:pl-5 xl:pt-0">
        {/* Items container - max width 560px, max height 270px with scroll */}
        <div className="flex max-h-[270px] max-w-[560px] flex-wrap gap-2 overflow-y-auto p-2">
          {data.map((item) => (
            <CheckboxItem
              key={item.id}
              item={item}
              isSelected={selectedItems.has(item.id.toString())}
              onToggle={handleItemToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Props for Select All checkbox component
interface SelectAllCheckboxProps {
  isChecked: boolean;
  isIndeterminate: boolean;
  onToggle: () => void;
  label: string;
}

const SelectAllCheckbox = ({
  isChecked,
  isIndeterminate,
  onToggle,
  label,
}: SelectAllCheckboxProps) => {
  return (
    // Select All button - 128px x 80px with top margin
    <div
      onClick={onToggle}
      className={cn(
        "mt-2 flex h-20 w-32 cursor-pointer flex-col items-center justify-center rounded border transition-colors",
        // Background and text colors based on selection state
        isChecked || isIndeterminate
          ? "border-primary bg-primary text-primary-foreground" // Selected: primary background
          : "hover:bg-primary/5 border-primary bg-background text-primary" // Unselected: light background with hover
      )}
    >
      {/* Text container */}
      <div className="px-2 text-center">
        {/* Label text - 14px font medium weight */}
        <span className="text-sm font-medium">{label}</span>
      </div>
      {/* Checkbox visual indicator */}
      <div className="relative mt-1">
        {/* Hidden actual checkbox for accessibility */}
        <input
          type="checkbox"
          checked={isChecked}
          ref={(el) => {
            if (el) el.indeterminate = isIndeterminate;
          }}
          onChange={() => {}} // Controlled by parent
          className="sr-only" // Screen reader only
        />
        {/* Custom checkbox visual - 12px square with 2px border */}
        <div
          className={cn(
            "flex h-3 w-3 items-center justify-center rounded border-2",
            isChecked || isIndeterminate
              ? "border-primary-foreground bg-primary" // Selected: primary background
              : "border-primary" // Unselected: primary border only
          )}
        >
          {/* Checkmark icon when fully selected */}
          {isChecked && (
            <svg
              className="h-2 w-2 text-primary-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {/* Dash icon when partially selected (indeterminate) */}
          {isIndeterminate && !isChecked && (
            <div className="h-0.5 w-1.5 rounded bg-primary-foreground" />
          )}
        </div>
      </div>
    </div>
  );
};

// Props for individual checkbox item
interface CheckboxItemProps<T extends SelectableItem> {
  item: T;
  isSelected: boolean;
  onToggle: (item: T, isSelected: boolean) => void;
}

const CheckboxItem = <T extends SelectableItem>({
  item,
  isSelected,
  onToggle,
}: CheckboxItemProps<T>) => {
  return (
    // Individual item box - 128px x 80px
    <div
      onClick={() => onToggle(item, isSelected)}
      className={cn(
        "flex h-20 w-32 cursor-pointer flex-col items-center justify-center rounded border transition-colors",
        // Background and text colors based on selection
        isSelected
          ? "border-primary bg-primary text-primary-foreground" // Selected: primary background
          : "hover:bg-primary/5 border-primary bg-background text-primary" // Unselected: light background with hover
      )}
    >
      {/* Text content area */}
      <div className="flex flex-1 flex-col justify-center px-2 text-center">
        {/* Item code - 14px font medium weight with bottom margin */}
        <span className="mb-1 text-sm font-medium leading-tight">
          {item.code}
        </span>
        {/* Item full name - 12px font normal weight */}
        <span className="text-xs leading-tight">{item.name}</span>
      </div>
      {/* Checkbox at bottom */}
      <div className="relative mb-1">
        {/* Hidden actual checkbox for accessibility */}
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {}} // Controlled by parent
          className="sr-only" // Screen reader only
        />
        {/* Custom checkbox visual - 12px square with 2px border */}
        <div
          className={cn(
            "flex h-3 w-3 items-center justify-center rounded border-2",
            isSelected
              ? "border-primary-foreground bg-primary" // Selected: primary background
              : "border-primary" // Unselected: primary border only
          )}
        >
          {/* Checkmark icon when selected */}
          {isSelected && (
            <svg
              className="h-2 w-2 text-primary-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

// Legacy holiday-specific wrapper for backward compatibility
export interface HolidayItem extends SelectableItem {}

export interface HandleCheckBoxTypes
  extends GenericCheckboxGroupProps<HolidayItem> {}

export const HandleCheckBoxHolidays = (props: HandleCheckBoxTypes) => {
  return (
    <GenericCheckboxGroup {...props} title={props.title || "Select All"} />
  );
};



// Demo component to showcase functionality
export const GenericCheckboxDemo = () => {
  // State to track selected items
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectedHolidays, setSelectedHolidays] = useState<any[]>([]);
  const [selectedPermissions, setSelectedPermissions] = useState<any[]>([]);

  // Handle form changes for generic items
  const handleGenericChange = (e: any) => {
    const { action, value } = e.target;
    console.log("Generic change:", e.target);

    setSelectedItems((prev) => {
      switch (action) {
        case "addAll": // Select all items
          return value.map((item: SelectableItem) => ({
            itemId: item.id,
            permissionGroupId: item.permissionGroupId,
          }));
        case "removeAll": // Clear all selections
          return [];
        case "add": // Add single item
          return [
            ...prev.filter((item) => item.itemId !== value.itemId),
            value,
          ];
        case "sub": // Remove single item
          return prev.filter((item) => item.itemId !== value.itemId);
        default:
          return prev;
      }
    });
  };

  // Handle form changes for holidays
  const handleHolidayChange = (e: any) => {
    const { action, value } = e.target;
    console.log("Holiday change:", e.target);

    setSelectedHolidays((prev) => {
      switch (action) {
        case "addAll":
          return value.map((item: SelectableItem) => ({
            holidayGroupId: item.id,
            permissionGroupId: item.permissionGroupId,
          }));
        case "removeAll":
          return [];
        case "add":
          return [
            ...prev.filter(
              (item) => item.holidayGroupId !== value.holidayGroupId
            ),
            value,
          ];
        case "sub":
          return prev.filter(
            (item) => item.holidayGroupId !== value.holidayGroupId
          );
        default:
          return prev;
      }
    });
  };

  // Handle form changes for permissions
  const handlePermissionChange = (e: any) => {
    const { action, value } = e.target;
    console.log("Permission change:", e.target);

    setSelectedPermissions((prev) => {
      switch (action) {
        case "addAll":
          return value.map((item: SelectableItem) => ({
            permissionId: item.id,
            permissionGroupId: item.permissionGroupId,
          }));
        case "removeAll":
          return [];
        case "add":
          return [
            ...prev.filter((item) => item.permissionId !== value.permissionId),
            value,
          ];
        case "sub":
          return prev.filter(
            (item) => item.permissionId !== value.permissionId
          );
        default:
          return prev;
      }
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      {/* Generic Items Example */}
      <div>
        <h2 className="mb-2 text-2xl font-bold">Generic Checkbox Group Demo</h2>
        <p className="mb-4 text-gray-600">
          Works with any data that has id, code, name, and permissionGroupId
        </p>

        <GenericCheckboxGroup
          value={selectedItems}
          OnFormChange={handleGenericChange}
          title="Select All Items"
          name="genericItems"
          valueName="itemId"
        />

        {/* Selected items display */}
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <h3 className="mb-2 font-semibold">
            Selected Items ({selectedItems.length}):
          </h3>
          {selectedItems.length === 0 ? (
            <p className="italic text-gray-500">No items selected</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedItems.map((item, index) => (
                <span
                  key={index}
                  className="bg-primary/10 rounded-full px-3 py-1 text-sm text-primary"
                >
                  ID: {item.itemId}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Holiday Example (backward compatibility) */}
      <div>
        <h2 className="mb-2 text-2xl font-bold">
          Holiday Example (Legacy Compatibility)
        </h2>
        <p className="mb-4 text-gray-600">
          Same component, different data and labels
        </p>

        <HandleCheckBoxHolidays
          data={[
            {
              id: 1,
              code: "NY",
              name: "New Year's Day",
              permissionGroupId: "federal",
            },
            {
              id: 2,
              code: "JULY4",
              name: "Independence Day",
              permissionGroupId: "federal",
            },
            {
              id: 3,
              code: "XMAS",
              name: "Christmas Day",
              permissionGroupId: "federal",
            },
            {
              id: 4,
              code: "EASTER",
              name: "Easter",
              permissionGroupId: "religious",
            },
          ]}
          value={selectedHolidays}
          OnFormChange={handleHolidayChange}
          title="Select Holidays"
          name="holidays"
          valueName="holidayGroupId"
        />

        {/* Selected holidays display */}
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <h3 className="mb-2 font-semibold">
            Selected Holidays ({selectedHolidays.length}):
          </h3>
          {selectedHolidays.length === 0 ? (
            <p className="italic text-gray-500">No holidays selected</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedHolidays.map((holiday, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  Holiday ID: {holiday.holidayGroupId}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Permissions Example */}
      <div>
        <h2 className="mb-2 text-2xl font-bold">User Permissions Example</h2>
        <p className="mb-4 text-gray-600">
          Using the same component for user permissions
        </p>

        <GenericCheckboxGroup
          data={[
            {
              id: 1,
              code: "READ",
              name: "Read Access",
              permissionGroupId: "basic",
            },
            {
              id: 2,
              code: "WRITE",
              name: "Write Access",
              permissionGroupId: "basic",
            },
            {
              id: 3,
              code: "ADMIN",
              name: "Admin Access",
              permissionGroupId: "advanced",
            },
            {
              id: 4,
              code: "DELETE",
              name: "Delete Access",
              permissionGroupId: "advanced",
            },
          ]}
          value={selectedPermissions}
          OnFormChange={handlePermissionChange}
          title="Select Permissions"
          name="permissions"
          valueName="permissionId"
        />

        {/* Selected permissions display */}
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <h3 className="mb-2 font-semibold">
            Selected Permissions ({selectedPermissions.length}):
          </h3>
          {selectedPermissions.length === 0 ? (
            <p className="italic text-gray-500">No permissions selected</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedPermissions.map((permission, index) => (
                <span
                  key={index}
                  className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                >
                  Permission ID: {permission.permissionId}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the generic component as default
//export default GenericCheckboxDemo;
export default GenericCheckboxGroup;
