import { NavigationBar } from "../../components/ui/navigation-bar/navigation-bar";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import {
  sampleLogo,
  sampleAdminUser,
  sampleEmployeeUser,
  sampleAdminRoutes,
  sampleEmployeeRoutes,
  sampleAdminPermissions,
  sampleEmployeePermissions
} from "../../components/ui/navigation-bar/sample-data";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof NavigationBar> = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A comprehensive navigation bar component with responsive design, permission-based routing, user account management, and dark mode support. Uses real PayPlus application routes and permissions for demonstration.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  render: (args: any) => (
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
    routes: sampleAdminRoutes,
    user: sampleAdminUser,
    logo: sampleLogo,
  },
};

export const WithPermissions: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background">
        <NavigationBar
          routes={sampleEmployeeRoutes}
          user={sampleEmployeeUser}
          logo={sampleLogo}
          permissions={sampleEmployeePermissions}
          isAdmin={false}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Permission-Based Navigation</h3>
            <p className="text-muted-foreground">
              Navigation filtered by employee permissions. Employee has limited access to time entry applications only.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>User Type:</strong> Employee<br/>
                <strong>Permissions:</strong> Time entry applications (4200-4800)<br/>
                <strong>Restricted:</strong> No access to admin maintenance, payroll, or system functions
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
          routes={sampleAdminRoutes}
          user={sampleAdminUser}
          logo={sampleLogo}
          permissions={sampleAdminPermissions}
          isAdmin={true}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Admin Navigation</h3>
            <p className="text-muted-foreground">
              Navigation for an admin user with full PayPlus permissions and access to all administrative functions.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>User Type:</strong> Administrator<br/>
                <strong>Permissions:</strong> Full access to File Maintenance, Timekeeping, Payroll, and System sections<br/>
                <strong>Features:</strong> Multi-level dropdown menus, permission-based filtering
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
          routes={sampleEmployeeRoutes}
          user={sampleEmployeeUser}
          logo={sampleLogo}
          permissions={[]}
          isAdmin={false}
        />
        <div className="p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Regular User Navigation</h3>
            <p className="text-muted-foreground">
              Navigation for an employee with no permissions. Shows basic menu structure but no functional access.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>User Type:</strong> Employee (No Permissions)<br/>
                <strong>Access:</strong> Can see menu structure but cannot access restricted functions<br/>
                <strong>Available:</strong> Only basic profile and records viewing
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
    // Show a subset of admin routes to demonstrate multi-level navigation
    const routesWithSubnav = [
      sampleAdminRoutes[0], // Home
      sampleAdminRoutes[1], // File Maintenance (has extensive subnavigation)
      sampleAdminRoutes[2], // Timekeeping
    ];

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background">
          <NavigationBar
            routes={routesWithSubnav}
            user={sampleAdminUser}
            logo={sampleLogo}
            permissions={sampleAdminPermissions}
          />
          <div className="p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Navigation with Submenus</h3>
              <p className="text-muted-foreground">
                Navigation featuring complex multi-level dropdown submenus from PayPlus "File Maintenance" and "Timekeeping" sections.
              </p>
              <div className="mt-2 p-3 bg-muted rounded">
                <p className="text-sm">
                  <strong>Hover over:</strong> "File Maintenance" to see 3-level nested menus (HR → Employee → Settings)<br/>
                  <strong>Features:</strong> Permission-based filtering, icon support, extensive navigation hierarchy
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
          routes={sampleAdminRoutes}
          user={sampleAdminUser}
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
          routes={sampleAdminRoutes}
          user={sampleAdminUser}
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
          routes={sampleAdminRoutes}
          user={sampleAdminUser}
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