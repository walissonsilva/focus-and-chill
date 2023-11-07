import {
  Bird,
  CloudLightning,
  CloudRain,
  Coffee,
  PlayCircle,
  StopCircle,
} from "lucide-react";
import { Header } from "./header";
import { SoundToggle } from "./sound-toggle";
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
            <Button variant="ghost" size="icon">
              <StopCircle size={30} />
            </Button>
            <Button variant="ghost" size="icon">
              <PlayCircle size={30} />
            </Button>
          </div>
        </section>

        <section className="flex flex-wrap max-w-[200px] gap-4">
          <SoundToggle
            icon={<Coffee />}
            soundPath="src/sounds/coffee-shop.mp3"
          />
          <SoundToggle icon={<CloudRain />} soundPath="src/sounds/rain.mp3" />
          <SoundToggle
            icon={<CloudLightning />}
            soundPath="src/sounds/thunderstorm.mp3"
          />
          <SoundToggle
            icon={<Bird />}
            soundPath="src/sounds/birds-nature.mp3"
          />
        </section>
      </section>
    </main>
  );
};
