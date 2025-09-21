import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "../components/ui/navigation-bar";
import {
  sampleLogo,
  sampleAdminUser,
  sampleEmployeeUser,
  sampleAdminRoutes,
  sampleEmployeeRoutes,
  sampleAdminPermissions,
  sampleEmployeePermissions,
} from "../components/ui/navigation-bar/sample-data";

// Dummy functions for Storybook interactions
const dummyActions = {
  onSignOut: () => alert("Sign out clicked!"),
  onChangePassword: () => alert("Change password clicked!"),
  onResetPassword: () => alert("Reset password clicked!"),
};

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive navigation bar component with PayPlus styling, featuring multi-level dropdown menus, mobile responsive design, and user account management. Features default PayPlus logos and requires user data as props for component library use.",
      },
    },
  },
  argTypes: {
    routes: {
      description: "Navigation routes with optional nested submenus",
      control: "object",
    },
    permissions: {
      description: "Array of permission IDs for the current user",
      control: "object",
    },
    isAdmin: {
      description: "Whether the current user is an admin",
      control: "boolean",
    },
    logo: {
      description:
        "Company logo configuration with light and dark mode variants",
      control: "object",
    },
    user: {
      description: "Current user data",
      control: "object",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

// Admin Navigation Story
export const AdminNavigation: Story = {
  args: {
    routes: sampleAdminRoutes,
    permissions: sampleAdminPermissions,
    isAdmin: true,
    user: sampleAdminUser,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Admin navigation with full access to all system features and comprehensive nested menus. Uses default PayPlus logos.",
      },
    },
  },
};

// Employee Navigation Story
export const EmployeeNavigation: Story = {
  args: {
    routes: sampleEmployeeRoutes,
    permissions: sampleEmployeePermissions,
    isAdmin: false,
    user: sampleEmployeeUser,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Employee navigation with limited access focused on personal records and applications. Uses default PayPlus logos.",
      },
    },
  },
};

// Simple Navigation Story
export const SimpleNavigation: Story = {
  args: {
    routes: [
      {
        label: "Dashboard",
        image: "https://via.placeholder.com/16x16/666666/ffffff?text=📊",
        to: "/dashboard",
      },
      {
        label: "Users",
        image: "https://via.placeholder.com/16x16/666666/ffffff?text=👥",
        to: "/users",
      },
      {
        label: "Settings",
        image: "https://via.placeholder.com/16x16/666666/ffffff?text=⚙️",
        subnav: [
          {
            label: "Profile",
            to: "/settings/profile",
          },
          {
            label: "Security",
            to: "/settings/security",
          },
        ],
      },
    ],
    permissions: [100, 200, 300],
    isAdmin: true,
    user: sampleAdminUser,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Simple navigation with basic menu items and single-level dropdowns. Uses default PayPlus logos.",
      },
    },
  },
};

// Default PayPlus Logos Demo
export const DefaultPayPlusLogos: Story = {
  args: {
    routes: sampleAdminRoutes,
    permissions: sampleAdminPermissions,
    isAdmin: true,
    user: sampleAdminUser,
    // No logo prop - will use default PayPlus logos
  },
  parameters: {
    docs: {
      description: {
        story:
          "Navigation demonstrating the default PayPlus logos that are used when no logo prop is provided.",
      },
    },
  },
};

// Custom Logo Demo
export const CustomLogo: Story = {
  args: {
    routes: sampleEmployeeRoutes,
    permissions: sampleEmployeePermissions,
    isAdmin: false,
    user: sampleEmployeeUser,
    logo: sampleLogo, // Custom placeholder logo
  },
  parameters: {
    docs: {
      description: {
        story:
          "Navigation with a custom logo overriding the default PayPlus logos.",
      },
    },
  },
};

// Mobile Responsive Demo
export const MobileResponsive: Story = {
  args: {
    routes: sampleAdminRoutes,
    permissions: sampleAdminPermissions,
    isAdmin: true,
    user: sampleAdminUser,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Navigation in mobile view - demonstrates the hamburger menu and side navigation functionality. Uses default PayPlus logos.",
      },
    },
  },
};
