import { createRoot } from "react-dom/client";
import { Screen } from "./components/screen";
import { PomodoroProvider } from "./hooks/usePomodoro";

const rootNode = document.getElementById("root");

const root = createRoot(rootNode);
root.render(
  <PomodoroProvider>
    <Screen />
  </PomodoroProvider>
);
