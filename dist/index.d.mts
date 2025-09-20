import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React$1 from 'react';
import { HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { Slot } from '@radix-ui/react-slot';
import { ThemeProvider as ThemeProvider$1 } from 'next-themes';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "noPadding" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare function FormItem({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function FormControl({ ...props }: React$1.ComponentProps<typeof Slot>): react_jsx_runtime.JSX.Element;
declare function FormMessage({ className, ...props }: React$1.ComponentProps<"p">): react_jsx_runtime.JSX.Element | null;

declare const inputVariants: (props?: ({
    variant?: "default" | "ghost" | "fieldset" | "filled" | "underline" | null | undefined;
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

declare function ThemeProvider({ children, ...props }: React$1.ComponentProps<typeof ThemeProvider$1>): react_jsx_runtime.JSX.Element;

declare function ModeToggle(): react_jsx_runtime.JSX.Element;

type ModalSize = "small" | "medium" | "medium2" | "large" | "xlarge";
interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
    header?: string;
    show?: boolean;
    children?: React.ReactNode;
    size?: ModalSize;
}
declare const Modal: ({ header, children, show, size, ...rest }: ModalProps) => react_jsx_runtime.JSX.Element;

type ComboboxOption = {
    value: string;
    label: string;
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

declare const textareaVariants: (props?: ({
    variant?: "default" | "ghost" | "fieldset" | "filled" | "underline" | null | undefined;
    textareaSize?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface TextareaProps extends Omit<React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, VariantProps<typeof textareaVariants> {
    legend?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}

interface UpgradedFieldsetFormTextareaProps extends Omit<TextareaProps, "name" | "variant"> {
    name: string;
    legend?: string;
    placeholder?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare function UpgradedFieldsetFormTextarea({ name, legend, placeholder, fieldsetColorVariant, ...props }: UpgradedFieldsetFormTextareaProps): react_jsx_runtime.JSX.Element;

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

interface ToggleFormProps extends Omit<ToggleProps, "name" | "checked" | "onChange"> {
    name: string;
    legend?: string;
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare function ToggleForm({ name, legend, fieldsetColorVariant, checkedValue, notCheckedValue, ...props }: ToggleFormProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Button, DropdownForm, Form, FormControl, FormField, FormItem, FormMessage, Input, Modal, ModeToggle, ThemeProvider, ToggleForm, UpgradedFieldsetFormInput, UpgradedFieldsetFormTextarea, buttonVariants, cn };
