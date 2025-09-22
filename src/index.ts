("use client");

// Layout components
export { ContentMargin } from "./components/layout/ContentMargin/content-margin";
export { default as FlexFieldRow } from "./components/layout/FlexFieldRow";
export { default as FlexFieldRowWrap } from "./components/layout/FlexFieldRowWrap";
export { default as FlexiRowMatrix } from "./components/layout/FlexiRowMatrix";
export { default as FlexiRowMatrixLeftAlign } from "./components/layout/FlexiRowMatrixLeftAlign";
export { default as FlexRow } from "./components/layout/FlexRow";

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
export { SkeletonShad } from "./components/ui/skeleton";
export {
  Upload,
  UploadButton,
  uploadVariants,
  uploadButtonVariants,
} from "./components/ui/upload/upload";
export type {
  UploadProps,
  UploadButtonProps,
  AttachmentData,
} from "./components/ui/upload/upload";
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
export { UploadForm } from "./components/upgraded/upload-form";

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
export {
  default as LoadingOverlay,
  LoadingOverlayProvider,
  LoadingOverlayContext,
} from "./components/common/LoadingOverlay/loadingoverlay";
export { default as MatrixInput } from "./components/common/MatrixInput";
export {
  default as NotificationToast,
  NotificationToastProvider,
  NotificationToastContext,
  defaultErrorNotificationPayload,
} from "./components/common/NotificationToast";
export type {
  NotificationToastProps,
  NotificationStatus,
} from "./components/common/NotificationToast";
export {
  ModalDivider,
  LeftSideUpPart,
  RightSideDownPart,
  Divider,
} from "./components/common/ModalDivider";
export { default as ModalWithOutline } from "./components/common/ModalWithOutline";
export { default as SkeletonSpan } from "./components/common/SkeletonSpan";
export { SideFilterStationary } from "./components/common/SideFilterStationary";
export { default as StepsMaker } from "./components/common/StepsMaker";
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
