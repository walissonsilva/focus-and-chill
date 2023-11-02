import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("root");

const root = createRoot(rootNode);
root.render(
  <main className="dark p-8">
    <h1 className="text-4xl">Focus & Chillout</h1>
  </main>
);
