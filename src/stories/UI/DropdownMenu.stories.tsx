import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { ChevronDownIcon, UserIcon, SettingsIcon, LogOutIcon, PlusIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof DropdownMenu> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A comprehensive dropdown menu component built on Radix UI with support for checkboxes, radio groups, submenus, and keyboard shortcuts.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">DropdownMenu Default</h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Options <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const WithCheckboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dropdown with Checkboxes</h3>
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    View Options <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                  >
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                  >
                    Panel
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Status Bar:</strong> {showStatusBar ? "Visible" : "Hidden"}<br/>
                <strong>Activity Bar:</strong> {showActivityBar ? "Visible" : "Hidden"}<br/>
                <strong>Panel:</strong> {showPanel ? "Visible" : "Hidden"}
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = React.useState("bottom");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dropdown with Radio Group</h3>
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Panel Position <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Selected Position:</strong> {position}
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const WithSubmenus: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Dropdown with Submenus</h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  File Menu <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <PlusIcon className="mr-2 h-4 w-4" />
                  <span>New File</span>
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>New Folder</span>
                  <DropdownMenuShortcut>⌘⇧N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Import</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>From CSV</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>From JSON</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>From Excel</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>From Database</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Export</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>To PDF</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>To Excel</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>To CSV</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Print</span>
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">User Account Menu</h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-fit">
                  <UserIcon className="mr-2 h-4 w-4" />
                  John Doe
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john.doe@company.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Switch Account</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Personal Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Work Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusIcon className="mr-2 h-4 w-4" />
                      <span>Add Account</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ActionsMenu: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Actions Menu</h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  Actions <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Employee Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Edit Employee</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>View Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Generate Report</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <span>Delete Employee</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Dark Mode DropdownMenu</h3>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <UserIcon className="mr-2 h-4 w-4" />
                  User Menu
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Dark Theme Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>More Options</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Help & Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Feedback</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4 p-3 bg-muted rounded">
            <p className="text-sm">
              DropdownMenu component with dark mode theme support and enhanced contrast.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};