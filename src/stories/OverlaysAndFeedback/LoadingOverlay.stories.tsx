import React, { useState, useContext } from "react";
import LoadingOverlay, { LoadingOverlayProvider, LoadingOverlayContext } from "../../components/common/LoadingOverlay/loadingoverlay";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof LoadingOverlay> = {
  title: "OverlaysAndFeedback/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A full-screen loading overlay with animated circular dots that blocks user interaction and provides visual feedback during loading states.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">LoadingOverlay Default</h3>
          <p className="text-muted-foreground">
            The loading overlay with animated dots covering the entire screen.
          </p>
        </div>
        <LoadingOverlay {...args} />
      </div>
    </ThemeProvider>
  ),
  args: {},
};

// Component to demonstrate context usage
const LoadingDemo = () => {
  const toggleLoading = useContext(LoadingOverlayContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowLoading = () => {
    setIsLoading(true);
    toggleLoading(true);

    // Auto-hide after 3 seconds for demo
    setTimeout(() => {
      setIsLoading(false);
      toggleLoading(false);
    }, 3000);
  };

  const handleHideLoading = () => {
    setIsLoading(false);
    toggleLoading(false);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Interactive Loading Overlay</h3>
      <p className="text-muted-foreground">
        Use the buttons below to show and hide the loading overlay.
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleShowLoading}
          disabled={isLoading}
          className="px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 hover:bg-primary/90"
        >
          {isLoading ? 'Loading...' : 'Show Loading (3s)'}
        </button>
        <button
          onClick={handleHideLoading}
          disabled={!isLoading}
          className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-muted"
        >
          Hide Loading
        </button>
      </div>

      <div className="p-4 bg-muted rounded">
        <p className="text-sm">
          <strong>Status:</strong> {isLoading ? 'Loading overlay is active' : 'No loading overlay'}
        </p>
        <p className="text-sm mt-1">
          <strong>Features:</strong> Blocks clicks, prevents scrolling, animated dots
        </p>
      </div>
    </div>
  );
};

export const WithProvider: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <LoadingOverlayProvider>
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <LoadingDemo />
        </div>
      </LoadingOverlayProvider>
    </ThemeProvider>
  ),
};

