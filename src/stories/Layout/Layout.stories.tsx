import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ContentMargin } from "../../components/layout/ContentMargin/content-margin";
import FlexFieldRow from "../../components/layout/FlexFieldRow";
import FlexFieldRowWrap from "../../components/layout/FlexFieldRowWrap";
import FlexiRowMatrix from "../../components/layout/FlexiRowMatrix";
import FlexiRowMatrixLeftAlign from "../../components/layout/FlexiRowMatrixLeftAlign";
import FlexRow from "../../components/layout/FlexRow";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import "../../styles/globals.css";

const ExampleBox = ({
  children,
  color = "#f3f4f6"
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      background: color,
      border: "1px dashed #888",
      padding: "12px",
      borderRadius: "4px",
      textAlign: "center",
      minHeight: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const meta: Meta = {
  title: "Layout/Layout Components",
  parameters: {
    docs: {
      description: {
        component:
          "A collection of layout components for organizing content with flexbox patterns, responsive design, and consistent spacing.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const ContentMarginExample: Story = {
  name: "ContentMargin",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <ContentMargin>
          <ExampleBox>
            <div>
              <h3>ContentMargin</h3>
              <p>Responsive horizontal padding and max-width container</p>
              <p>Resize window to see responsive behavior</p>
            </div>
          </ExampleBox>
        </ContentMargin>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "ContentMargin provides responsive horizontal padding and max-width constraints, matching your design system's breakpoints.",
      },
    },
  },
};

export const FlexFieldRowExample: Story = {
  name: "FlexFieldRow",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <FlexFieldRow>
          <ExampleBox color="#e3f2fd">Item 1</ExampleBox>
          <ExampleBox color="#f3e5f5">Item 2</ExampleBox>
          <ExampleBox color="#e8f5e8">Item 3</ExampleBox>
        </FlexFieldRow>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "FlexFieldRow creates a responsive flex row that wraps items equally. On mobile (≤560px), items stack vertically.",
      },
    },
  },
};

export const FlexFieldRowWrapExample: Story = {
  name: "FlexFieldRowWrap",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <FlexFieldRowWrap>
          <ExampleBox color="#fff3e0">Field 1</ExampleBox>
          <ExampleBox color="#fce4ec">Field 2</ExampleBox>
          <ExampleBox color="#e0f2f1">Field 3</ExampleBox>
          <ExampleBox color="#f1f8e9">Field 4</ExampleBox>
        </FlexFieldRowWrap>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "FlexFieldRowWrap is similar to FlexFieldRow but without the mobile breakpoint - items wrap naturally based on available space.",
      },
    },
  },
};

export const FlexiRowMatrixExample: Story = {
  name: "FlexiRowMatrix",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <FlexiRowMatrix title="Space Between Layout">
          <ExampleBox color="#e8eaf6">Left Item</ExampleBox>
          <ExampleBox color="#f3e5f5">Center Item</ExampleBox>
          <ExampleBox color="#e0f2f1">Right Item</ExampleBox>
        </FlexiRowMatrix>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "FlexiRowMatrix includes a title and arranges items with space-between justification. Items align to baseline and stack vertically on mobile (≤480px).",
      },
    },
  },
};

export const FlexiRowMatrixLeftAlignExample: Story = {
  name: "FlexiRowMatrixLeftAlign",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <FlexiRowMatrixLeftAlign title="Left Aligned Layout">
          <ExampleBox color="#fff8e1">Item A</ExampleBox>
          <ExampleBox color="#fce4ec">Item B</ExampleBox>
          <ExampleBox color="#e8f5e8">Item C</ExampleBox>
        </FlexiRowMatrixLeftAlign>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "FlexiRowMatrixLeftAlign includes a title and arranges items with flex-start justification and 30px gap. On mobile (≤480px), items stack with reduced gap and constrained width.",
      },
    },
  },
};

