import React from "react";
import Footer from "../../components/ui/footer/footer";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Footer> = {
  title: "Navigation/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A comprehensive footer component with company information, links, contact details, social media, and copyright information.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

// Sample data for stories
const sampleCompany = {
  name: "PAYplus Solutions",
  description: "Innovative payment solutions for modern businesses. We provide secure, fast, and reliable payment processing services.",
  learnMoreUrl: "/about",
  learnMoreText: "Learn more about us",
};

const sampleLinks = [
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Terms of Service", url: "/terms" },
  { label: "Documentation", url: "/docs" },
  { label: "API Reference", url: "/api-docs", target: "_blank" as const },
  { label: "Support Center", url: "/support" },
];

const sampleContact = {
  email: "contact@payplus.com",
  phone: "+1 (555) 123-4567",
};

const sampleSocialMedia = [
  { platform: "facebook" as const, url: "https://facebook.com/payplus" },
  { platform: "twitter" as const, url: "https://twitter.com/payplus" },
  { platform: "linkedin" as const, url: "https://linkedin.com/company/payplus" },
];

const sampleCopyright = {
  year: 2024,
  productName: "PAYplus",
  version: "v2.1.0",
  designedBy: "Your Design Team",
  designedByUrl: "https://yourdesignteam.com",
};

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Footer Default</h3>
            <p className="text-muted-foreground">
              Default footer with all default values and minimal configuration.
            </p>
          </div>
        </div>
        <Footer {...args} />
      </div>
    </ThemeProvider>
  ),
  args: {},
};

export const Complete: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Complete Footer</h3>
            <p className="text-muted-foreground">
              Footer with all sections populated including company info, links, contact, and social media.
            </p>
          </div>
        </div>
        <Footer
          company={sampleCompany}
          links={sampleLinks}
          contact={sampleContact}
          socialMedia={sampleSocialMedia}
          copyright={sampleCopyright}
        />
      </div>
    </ThemeProvider>
  ),
};

export const CompanyOnly: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Company Information Only</h3>
            <p className="text-muted-foreground">
              Footer displaying only company information section.
            </p>
          </div>
        </div>
        <Footer
          company={sampleCompany}
          copyright={sampleCopyright}
        />
      </div>
    </ThemeProvider>
  ),
};

export const LinksAndContact: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Links and Contact</h3>
            <p className="text-muted-foreground">
              Footer with navigation links and contact information.
            </p>
          </div>
        </div>
        <Footer
          links={sampleLinks}
          contact={sampleContact}
          copyright={sampleCopyright}
        />
      </div>
    </ThemeProvider>
  ),
};

export const SocialMediaFocus: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Social Media Focus</h3>
            <p className="text-muted-foreground">
              Footer emphasizing social media presence and connectivity.
            </p>
          </div>
        </div>
        <Footer
          company={{
            name: "Social Brand",
            description: "Connect with us on social media for the latest updates and news.",
          }}
          socialMedia={sampleSocialMedia}
          copyright={{
            year: 2024,
            productName: "SocialBrand",
            version: "v1.0.0",
            designedBy: "Creative Team",
          }}
        />
      </div>
    </ThemeProvider>
  ),
};

export const MinimalFooter: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Minimal Footer</h3>
            <p className="text-muted-foreground">
              Simple footer with just copyright information.
            </p>
          </div>
        </div>
        <Footer
          copyright={{
            year: 2024,
            productName: "MinimalApp",
            version: "v1.0.0",
            designedBy: "Your Team",
          }}
        />
      </div>
    </ThemeProvider>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Dark Mode Footer</h3>
            <p className="text-muted-foreground">
              Footer component in dark mode with theme-aware styling.
            </p>
          </div>
        </div>
        <Footer
          company={sampleCompany}
          links={sampleLinks}
          contact={sampleContact}
          socialMedia={sampleSocialMedia}
          copyright={sampleCopyright}
        />
      </div>
    </ThemeProvider>
  ),
};

export const LongContent: Story = {
  render: () => {
    const extendedCompany = {
      name: "Enterprise Solutions Inc.",
      description: "We are a leading provider of enterprise-grade solutions for businesses of all sizes. Our comprehensive suite of products includes cloud infrastructure, data analytics, artificial intelligence, and cybersecurity solutions. With over 20 years of experience in the industry, we have helped thousands of companies transform their operations and achieve their business goals.",
      learnMoreUrl: "/about",
      learnMoreText: "Read our full story",
    };

    const extendedLinks = [
      { label: "Products & Services", url: "/products" },
      { label: "Solutions", url: "/solutions" },
      { label: "Industries", url: "/industries" },
      { label: "Resources", url: "/resources" },
      { label: "Documentation", url: "/docs" },
      { label: "API Reference", url: "/api", target: "_blank" as const },
      { label: "Support Center", url: "/support" },
      { label: "Community Forum", url: "/community" },
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
      { label: "Cookie Policy", url: "/cookies" },
      { label: "Accessibility", url: "/accessibility" },
    ];

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background flex flex-col overflow-y-auto">
          <div className="flex-1 p-6">
            <ModeToggle />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Footer with Extended Content</h3>
              <p className="text-muted-foreground">
                Footer with longer description and more links to demonstrate layout with extensive content.
              </p>
            </div>
          </div>
          <Footer
            company={extendedCompany}
            links={extendedLinks}
            contact={sampleContact}
            socialMedia={sampleSocialMedia}
            copyright={sampleCopyright}
          />
        </div>
      </ThemeProvider>
    );
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background flex flex-col">
        <div className="flex-1 p-6">
          <ModeToggle />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Responsive Footer</h3>
            <p className="text-muted-foreground">
              Resize your browser window to see the responsive layout in action.
            </p>
            <div className="mt-2 p-3 bg-muted rounded">
              <div className="text-sm space-y-1">
                <p><strong>Desktop:</strong> Four-column layout with all sections side by side</p>
                <p><strong>Tablet:</strong> Two-column layout with sections grouped</p>
                <p><strong>Mobile:</strong> Single-column layout with stacked sections</p>
              </div>
            </div>
          </div>
        </div>
        <Footer
          company={sampleCompany}
          links={sampleLinks}
          contact={sampleContact}
          socialMedia={sampleSocialMedia}
          copyright={sampleCopyright}
        />
      </div>
    </ThemeProvider>
  ),
};