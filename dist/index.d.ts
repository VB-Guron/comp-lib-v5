import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
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
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare function FormItem({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function FormControl({ ...props }: React.ComponentProps<typeof Slot>): react_jsx_runtime.JSX.Element;
declare function FormMessage({ className, ...props }: React.ComponentProps<"p">): react_jsx_runtime.JSX.Element | null;

declare const inputVariants: (props?: ({
    variant?: "default" | "ghost" | "fieldset" | "filled" | "underline" | null | undefined;
    inputSize?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    /** For fieldset variant: format value as number with 2 decimals */
    formatNumber?: boolean;
    /** For fieldset variant: legend/label text */
    legend?: string;
    /** Fieldset color variant: default, primary, secondary, success, danger */
    fieldsetColorVariant?: "default" | "primary" | "secondary" | "success" | "danger";
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare function ThemeProvider({ children, ...props }: React.ComponentProps<typeof ThemeProvider$1>): react_jsx_runtime.JSX.Element;

declare function ModeToggle(): react_jsx_runtime.JSX.Element;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownItem: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    onClick?: () => void;
} & React.RefAttributes<HTMLDivElement>>;

interface NavbarLink {
    href: string;
    label: string;
    active?: boolean;
}
interface NavbarProps {
    brand?: {
        name: string;
        href?: string;
        logo?: string;
    };
    links?: NavbarLink[];
    actions?: React.ReactNode;
    transparent?: boolean;
    className?: string;
    onLinkClick?: (href: string) => void;
}
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
interface NavbarAvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
    onClick?: () => void;
    className?: string;
}
declare const NavbarAvatar: React.ForwardRefExoticComponent<NavbarAvatarProps & React.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Button, Dropdown, DropdownItem, Form, FormControl, FormField, FormItem, FormMessage, Input, Modal, ModeToggle, Navbar, NavbarAvatar, type NavbarAvatarProps, type NavbarLink, type NavbarProps, ThemeProvider, buttonVariants, cn };
