import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { HTMLAttributes, InputHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { Slot } from '@radix-ui/react-slot';
import { ThemeProvider as ThemeProvider$1 } from 'next-themes';
import { ClassValue } from 'clsx';

interface ContentMarginProps extends React__default.HTMLAttributes<HTMLDivElement> {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
}
/**
 * ContentMargin provides horizontal margins and max-width using the .content-margin SCSS class.
 * It adapts responsively based on your SCSS/media queries.
 *
 * Usage:
 * <ContentMargin><YourContent /></ContentMargin>
 */
declare function ContentMargin({ children, as, className, ...props }: ContentMarginProps): react_jsx_runtime.JSX.Element;

declare const FieldFlexRow: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const FieldFlexRowWrap: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const FlexiRowMatrix: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const FlexiRowMatrixLeftAlign: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const FlexRow: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare function Avatar({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Image>): react_jsx_runtime.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Fallback>): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "yellow" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "noPadding" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

type ComboboxOption = {
    value: string;
    label: string;
};
declare const comboboxColorVariants: {
    default: {
        fieldset: string;
        legend: string;
    };
    primary: {
        fieldset: string;
        legend: string;
    };
    secondary: {
        fieldset: string;
        legend: string;
    };
    success: {
        fieldset: string;
        legend: string;
    };
    danger: {
        fieldset: string;
        legend: string;
    };
};
interface ComboboxProps {
    options?: ComboboxOption[];
    value: string;
    onChange: (value: string) => void;
    searchUrl?: string;
    placeholder?: string;
    label?: string;
    variant?: "fieldset";
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
    dropdownProps?: React$1.HTMLAttributes<HTMLDivElement>;
    inputProps?: React$1.InputHTMLAttributes<HTMLInputElement>;
}
declare const Combobox: React$1.FC<ComboboxProps>;

interface SelectableItem {
    id: string | number;
    code: string;
    name: string;
    permissionGroupId?: string;
}
interface GenericCheckboxGroupProps<T extends SelectableItem> {
    data?: T[];
    OnFormChange?: (e: any) => void;
    name?: string;
    value?: any[];
    valueName?: string;
    title?: string;
}
declare const GenericCheckboxGroup: <T extends SelectableItem>({ data, name, value, valueName, title, OnFormChange, }: GenericCheckboxGroupProps<T>) => react_jsx_runtime.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Command({ className, ...props }: React$1.ComponentProps<typeof Command$1>): react_jsx_runtime.JSX.Element;
declare function CommandList({ className, ...props }: React$1.ComponentProps<typeof Command$1.List>): react_jsx_runtime.JSX.Element;
declare function CommandGroup({ className, ...props }: React$1.ComponentProps<typeof Command$1.Group>): react_jsx_runtime.JSX.Element;
declare function CommandItem({ className, ...props }: React$1.ComponentProps<typeof Command$1.Item>): react_jsx_runtime.JSX.Element;

declare const inputVariants: (props?: ({
    variant?: "fieldset" | "default" | "ghost" | "password" | "underline" | "filled" | null | undefined;
    inputSize?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    /** For fieldset variant: format value as number with 2 decimals */
    formatNumber?: boolean;
    /** For fieldset variant: legend/label text */
    legend?: string;
    /** Fieldset color variant: default, primary, secondary, success, danger */
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Popover({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function PopoverTrigger({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const textareaVariants: (props?: ({
    variant?: "fieldset" | "default" | "ghost" | "underline" | "filled" | null | undefined;
    textareaSize?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface TextareaProps extends Omit<React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, VariantProps<typeof textareaVariants> {
    legend?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

type ToggleChangedProps = {
    target: {
        value: boolean;
        name: string;
    };
};
type ToggleProps = {
    onChange?: (checked: ToggleChangedProps) => void;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    checkedValue?: string;
    notCheckedValue?: string;
    legend?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
};
declare const toggleColorVariants: {
    default: {
        fieldset: string;
        legend: string;
    };
    primary: {
        fieldset: string;
        legend: string;
    };
    secondary: {
        fieldset: string;
        legend: string;
    };
    success: {
        fieldset: string;
        legend: string;
    };
    danger: {
        fieldset: string;
        legend: string;
    };
};
declare const Toggle: (props: ToggleProps) => react_jsx_runtime.JSX.Element;

interface SearchOption {
    value: string;
    label: string;
}
interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    inputProps?: React$1.InputHTMLAttributes<HTMLInputElement>;
    className?: string;
    options?: SearchOption[];
    searchUrl?: string;
}
declare const Search: React$1.FC<SearchProps>;

declare function SkeletonShad({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare const uploadVariants: (props?: ({
    variant?: "fieldset" | "default" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const uploadButtonVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface AttachmentData {
    name: string;
    data: string;
    fileType: string;
}
interface UploadProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size" | "onError">, VariantProps<typeof uploadVariants> {
    onChoose?: (name: string, data: string, fileExtension: string) => void;
    onFileRemove?: () => void;
    onOpen?: (fileName: string, data: string, fileType: string) => void;
    attachment?: AttachmentData | null;
    allowAllFileTypes?: boolean;
    buttonText?: string;
    legend?: string;
    maxSizeInMB?: number;
    onError?: (error: string) => void;
    showAttachmentLabel?: boolean;
}
interface UploadButtonProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size" | "onError">, VariantProps<typeof uploadButtonVariants> {
    onAdd?: (name: string, data: string, fileExtension: string) => void;
    allowAllFileTypes?: boolean;
    buttonText?: string;
    maxSizeInMB?: number;
    onError?: (error: string) => void;
}
declare const UploadButton: React$1.ForwardRefExoticComponent<UploadButtonProps & React$1.RefAttributes<HTMLInputElement>>;
declare const Upload: React$1.ForwardRefExoticComponent<UploadProps & React$1.RefAttributes<HTMLInputElement>>;

interface TableProps<T> {
    headers: string[];
    data: T[];
    bindings?: (keyof T | ((item: T) => React__default.ReactNode))[];
    totalItems?: number;
    itemsPerPage?: number;
    currentPage?: number;
    searchQuery?: string;
    onPageChange?: (page: number, search: string) => void;
    onRowClick?: (item: T) => void;
    actionComponents?: (item: T) => React__default.ReactNode;
    emptyMessage?: string;
    loading?: boolean;
    resetToFirstPage?: boolean;
    onResetComplete?: () => void;
}
declare function Table<T extends Record<string, any>>({ headers, data, bindings, totalItems, itemsPerPage, currentPage, searchQuery, onPageChange, onRowClick, actionComponents, emptyMessage, loading, resetToFirstPage, onResetComplete, }: TableProps<T>): react_jsx_runtime.JSX.Element;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare function FormItem({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function FormControl({ ...props }: React$1.ComponentProps<typeof Slot>): react_jsx_runtime.JSX.Element;
declare function FormMessage({ className, ...props }: React$1.ComponentProps<"p">): react_jsx_runtime.JSX.Element | null;

interface DropdownFormProps extends Omit<ComboboxProps, "value" | "onChange"> {
    name: string;
    label?: string;
    description?: React$1.ReactNode;
}
/**
 * DropdownForm: Combobox integrated with react-hook-form and form fieldset components.
 * Handles value and onChange via react-hook-form Controller.
 */
declare const DropdownForm: React$1.FC<DropdownFormProps>;

interface UpgradedFieldsetFormInputProps extends Omit<InputProps, "name" | "variant"> {
    name: string;
    legend?: string;
    placeholder?: string;
    type?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare function UpgradedFieldsetFormInput({ name, legend, placeholder, type, fieldsetColorVariant, ...props }: UpgradedFieldsetFormInputProps): react_jsx_runtime.JSX.Element;

interface UpgradedFieldsetFormTextareaProps extends Omit<TextareaProps, "name" | "variant"> {
    name: string;
    legend?: string;
    placeholder?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare function UpgradedFieldsetFormTextarea({ name, legend, placeholder, fieldsetColorVariant, ...props }: UpgradedFieldsetFormTextareaProps): react_jsx_runtime.JSX.Element;

interface ToggleFormProps extends Omit<ToggleProps, "name" | "checked" | "onChange"> {
    name: string;
    legend?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare function ToggleForm({ name, legend, fieldsetColorVariant, checkedValue, notCheckedValue, ...props }: ToggleFormProps): react_jsx_runtime.JSX.Element;

interface GenericCheckboxFormFieldProps<T extends SelectableItem> {
    data?: T[];
    name: string;
    valueName?: string;
    title?: string;
    className?: string;
}
declare const GenericCheckboxFormField: <T extends SelectableItem>({ data, name, valueName, title, className, }: GenericCheckboxFormFieldProps<T>) => react_jsx_runtime.JSX.Element;

interface UploadFormProps extends Omit<UploadProps, "name" | "onChoose" | "onFileRemove" | "attachment" | "value"> {
    name: string;
    legend?: string;
    buttonText?: string;
    allowAllFileTypes?: boolean;
    maxSizeInMB?: number;
    onOpen?: (fileName: string, data: string, fileType: string) => void;
    showAttachmentLabel?: boolean;
}
declare function UploadForm({ name, legend, buttonText, allowAllFileTypes, maxSizeInMB, onOpen, showAttachmentLabel, variant, ...props }: UploadFormProps): react_jsx_runtime.JSX.Element;

interface NavRoute {
    label: string;
    image?: string;
    to?: string;
    permissionId?: number;
    subnav?: NavRoute[];
}
interface CompanyLogo {
    src: string;
    darkMode?: string;
    alt: string;
}
interface User {
    data: {
        isAdmin: boolean;
        name?: string;
        email?: string;
    };
}
interface NavigationBarProps {
    routes: NavRoute[];
    permissions?: number[];
    isAdmin?: boolean;
    logo?: CompanyLogo;
    user: User;
    className?: string;
}
interface NavAreaProps {
    routes: NavRoute[];
    permissions: number[];
}
interface SideNavProps {
    routes: NavRoute[];
    permissions?: number[];
}
interface SubAccProps {
    isAdmin?: boolean;
    onSignOut?: () => void;
    onChangePassword?: () => void;
    onResetPassword?: () => void;
}

declare const NavigationBar: (props: NavigationBarProps) => react_jsx_runtime.JSX.Element;

declare const NavAreaUpdated: (props: NavAreaProps) => react_jsx_runtime.JSX.Element;

declare const SideNav: (props: SideNavProps) => react_jsx_runtime.JSX.Element;

declare const SubAcc: (props: SubAccProps) => react_jsx_runtime.JSX.Element;

interface UseOutsideClickProps {
    ref: React.RefObject<HTMLElement>;
    onClickedOutside: () => void;
}
declare const useOutsideComponentClicker: ({ ref, onClickedOutside }: UseOutsideClickProps) => void;

declare function ThemeProvider({ children, ...props }: React$1.ComponentProps<typeof ThemeProvider$1>): react_jsx_runtime.JSX.Element;

declare function ModeToggle(): react_jsx_runtime.JSX.Element;

type ModalSize$1 = "small" | "medium" | "medium2" | "large" | "xlarge";
interface ModalProps$1 extends HTMLAttributes<HTMLDialogElement> {
    header?: string;
    show?: boolean;
    children?: React.ReactNode;
    size?: ModalSize$1;
}
declare const Modal: ({ header, children, show, size, ...rest }: ModalProps$1) => react_jsx_runtime.JSX.Element;

declare const LoadingOverlay: React__default.ForwardRefExoticComponent<Omit<any, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const LoadingOverlayContext: React__default.Context<(s: boolean) => void>;
declare const LoadingOverlayProvider: ({ children, }: {
    children: React__default.ReactNode;
}) => react_jsx_runtime.JSX.Element;

interface MatrixInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
}
declare const MatrixInput: (props: MatrixInputProps) => react_jsx_runtime.JSX.Element;

type NotificationStatus = "error" | "success" | "default";
type NotificationToastProps = {
    status: NotificationStatus;
    header: string;
    details: string;
    show?: boolean;
    icon?: React__default.ReactNode;
    customIconSrc?: string;
};
declare const NotificationToast: ({ show, header, details, status, icon, customIconSrc, }: NotificationToastProps) => react_jsx_runtime.JSX.Element;
declare const NotificationToastContext: React__default.Context<(props: NotificationToastProps) => void>;
declare const NotificationToastProvider: ({ children, }: {
    children: React__default.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const defaultErrorNotificationPayload: NotificationToastProps;

declare const ModalDivider: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
declare const LeftSideUpPart: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
interface RightSideDownPartProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    header: string;
}
declare const RightSideDownPart: (props: RightSideDownPartProps) => react_jsx_runtime.JSX.Element;
declare const Divider: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

type ModalSize = "small" | "medium" | "medium2" | "large" | "xlarge";
interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
    header?: string;
    show?: boolean;
    children?: React.ReactNode;
    size?: ModalSize;
}
declare const ModalWithOutline: ({ header, children, show, size, ...rest }: ModalProps) => react_jsx_runtime.JSX.Element;

declare const skeletonSizes: {
    readonly small: "25%";
    readonly medium: "50%";
    readonly wide: "100%";
};

interface SkeletonSpanProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    size?: typeof skeletonSizes.small | typeof skeletonSizes.medium | typeof skeletonSizes.wide;
}
declare const SkeletonSpan: (props: SkeletonSpanProps) => react_jsx_runtime.JSX.Element;

declare const SideFilterStationary: (props: any) => react_jsx_runtime.JSX.Element;

interface StepsMakerProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data?: string[];
    handleStepChange?: () => void;
    stepValue?: number;
}
declare const StepsMaker: (props: StepsMakerProps) => react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

declare const sampleLogo: CompanyLogo;
declare const sampleAdminUser: User;
declare const sampleEmployeeUser: User;
declare const sampleUser: User;
declare const sampleAdminRoutes: NavRoute[];
declare const sampleEmployeeRoutes: NavRoute[];
declare const sampleAdminPermissions: number[];
declare const sampleEmployeePermissions: number[];

declare const images: {
    logo: string;
    logoDarkMode: string;
    loginBackground: string;
    notFoundBackground: string;
    unauthorizedBackground: string;
    notif_default: string;
    notif_error: string;
    notif_success: string;
    home: string;
    file: string;
    payroll: string;
    timekeeping: string;
    assets: string;
    system: string;
    birthday: string;
};
declare const payplusAssets: {
    logo: {
        src: string;
        darkMode: string;
        alt: string;
    };
};
declare const navigationIcons: {
    home: string;
    file: string;
    payroll: string;
    timekeeping: string;
    assets: string;
    system: string;
    birthday: string;
};

export { type AttachmentData, Avatar, AvatarFallback, AvatarImage, Button, Command, CommandGroup, CommandItem, CommandList, type CompanyLogo, ContentMargin, Dialog, DialogContent, DialogTrigger, Divider, Combobox as Dropdown, GenericCheckboxFormField as FieldsetCheckboxFormField, DropdownForm as FieldsetDropdownForm, UpgradedFieldsetFormInput as FieldsetFormInput, UpgradedFieldsetFormTextarea as FieldsetFormTextarea, ToggleForm as FieldsetToggleForm, FieldFlexRow as FlexFieldRow, FieldFlexRowWrap as FlexFieldRowWrap, FlexRow, FlexiRowMatrix, FlexiRowMatrixLeftAlign, Form, FormControl, FormField, FormItem, FormMessage, GenericCheckboxGroup, Input, Label, LeftSideUpPart, LoadingOverlay, LoadingOverlayContext, LoadingOverlayProvider, MatrixInput, Modal, ModalDivider, ModalWithOutline, ModeToggle, type NavAreaProps, NavAreaUpdated, type NavRoute, NavigationBar, type NavigationBarProps, type NotificationStatus, NotificationToast, NotificationToastContext, type NotificationToastProps, NotificationToastProvider, Popover, PopoverContent, PopoverTrigger, RightSideDownPart, Search, SideFilterStationary, SideNav, type SideNavProps, SkeletonShad, SkeletonSpan, StepsMaker, SubAcc, type SubAccProps, Table, Textarea, ThemeProvider, Toggle, Upload, UploadButton, type UploadButtonProps, UploadForm, type UploadProps, type User, buttonVariants, cn, comboboxColorVariants, defaultErrorNotificationPayload, images, navigationIcons, payplusAssets, sampleAdminPermissions, sampleAdminRoutes, sampleAdminUser, sampleEmployeePermissions, sampleEmployeeRoutes, sampleEmployeeUser, sampleLogo, sampleUser, toggleColorVariants, uploadButtonVariants, uploadVariants, useOutsideComponentClicker };
