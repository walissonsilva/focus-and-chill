import { createRoot } from "react-dom/client";
import { Screen } from "./components/screen";

const rootNode = document.getElementById("root");

const root = createRoot(rootNode);
root.render(<Screen />);
