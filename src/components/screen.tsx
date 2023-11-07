import {
  CloudLightning,
  CloudRain,
  Coffee,
  Keyboard,
  PlayCircle,
  StopCircle,
} from "lucide-react";
import { Header } from "./header";
import { Toggle } from "./ui/toggle";
import { Button } from "./ui/button";

export const Screen = () => {
  return (
    <main className="p-12">
      <Header />

      <section className="flex h-[19.5rem] items-center justify-center gap-8">
        <section
          id="timer"
          className="flex flex-col gap-4 border-[1px] border-solid border-text-muted rounded-sm py-4 px-12"
        >
          <p className="text-7xl">25:00</p>
          <div className="flex justify-center align-center gap-4 mt-4">
            <Button variant="ghost" size="icon" className="">
              <StopCircle size={30} />
            </Button>
            <Button variant="ghost" size="icon">
              <PlayCircle size={30} />
            </Button>
          </div>
        </section>

        <section className="flex flex-wrap max-w-[200px] gap-4">
          <Toggle variant="outline" className="h-20 w-20">
            <Coffee size={50} />
          </Toggle>
          <Toggle variant="outline" className="h-20 w-20">
            <CloudRain size={50} />
          </Toggle>
          <Toggle variant="outline" className="h-20 w-20">
            <CloudLightning size={50} />
          </Toggle>
          <Toggle variant="outline" className="h-20 w-20">
            <Keyboard size={50} />
          </Toggle>
        </section>
      </section>
    </main>
  );
};
