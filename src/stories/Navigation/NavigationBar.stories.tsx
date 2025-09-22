import React from "react";
import NavigationBar from "../../components/ui/navigation-bar/navigation-bar";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof NavigationBar> = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A comprehensive navigation bar component with responsive design, permission-based routing, user account management, and dark mode support.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

// Sample data for stories
const sampleUser = {
  data: {
    isAdmin: true,
    name: "John Doe",
    email: "john.doe@example.com",
  },
};

const sampleRoutes = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Users", to: "/users", permissionId: 1 },
  { label: "Products", to: "/products" },
  {
    label: "Reports",
    to: "/reports",
    subnav: [
      { label: "Sales Report", to: "/reports/sales" },
      { label: "User Report", to: "/reports/users" },
      { label: "Analytics", to: "/reports/analytics" },
    ]
  },
  { label: "Settings", to: "/settings", permissionId: 2 },
];

const sampleLogo = {
  src: "/api/placeholder/120/40",
  darkMode: "/api/placeholder/120/40",
  alt: "Company Logo",
};

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background">
        <NavigationBar {...args} />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">NavigationBar Default</h3>
            <p className="text-muted-foreground">
              The navigation bar with basic configuration and sample routes.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    routes: sampleRoutes,
    user: sampleUser,
    logo: sampleLogo,
  },
};

export const WithPermissions: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background">
        <NavigationBar
          routes={sampleRoutes}
          user={sampleUser}
          logo={sampleLogo}
          permissions={[1]} // Only has permission 1 (Users), not 2 (Settings)
          isAdmin={false}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Permission-Based Navigation</h3>
            <p className="text-muted-foreground">
              Navigation filtered by user permissions. User has access to "Users" but not "Settings".
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>User Permissions:</strong> [1] - Can access "Users" section<br/>
                <strong>Missing Permission:</strong> [2] - Cannot access "Settings" section
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const AdminUser: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background">
        <NavigationBar
          routes={sampleRoutes}
          user={{
            data: {
              isAdmin: true,
              name: "Admin User",
              email: "admin@example.com",
            },
          }}
          logo={sampleLogo}
          permissions={[1, 2]}
          isAdmin={true}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Admin Navigation</h3>
            <p className="text-muted-foreground">
              Navigation for an admin user with full permissions and access to all routes.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>User Type:</strong> Administrator<br/>
                <strong>Permissions:</strong> Full access to all sections
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const RegularUser: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background">
        <NavigationBar
          routes={sampleRoutes}
          user={{
            data: {
              isAdmin: false,
              name: "Jane Smith",
              email: "jane.smith@example.com",
            },
          }}
          logo={sampleLogo}
          permissions={[]}
          isAdmin={false}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Regular User Navigation</h3>
            <p className="text-muted-foreground">
              Navigation for a regular user with limited permissions. Only shows accessible routes.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>User Type:</strong> Regular User<br/>
                <strong>Permissions:</strong> Limited access - no admin sections
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const WithSubNavigation: Story = {
  render: () => {
    const routesWithSubnav = [
      { label: "Home", to: "/" },
      {
        label: "Products",
        to: "/products",
        subnav: [
          { label: "All Products", to: "/products" },
          { label: "Categories", to: "/products/categories" },
          { label: "Inventory", to: "/products/inventory" },
          { label: "Pricing", to: "/products/pricing" },
        ]
      },
      {
        label: "Analytics",
        to: "/analytics",
        subnav: [
          { label: "Dashboard", to: "/analytics/dashboard" },
          { label: "Sales Report", to: "/analytics/sales" },
          { label: "User Behavior", to: "/analytics/users" },
          { label: "Performance", to: "/analytics/performance" },
        ]
      },
      { label: "Support", to: "/support" },
    ];

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background">
          <NavigationBar
            routes={routesWithSubnav}
            user={sampleUser}
            logo={sampleLogo}
          />
          <div className="p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Navigation with Submenus</h3>
              <p className="text-muted-foreground">
                Navigation featuring dropdown submenus for "Products" and "Analytics" sections.
              </p>
              <div className="mt-2 p-3 bg-muted rounded">
                <p className="text-sm">
                  <strong>Hover over:</strong> "Products" or "Analytics" to see dropdown menus
                </p>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const WithoutLogo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background">
        <NavigationBar
          routes={sampleRoutes}
          user={sampleUser}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Navigation without Logo</h3>
            <p className="text-muted-foreground">
              Navigation bar without a company logo - useful for simpler layouts.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background">
        <NavigationBar
          routes={sampleRoutes}
          user={sampleUser}
          logo={sampleLogo}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Responsive Navigation</h3>
            <p className="text-muted-foreground">
              Resize your browser window to see the responsive behavior in action.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <div className="text-sm space-y-1">
                <p><strong>Desktop (≥1024px):</strong> Full horizontal navigation with dropdowns</p>
                <p><strong>Mobile (&lt;1024px):</strong> Hamburger menu with collapsible navigation</p>
                <p><strong>Features:</strong> Dark mode toggle, user avatar, responsive logo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const DarkModeDemo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen h-screen bg-background">
        <NavigationBar
          routes={sampleRoutes}
          user={sampleUser}
          logo={sampleLogo}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Dark Mode Navigation</h3>
            <p className="text-muted-foreground">
              Navigation bar in dark mode with theme-aware styling and logo switching.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <p className="text-sm">
                The navigation automatically adapts to dark mode with appropriate colors and logo variants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};