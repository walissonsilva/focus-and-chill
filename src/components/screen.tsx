import { CloudLightning, CloudRain, Coffee, Keyboard } from "lucide-react";
import { Header } from "./header";
import { Button } from "./ui/button";

export const Screen = () => {
  return (
    <main className="p-12">
      <Header />

      <section className="grid grid-cols-2">
        <Button variant="outline" size="icon" className="mx-auto">
          <Coffee />
        </Button>
        <Button variant="outline" size="icon" className="mx-auto">
          <CloudRain />
        </Button>
        <Button variant="outline" size="icon">
          <CloudLightning />
        </Button>
        <Button variant="outline" size="icon">
          <Keyboard />
        </Button>
      </section>
    </main>
  );
};