export const SimulatedAsyncOperations: Story = {
  render: () => {
    const AsyncOperationDemo = () => {
      const toggleLoading = useContext(LoadingOverlayContext);
      const [status, setStatus] = useState("idle");
      const [results, setResults] = useState<string[]>([]);

      const simulateOperation = async (name: string, duration: number) => {
        setStatus(`Loading ${name}...`);
        toggleLoading(true);

        await new Promise(resolve => setTimeout(resolve, duration));

        toggleLoading(false);
        setStatus("completed");
        setResults(prev => [...prev, `${name} completed in ${duration}ms`]);
      };

      const clearResults = () => {
        setResults([]);
        setStatus("idle");
      };

      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Async Operations Demo</h3>
          <p className="text-muted-foreground">
            Simulate different loading scenarios with varying durations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              onClick={() => simulateOperation("Quick Save", 1000)}
              disabled={status.includes("Loading")}
              className="px-3 py-2 text-sm bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-600"
            >
              Quick Save (1s)
            </button>
            <button
              onClick={() => simulateOperation("Data Fetch", 2500)}
              disabled={status.includes("Loading")}
              className="px-3 py-2 text-sm bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600"
            >
              Fetch Data (2.5s)
            </button>
            <button
              onClick={() => simulateOperation("File Upload", 4000)}
              disabled={status.includes("Loading")}
              className="px-3 py-2 text-sm bg-purple-500 text-white rounded disabled:opacity-50 hover:bg-purple-600"
            >
              Upload File (4s)
            </button>
            <button
              onClick={() => simulateOperation("Long Process", 6000)}
              disabled={status.includes("Loading")}
              className="px-3 py-2 text-sm bg-orange-500 text-white rounded disabled:opacity-50 hover:bg-orange-600"
            >
              Long Process (6s)
            </button>
          </div>

          <div className="p-4 bg-muted rounded">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium">Status: {status}</p>
              {results.length > 0 && (
                <button
                  onClick={clearResults}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
            {results.length > 0 && (
              <div className="space-y-1">
                <p className="text-xs font-medium">Recent Operations:</p>
                {results.slice(-3).map((result, index) => (
                  <p key={index} className="text-xs text-muted-foreground">
                    • {result}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    };

    return (
      <ThemeProvider defaultTheme="light">
        <LoadingOverlayProvider>
          <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
            <ModeToggle />
            <AsyncOperationDemo />
          </div>
        </LoadingOverlayProvider>
      </ThemeProvider>
    );
  },
};

export const FormSubmissionExample: Story = {
  render: () => {
    const FormDemo = () => {
      const toggleLoading = useContext(LoadingOverlayContext);
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [submitStatus, setSubmitStatus] = useState("");

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSubmitStatus("Submitting form...");
        toggleLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2500));

        toggleLoading(false);
        setSubmitStatus("Form submitted successfully!");

        // Clear form
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitStatus(""), 3000);
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };

      const isFormValid = formData.name && formData.email && formData.message;

      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Form Submission with Loading</h3>
          <p className="text-muted-foreground">
            Fill out the form and submit to see the loading overlay in action.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded h-20 resize-none"
                placeholder="Enter your message"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || submitStatus.includes("Submitting")}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 hover:bg-primary/90"
            >
              {submitStatus.includes("Submitting") ? "Submitting..." : "Submit Form"}
            </button>

            {submitStatus && (
              <p className={`text-sm ${submitStatus.includes("success") ? "text-green-600" : "text-muted-foreground"}`}>
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      );
    };

    return (
      <ThemeProvider defaultTheme="light">
        <LoadingOverlayProvider>
          <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
            <ModeToggle />
            <FormDemo />
          </div>
        </LoadingOverlayProvider>
      </ThemeProvider>
    );
  },
};

export const InteractionBlocking: Story = {
  render: () => {
    const InteractionDemo = () => {
      const toggleLoading = useContext(LoadingOverlayContext);
      const [clickCount, setClickCount] = useState(0);
      const [isBlocked, setIsBlocked] = useState(false);

      const handleBlockInteractions = () => {
        setIsBlocked(true);
        toggleLoading(true);

        setTimeout(() => {
          setIsBlocked(false);
          toggleLoading(false);
        }, 5000);
      };

      const handleClick = () => {
        setClickCount(prev => prev + 1);
      };

      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Interaction Blocking Demo</h3>
          <p className="text-muted-foreground">
            Test how the loading overlay blocks all user interactions.
          </p>

          <div className="p-4 border rounded">
            <h4 className="font-medium mb-2">Interactive Elements</h4>
            <div className="space-y-2">
              <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Click Me (Count: {clickCount})
              </button>

              <input
                type="text"
                placeholder="Try typing here..."
                className="w-full p-2 border rounded"
              />

              <select className="w-full p-2 border rounded">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleBlockInteractions}
            disabled={isBlocked}
            className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50 hover:bg-red-600"
          >
            {isBlocked ? "Interactions Blocked (5s remaining)" : "Block Interactions for 5s"}
          </button>

          <div className="p-4 bg-muted rounded">
            <p className="text-sm">
              <strong>Status:</strong> {isBlocked ? "All interactions are blocked" : "Interactions are enabled"}
            </p>
            <p className="text-sm mt-1">
              When loading overlay is active, it prevents:
            </p>
            <ul className="text-xs mt-1 ml-4 list-disc space-y-1">
              <li>Mouse clicks and context menus</li>
              <li>Keyboard input and navigation</li>
              <li>Touch events and scrolling</li>
              <li>Text selection</li>
            </ul>
          </div>
        </div>
      );
    };

    return (
      <ThemeProvider defaultTheme="light">
        <LoadingOverlayProvider>
          <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
            <ModeToggle />
            <InteractionDemo />
          </div>
        </LoadingOverlayProvider>
      </ThemeProvider>
    );
  },
};