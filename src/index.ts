"use client";
// Tailwind/CSS components
export { Button, buttonVariants } from "./components/ui/button";
export { Combobox, comboboxColorVariants } from "./components/ui/combobox";
export { GenericCheckboxGroup } from "./components/ui/checkboxgroup";
export { Command, CommandGroup, CommandItem, CommandList } from "./components/ui/command";
export { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
export { Input } from "./components/ui/input";
export { Label } from "./components/ui/label";
export { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
export { Textarea } from "./components/ui/textarea";
export { Toggle, toggleColorVariants } from "./components/ui/toggle";

export {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "./components/ui/form";

// Upgraded form components
export { DropdownForm } from "./components/upgraded/dropdown-form";
export { UpgradedFieldsetFormInput } from "./components/upgraded/fieldset-form-input";
export { UpgradedFieldsetFormTextarea } from "./components/upgraded/fieldset-form-textarea";
export { ToggleForm } from "./components/upgraded/toggle-form";
export { GenericCheckboxFormField } from "./components/upgraded/checkboxgroup-form";


// Navigation components
export { NavigationBar, NavAreaUpdated, SideNav, SubAcc } from "./components/ui/navigation-bar";

// Theme components
export { ThemeProvider } from "./components/theme-provider";
export { ModeToggle } from "./components/ui/mode-toggle";

// SCSS components (ui)
//export { Modal } from "./components/ui/modal";
//export { Dropdown, DropdownItem } from "./components/ui/dropdown";

// SCSS components (common)
export { default as Modal } from "./components/common/Modal/modal";


// Utilities
export { cn } from "./lib/utils";

// Types
export type { NavRoute, NavigationBarProps, CompanyLogo, User } from "./components/ui/navigation-bar/types";

// Sample Data for Navigation
export {
  sampleLogo,
  sampleUser,
  sampleAdminUser,
  sampleEmployeeUser,
  sampleAdminRoutes,
  sampleEmployeeRoutes,
  sampleAdminPermissions,
  sampleEmployeePermissions
} from "./components/ui/navigation-bar/sample-data";

// Assets
export {
  payplusAssets,
  payplusLogo,
  payplusLogoDark,
  navigationIcons,
  homeIcon,
  fileIcon,
  payrollIcon,
  timekeepingIcon,
  assetsIcon,
  systemIcon,
  birthdayIcon
} from "./assets";
