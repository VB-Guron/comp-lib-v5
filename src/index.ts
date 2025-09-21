("use client");

// Layout components
export { ContentMargin } from "./components/layout/content-margin";

// Tailwind/CSS components
export { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
export { Button, buttonVariants } from "./components/ui/button";
export {
  Combobox as Dropdown,
  comboboxColorVariants,
} from "./components/ui/combobox";
export { GenericCheckboxGroup } from "./components/ui/checkboxgroup";
export {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "./components/ui/command";
export { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
export { Input } from "./components/ui/input";
export { Label } from "./components/ui/label";
export {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
export { Textarea } from "./components/ui/textarea";
export { Toggle, toggleColorVariants } from "./components/ui/toggle";
export { Search } from "./components/ui/search";
export { Table } from "./components/ui/table";
export {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "./components/ui/form";

// Upgraded form components
export { DropdownForm as FieldsetDropdownForm } from "./components/upgraded/dropdown-form";
export { UpgradedFieldsetFormInput as FieldsetFormInput } from "./components/upgraded/fieldset-form-input";
export { UpgradedFieldsetFormTextarea as FieldsetFormTextarea } from "./components/upgraded/fieldset-form-textarea";
export { ToggleForm as FieldsetToggleForm } from "./components/upgraded/toggle-form";
export { GenericCheckboxFormField as FieldsetCheckboxFormField } from "./components/upgraded/checkboxgroup-form";

// Navigation components
export {
  NavigationBar,
  NavAreaUpdated,
  SideNav,
  SubAcc,
} from "./components/ui/navigation-bar";

// Theme components
export { ThemeProvider } from "./components/theme-provider";
export { ModeToggle } from "./components/ui/mode-toggle";

// SCSS components (ui)
//export { Modal } from "./components/ui/modal";
//export { Dropdown, DropdownItem } from "./components/ui/dropdown";

// SCSS components (common)
export { default as Modal } from "./components/common/Modal/modal";
// Additional navigation exports and hooks
export * from "./components/ui/navigation-bar/index";

// Utilities
export { cn } from "./lib/utils";

// Types
export type {
  NavRoute,
  NavigationBarProps,
  CompanyLogo,
  User,
} from "./components/ui/navigation-bar/types";

// Sample Data for Navigation
export {
  sampleLogo,
  sampleUser,
  sampleAdminUser,
  sampleEmployeeUser,
  sampleAdminRoutes,
  sampleEmployeeRoutes,
  sampleAdminPermissions,
  sampleEmployeePermissions,
} from "./components/ui/navigation-bar/sample-data";

// Images and Assets Configuration
export { images, payplusAssets, navigationIcons } from "./config/images";