export const FlexRowExample: Story = {
  name: "FlexRow",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <FlexRow>
          <ExampleBox color="#f3e5f5">
            <div>
              <h4>Section 1</h4>
              <p>Large content area</p>
            </div>
          </ExampleBox>
          <ExampleBox color="#e0f2f1">
            <div>
              <h4>Section 2</h4>
              <p>Another section</p>
            </div>
          </ExampleBox>
        </FlexRow>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "FlexRow creates a simple flex row with 2rem gap. Items stack vertically on tablets and smaller (≤1024px).",
      },
    },
  },
};

export const LayoutComparison: Story = {
  name: "Layout Comparison",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h3 style={{ marginBottom: "1rem" }}>ContentMargin</h3>
            <ContentMargin>
              <ExampleBox>Responsive container with max-width</ExampleBox>
            </ContentMargin>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem" }}>FlexFieldRow (Equal flex items)</h3>
            <FlexFieldRow>
              <ExampleBox color="#e3f2fd">Equal</ExampleBox>
              <ExampleBox color="#f3e5f5">Flex</ExampleBox>
              <ExampleBox color="#e8f5e8">Items</ExampleBox>
            </FlexFieldRow>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem" }}>FlexiRowMatrix (Space between)</h3>
            <FlexiRowMatrix title="Matrix Title">
              <ExampleBox color="#fff3e0">Start</ExampleBox>
              <ExampleBox color="#fce4ec">End</ExampleBox>
            </FlexiRowMatrix>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem" }}>FlexiRowMatrixLeftAlign (30px gap)</h3>
            <FlexiRowMatrixLeftAlign title="Left Align Title">
              <ExampleBox color="#fff8e1">Item 1</ExampleBox>
              <ExampleBox color="#fce4ec">Item 2</ExampleBox>
            </FlexiRowMatrixLeftAlign>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem" }}>FlexRow (2rem gap)</h3>
            <FlexRow>
              <ExampleBox color="#e8eaf6">Large Section</ExampleBox>
              <ExampleBox color="#f1f8e9">Another Section</ExampleBox>
            </FlexRow>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A comparison view showing all layout components side by side to understand their different spacing, alignment, and responsive behaviors.",
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  name: "Responsive Behavior",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ padding: "1rem", background: "#f8f9fa", borderRadius: "8px" }}>
            <h4>Resize your browser to see responsive behavior:</h4>
            <ul style={{ margin: "0.5rem 0", paddingLeft: "1.5rem" }}>
              <li><strong>FlexFieldRow:</strong> Stacks vertically ≤ 560px</li>
              <li><strong>FlexiRowMatrix:</strong> Stacks vertically ≤ 480px</li>
              <li><strong>FlexiRowMatrixLeftAlign:</strong> Stacks vertically ≤ 480px with reduced width</li>
              <li><strong>FlexRow:</strong> Stacks vertically ≤ 1024px</li>
              <li><strong>ContentMargin:</strong> Responsive padding and max-width</li>
            </ul>
          </div>

          <FlexFieldRow>
            <ExampleBox color="#e3f2fd">FlexFieldRow: Mobile ≤560px</ExampleBox>
            <ExampleBox color="#f3e5f5">Stacks vertically</ExampleBox>
          </FlexFieldRow>

          <FlexiRowMatrix title="FlexiRowMatrix: Mobile ≤480px">
            <ExampleBox color="#fff3e0">Stacks</ExampleBox>
            <ExampleBox color="#fce4ec">Vertically</ExampleBox>
          </FlexiRowMatrix>

          <FlexRow>
            <ExampleBox color="#e8eaf6">FlexRow: Tablet ≤1024px</ExampleBox>
            <ExampleBox color="#f1f8e9">Stacks vertically</ExampleBox>
          </FlexRow>
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the responsive behavior of each layout component. Resize your browser to see how different components adapt to various screen sizes.",
      },
    },
  },
};