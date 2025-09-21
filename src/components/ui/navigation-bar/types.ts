export interface NavRoute {
  label: string;
  image?: string;
  to?: string;
  permissionId?: number;
  subnav?: NavRoute[];
}

export interface CompanyLogo {
  src: string;
  darkMode?: string;
  alt: string;
}

export interface User {
  data: {
    isAdmin: boolean;
    name?: string;
    email?: string;
  };
}

export interface NavigationBarProps {
  routes: NavRoute[];
  permissions?: number[];
  isAdmin?: boolean;
  logo?: CompanyLogo;
  user: User;
  className?: string;
}

export interface NavAreaProps {
  routes: NavRoute[];
  permissions: number[];
}

export interface SideNavProps {
  routes: NavRoute[];
  permissions?: number[];
}

export interface SubAccProps {
  isAdmin?: boolean;
  onSignOut?: () => void;
  onChangePassword?: () => void;
  onResetPassword?: () => void;
}