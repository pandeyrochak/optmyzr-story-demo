import {
  Button,
  Typography,
  Stepper,
  Select,
  Input,
} from "f1-demo-components";
import { X, RefreshCw } from "lucide-react";
import { useState } from "react";

const DrawerContent = () => {
  const steps = [
    { id: 1, label: "Create or Select a client" },
    { id: 2, label: "Select a budget" },
  ];
  const [activeStep, setActiveStep] = useState(1);
  const goToNextStep = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <div className="min-w-[800px] flex flex-col bg-lightGrey h-full">
      {/* top */}
      <div className="p-8 pt-6 flex flex-col gap-1 bg-white">
        <Typography variant="h6">Budget Alert</Typography>
        <Typography variant="body2" className="text-midGrey">
          Add a budget alert to monitor
        </Typography>
      </div>
      {/* main area */}
      <div className="">
        <div className="border-b border-t border-border">
          <Stepper
            steps={steps.map((step) => ({
              ...step,
              isCompleted: step.id < activeStep,
            }))}
            activeStep={activeStep}
          />
        </div>
        {activeStep === 1 && (
          <div className="grid grid-cols-2 px-8 pt-20 pb-8 gap-x-8 relative">
            {/* left */}
            <div className="flex flex-col gap-6">
              <Select
                label="Client"
                options={[
                  { label: "Client 1", value: "client1" },
                  { label: "Client 2", value: "client2" },
                  { label: "Client 3", value: "client3" },
                ]}
                placeholder="Select Client"
              />
              <Select
                label="Select accounts"
                placeholder="Select Accounts"
                options={[
                  { label: "Option 1", value: "Option1" },
                  { label: "Option 2", value: "Option2" },
                  { label: "Option 3", value: "Option3" },
                ]}
              />
              <Select
                label="Timezone"
                placeholder="Select Timezone"
                options={[
                  { label: "UTC", value: "utc" },
                  { label: "America/New_York", value: "america/new_york" },
                  { label: "Europe/London", value: "europe/london" },
                ]}
              />
              <Select
                label="Currency"
                placeholder="Select Currency"
                options={[
                  { label: "Client 1", value: "client1" },
                  { label: "Client 2", value: "client2" },
                  { label: "Client 3", value: "client3" },
                ]}
              />
              <Select
                label="Email Notification"
                placeholder="Select users"
                options={[
                  { label: "Client 1", value: "" },
                  { label: "Client 2", value: "client2" },
                  { label: "Client 3", value: "client3" },
                ]}
                value=""
              />
            </div>
            {/* right */}
            <div className="w-full h-[400px] bg-white gap-6 rounded-md border border-border flex flex-col">
              <div className="top-block flex gap-2 px-8 py-6 border-b border-border">
                <Typography
                  variant="subtitle2"
                  className="text-midGrey text-sm"
                >
                  Client preview
                </Typography>
                <RefreshCw
                  className="cursor-pointer text-primary mt-[2px]"
                  size={16}
                />
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img src="/empty-state.svg" alt="empty-state" />
              </div>
            </div>
          </div>
        )}
        {activeStep === 2 && (
          <div className="grid grid-cols-2 px-8 pt-20 pb-8 gap-x-8 relative">
            {/* left */}
            <div className="flex flex-col gap-6">
              <Select
                label="Select Campaigns"
                placeholder="Select Campaign"
                options={[
                  { label: "Option 1", value: "Option1" },
                  { label: "Option 2", value: "Option2" },
                  { label: "Option 3", value: "Option3" },
                ]}
              />
              <Input
                label="Target Monthly Budget"
                placeholder="Enter budget"
                value={0}
              />
            </div>
            {/* right */}
          </div>
        )}
        {/* footer */}
        <div className="fixed bottom-0 left-0 w-full flex justify-end  gap-3 px-8 py-4 bg-[#f5f5f5]">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" onClick={goToNextStep}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
