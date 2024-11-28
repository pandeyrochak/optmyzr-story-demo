import { Button, Drawer, Typography, Sidebar } from "f1-demo-components";
import "f1-demo-components/dist/index.css"; // Import styles
import React, { useState } from "react";
import DrawerContent from "./components/DrawerContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <React.Fragment>
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-4 items-center h-screen max-w-[calc(100%-5rem)] ml-auto">
        <div className="w-full bg-white shadow flex items-center justify-between px-3 py-4">
          <Typography variant="subtitle2">Company Name</Typography>
          <div className="flex gap-2 items-center">
            <Button variant="secondary" onClick={() => setIsOpen(true)}>
              Open Drawer
            </Button>
          </div>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center gap-3">
          <img src="/no-alerts.svg" alt="no-alerts" />
          <Typography
            variant="subtitle2"
            className="max-w-[300px] text-center text-[#728192]"
          >
            Set up custom alerts to start monitoring your accounts
          </Typography>
        </div>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          direction="right"
          width="400px"
        >
          <DrawerContent onCancel={handleClose} />
        </Drawer>
      </div>
    </React.Fragment>
  );
}

export default App;
