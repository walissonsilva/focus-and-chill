import { Bird, CloudLightning, CloudRain, Coffee } from "lucide-react";
import { Header } from "./header";
import { PomodoroTimer } from "./pomodoro-timer";
import { SoundToggle } from "./sound-toggle";

export const Screen = () => {
  return (
    <main className="pt-12 px-12 pb-4">
      <Header />

      <section className="flex mt-10 items-center justify-center gap-8">
        <PomodoroTimer />

        <section className="grid grid-rows-2 grid-cols-2 gap-4">
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
