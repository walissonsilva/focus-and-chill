import { Bird, CloudLightning, CloudRain, Coffee } from "lucide-react";
import { Header } from "./header";
import { PomodoroTimer } from "./pomodoro-timer";
import { SoundToggle } from "./sound-toggle";

export const Screen = () => {
  return (
    <main className="p-12">
      <Header />

      <section className="flex h-[19.5rem] items-center justify-center gap-8">
        <PomodoroTimer initialPomodoroTimerInMinutes={25} />

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
