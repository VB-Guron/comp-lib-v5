import React, { useState } from "react";
import StepsMaker from "../../components/common/StepsMaker";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof StepsMaker> = {
  title: "Common/StepsMaker",
  component: StepsMaker,
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    stepValue: { control: "number" },
    handleStepChange: { action: "step-changed" },
  },
  parameters: {
    docs: {
      description: {
        component: "A visual step progress indicator with numbered circles and progress line showing current step in a multi-step process.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepsMaker>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">StepsMaker Default</h3>
          <StepsMaker {...args} />
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    data: ["Step 1", "Step 2", "Step 3", "Step 4"],
    stepValue: 1,
  },
};

export const AllStepStates: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Step Progress States</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-md font-medium mb-4">Step 1 Active</h4>
              <StepsMaker
                data={["Account Setup", "Personal Info", "Verification", "Complete"]}
                stepValue={0}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">Step 2 Active</h4>
              <StepsMaker
                data={["Account Setup", "Personal Info", "Verification", "Complete"]}
                stepValue={1}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">Step 3 Active</h4>
              <StepsMaker
                data={["Account Setup", "Personal Info", "Verification", "Complete"]}
                stepValue={2}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">Final Step Active</h4>
              <StepsMaker
                data={["Account Setup", "Personal Info", "Verification", "Complete"]}
                stepValue={3}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const DifferentStepCounts: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4 overflow-y-auto">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Different Step Counts</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-md font-medium mb-4">3 Steps</h4>
              <StepsMaker
                data={["Start", "Process", "Finish"]}
                stepValue={1}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">5 Steps</h4>
              <StepsMaker
                data={["Planning", "Design", "Development", "Testing", "Deployment"]}
                stepValue={2}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">6 Steps</h4>
              <StepsMaker
                data={["Registration", "Verification", "Profile", "Preferences", "Payment", "Welcome"]}
                stepValue={3}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ["Personal Details", "Contact Information", "Preferences", "Review", "Submit"];

    const handleNext = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handlePrevious = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleStepClick = () => {
      console.log('Step clicked!');
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Interactive Step Navigation</h3>

            <StepsMaker
              data={steps}
              stepValue={currentStep}
              handleStepChange={handleStepClick}
            />

            <div className="p-6 border rounded-lg">
              <h4 className="text-lg font-medium mb-2">
                {steps[currentStep]} ({currentStep + 1} of {steps.length})
              </h4>
              <p className="text-muted-foreground mb-4">
                Current step content would be displayed here. This is step {currentStep + 1}: {steps[currentStep]}.
              </p>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                >
                  Previous
                </button>

                <div className="text-sm text-muted-foreground self-center">
                  Step {currentStep + 1} of {steps.length}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
                >
                  {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const LongStepNames: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Long Step Names</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-md font-medium mb-4">E-commerce Checkout Process</h4>
              <StepsMaker
                data={[
                  "Shopping Cart Review",
                  "Shipping Information",
                  "Payment Method Selection",
                  "Order Confirmation"
                ]}
                stepValue={1}
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">Project Management Workflow</h4>
              <StepsMaker
                data={[
                  "Requirements Gathering",
                  "Technical Architecture Design",
                  "Implementation and Development",
                  "Quality Assurance Testing",
                  "User Acceptance Testing",
                  "Production Deployment"
                ]}
                stepValue={2}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Responsive Behavior</h3>

          <div className="mb-4 p-4 bg-muted rounded">
            <p>The StepsMaker component adapts to different screen sizes:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>On larger screens, steps are displayed horizontally with full labels</li>
              <li>On smaller screens, the component remains functional with responsive width</li>
              <li>The progress line adjusts based on the number of steps and current progress</li>
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-md font-medium mb-4">Mobile-friendly Layout</h4>
              <div className="max-w-md mx-auto">
                <StepsMaker
                  data={["Select", "Configure", "Review", "Complete"]}
                  stepValue={1}
                />
              </div>
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">Full Width Layout</h4>
              <StepsMaker
                data={["Start", "Process", "Validate", "Finish"]}
                stepValue={2}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};