import { Button, Drawer, Typography } from "f1-demo-components";
import "f1-demo-components/dist/index.css"; // Import styles
import { useState } from "react";
import DrawerContent from "./components/DrawerContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Typography variant="subtitle2" className="">
        This demo uses storybook components as npm package.
      </Typography>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        width="400px"
      >
        <DrawerContent onCancel={handleClose} />
      </Drawer>
    </div>
  );
}

export default App;
