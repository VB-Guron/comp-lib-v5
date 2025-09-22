import React, { useState } from "react";
import { Search } from "../../components/ui/search";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Search> = {
  title: "UI/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    label: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Search Default</h3>
            <Search
              {...args}
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  },
  args: {
    placeholder: "Search...",
    value: "",
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Search with Label</h3>

            <div className="space-y-4 max-w-md">
              <Search
                value={value}
                onChange={setValue}
                label="Find Products"
                placeholder="Enter product name..."
              />
              {value && (
                <p className="text-sm text-muted-foreground">
                  Searching for: "{value}"
                </p>
              )}
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const SearchVariations: Story = {
  render: () => {
    const [searches, setSearches] = useState({
      global: "",
      users: "",
      products: "",
      documents: "",
    });

    const handleSearchChange = (key: string) => (value: string) => {
      setSearches(prev => ({
        ...prev,
        [key]: value
      }));
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Different Search Types</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Search
                  value={searches.global}
                  onChange={handleSearchChange('global')}
                  placeholder="Global search..."
                  label="Global Search"
                />

                <Search
                  value={searches.users}
                  onChange={handleSearchChange('users')}
                  placeholder="Search users by name or email..."
                  label="User Search"
                />
              </div>

              <div className="space-y-4">
                <Search
                  value={searches.products}
                  onChange={handleSearchChange('products')}
                  placeholder="Product name, SKU, or category..."
                  label="Product Search"
                />

                <Search
                  value={searches.documents}
                  onChange={handleSearchChange('documents')}
                  placeholder="Search documents..."
                  label="Document Search"
                />
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Active Searches:</h4>
              <div className="text-sm space-y-1">
                <div>Global: <span className="font-mono">{searches.global || '(empty)'}</span></div>
                <div>Users: <span className="font-mono">{searches.users || '(empty)'}</span></div>
                <div>Products: <span className="font-mono">{searches.products || '(empty)'}</span></div>
                <div>Documents: <span className="font-mono">{searches.documents || '(empty)'}</span></div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const LiveSearch: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("");

    // Mock data for demonstration
    const allItems = [
      "Apple iPhone 14",
      "Samsung Galaxy S23",
      "Google Pixel 7",
      "Apple MacBook Pro",
      "Dell XPS 13",
      "HP Pavilion",
      "Microsoft Surface",
      "Apple iPad Pro",
      "Samsung Galaxy Tab",
      "Amazon Kindle",
    ];

    const filteredItems = allItems.filter(item =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Live Search Demo</h3>

            <div className="max-w-md">
              <Search
                value={searchValue}
                onChange={setSearchValue}
                label="Product Search"
                placeholder="Type to search products..."
              />

              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">
                  {searchValue ? `Found ${filteredItems.length} results for "${searchValue}"` : 'Type to search...'}
                </p>

                {searchValue && (
                  <div className="border rounded-lg max-h-60 overflow-y-auto">
                    {filteredItems.length > 0 ? (
                      <ul className="divide-y">
                        {filteredItems.map((item, index) => (
                          <li key={index} className="p-3 hover:bg-muted cursor-pointer">
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const SearchWithActions: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("");
    const [recentSearches, setRecentSearches] = useState([
      "laptop",
      "smartphone",
      "headphones"
    ]);

    const handleSearch = () => {
      if (searchValue.trim() && !recentSearches.includes(searchValue.trim())) {
        setRecentSearches(prev => [searchValue.trim(), ...prev.slice(0, 4)]);
      }
      alert(`Searching for: "${searchValue}"`);
    };

    const handleRecentSearch = (term: string) => {
      setSearchValue(term);
    };

    const clearRecentSearches = () => {
      setRecentSearches([]);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Search with Actions</h3>

            <div className="max-w-md">
              <div className="flex gap-2">
                <Search
                  value={searchValue}
                  onChange={setSearchValue}
                  placeholder="Search products..."
                  className="flex-1"
                />
                <button
                  onClick={handleSearch}
                  disabled={!searchValue.trim()}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
                >
                  Search
                </button>
              </div>

              {recentSearches.length > 0 && (
                <div className="mt-4 p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium">Recent Searches</h4>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearch(term)}
                        className="px-2 py-1 text-xs bg-muted hover:bg-muted/80 rounded"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ResponsiveSearch: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Responsive Search Layout</h3>

            <div className="space-y-4">
              <div className="p-4 bg-muted rounded">
                <p className="text-sm">
                  This search adapts to different screen sizes. On mobile, it takes full width,
                  and on larger screens, it has constrained width.
                </p>
              </div>

              <div className="w-full max-w-lg">
                <Search
                  value={searchValue}
                  onChange={setSearchValue}
                  label="Responsive Search"
                  placeholder="Adapts to screen size..."
                  className="w-full"
                />
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Search Header Layout</h4>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Search
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="Header search..."
                    className="flex-1"
                  />
                  <div className="flex gap-2">
                    <button className="px-3 py-2 text-sm border rounded hover:bg-muted">
                      Filter
                    </button>
                    <button className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};