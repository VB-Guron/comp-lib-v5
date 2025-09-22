import { useState } from "react";
import { SideFilterStationary } from "../../components/common/SideFilterStationary";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof SideFilterStationary> = {
  title: "Navigation/SideFilterStationary",
  component: SideFilterStationary,
  tags: ["autodocs"],
  argTypes: {
    header: { control: "text" },
    isOpen: { control: "boolean" },
    children: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A collapsible side navigation/filter panel component designed for stationary positioning with responsive behavior and smooth animations.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideFilterStationary>;

export const Default: Story = {
  render: (args: any) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex">
        <SideFilterStationary {...args}>
          <div className="space-y-4 p-4">
            <h4 className="font-medium">Filter Options</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Option 1</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Option 2</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Option 3</span>
              </label>
            </div>
          </div>
        </SideFilterStationary>
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">SideFilterStationary Default</h3>
            <p className="text-muted-foreground">
              Default side filter panel with basic filter options.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    header: "Filter Options",
    isOpen: true,
  },
};

export const InteractiveToggle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background flex">
          <SideFilterStationary
            header="Interactive Filter"
            isOpen={isOpen}
            toggleSideNav={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-4 p-4">
              <h4 className="font-medium">Filter Controls</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select className="w-full p-2 border rounded text-sm">
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Books</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price Range</label>
                  <div className="flex gap-2">
                    <input type="number" placeholder="Min" className="w-full p-2 border rounded text-sm" />
                    <input type="number" placeholder="Max" className="w-full p-2 border rounded text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rating</label>
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map(rating => (
                      <label key={rating} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{"★".repeat(rating)} & up</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SideFilterStationary>
          <div className="flex-1 p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Interactive Side Filter</h3>
              <p className="text-muted-foreground">
                Click the chevron in the side panel to toggle it open/closed.
              </p>
              <div className="mt-2 p-3 bg-muted rounded">
                <p className="text-sm">
                  <strong>Current State:</strong> {isOpen ? "Open" : "Closed"}<br/>
                  <strong>Responsive:</strong> Automatically collapses on mobile (&lt;480px)
                </p>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const CustomContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background flex">
          <SideFilterStationary
            header="Advanced Filters"
            isOpen={isOpen}
            toggleSideNav={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-6 p-4">
              <div>
                <h4 className="font-medium mb-3">Search</h4>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full p-2 border rounded text-sm"
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {["Electronics", "Clothing", "Books", "Home & Garden", "Sports", "Toys", "Health"].map(category => (
                    <label key={category} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input type="range" min="0" max="1000" className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Brand</h4>
                <div className="space-y-2">
                  {["Apple", "Samsung", "Nike", "Adidas", "Sony"].map(brand => (
                    <label key={brand} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90">
                  Apply Filters
                </button>
                <button className="w-full mt-2 px-4 py-2 border rounded text-sm hover:bg-muted">
                  Clear All
                </button>
              </div>
            </div>
          </SideFilterStationary>
          <div className="flex-1 p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Custom Filter Content</h3>
              <p className="text-muted-foreground">
                Side filter with comprehensive search and filtering controls.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const NavigationStyle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background flex">
          <SideFilterStationary
            header="Navigation Menu"
            isOpen={isOpen}
            toggleSideNav={() => setIsOpen(!isOpen)}
          >
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-muted">
                    <span>🏠</span>
                    <span className="text-sm">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-muted">
                    <span>👥</span>
                    <span className="text-sm">Users</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-muted bg-muted">
                    <span>📦</span>
                    <span className="text-sm">Products</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-muted">
                    <span>📊</span>
                    <span className="text-sm">Analytics</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-muted">
                    <span>⚙️</span>
                    <span className="text-sm">Settings</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t">
                <h5 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Quick Actions
                </h5>
                <div className="space-y-2">
                  <button className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90">
                    Add Product
                  </button>
                  <button className="w-full px-3 py-2 text-sm border rounded hover:bg-muted">
                    Export Data
                  </button>
                </div>
              </div>
            </nav>
          </SideFilterStationary>
          <div className="flex-1 p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Navigation Menu Style</h3>
              <p className="text-muted-foreground">
                Using the side panel as a navigation menu with links and quick actions.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ResponsiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background flex">
          <SideFilterStationary
            header="Responsive Panel"
            isOpen={isOpen}
            toggleSideNav={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-4 p-4">
              <div className="p-3 bg-muted rounded">
                <p className="text-xs font-medium mb-1">Responsive Behavior:</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• Desktop: Fixed 25rem width</div>
                  <div>• Mobile (&lt;480px): Collapsible overlay</div>
                  <div>• Smooth animations on toggle</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Sample Content</h4>
                <div className="space-y-2">
                  <input type="text" placeholder="Search..." className="w-full p-2 border rounded text-sm" />
                  <select className="w-full p-2 border rounded text-sm">
                    <option>Filter by...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>
            </div>
          </SideFilterStationary>
          <div className="flex-1 p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Responsive Behavior Demo</h3>
              <p className="text-muted-foreground">
                Resize your browser window below 480px to see mobile behavior.
              </p>
              <div className="mt-2 p-3 bg-muted rounded">
                <p className="text-sm">
                  <strong>Current state:</strong> {isOpen ? "Open" : "Closed"}<br/>
                  <strong>Toggle function:</strong> Click the chevron to open/close
                </p>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMode: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <ThemeProvider defaultTheme="dark">
        <div className="w-screen h-screen bg-background flex">
          <SideFilterStationary
            header="Dark Mode Panel"
            isOpen={isOpen}
            toggleSideNav={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-4 p-4">
              <h4 className="font-medium">Dark Theme Filters</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Search</label>
                  <input type="text" placeholder="Dark mode search..." className="w-full p-2 border rounded text-sm bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select className="w-full p-2 border rounded text-sm bg-background">
                    <option>All Items</option>
                    <option>Featured</option>
                    <option>Popular</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Options</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Dark theme option</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Another option</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </SideFilterStationary>
          <div className="flex-1 p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Dark Mode Side Panel</h3>
              <p className="text-muted-foreground">
                Side filter panel with dark mode styling and theme-aware components.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};