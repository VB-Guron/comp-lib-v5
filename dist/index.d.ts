import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "noPadding" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

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

export { Button, Dropdown, DropdownItem, Modal, Navbar, NavbarAvatar, type NavbarAvatarProps, type NavbarLink, type NavbarProps, buttonVariants, cn };
