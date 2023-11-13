import { Bird, CloudRain, Coffee, Music } from "lucide-react";
import { Header } from "./header";
import { PomodoroTimer } from "./pomodoro-timer";
import { SoundToggle } from "./sound-toggle";

import CoffeeAudio from "../sounds/coffee-shop.mp3";
import RainAudio from "../sounds/rain.mp3";
import BirdsAudio from "../sounds/birds-nature.mp3";

import music1 from "../sounds/musics/good-night.mp3";
import music2 from "../sounds/musics/save-as.mp3";
import music3 from "../sounds/musics/lifelike.mp3";
import music4 from "../sounds/musics/lofi-study.mp3";
import music5 from "../sounds/musics/once-in-paris.mp3";
import music6 from "../sounds/musics/floating-abstract.mp3";
import music7 from "../sounds/musics/lofi-chill-medium-version.mp3";

export const Screen = () => {
  return (
    <main className="pt-8 px-8 pb-4 draggable rounded-lg">
      <Header />

      <section className="flex flex-col mt-6 justify-center gap-4">
        <PomodoroTimer />

        <section className="flex justify-between align-center gap-4">
          <SoundToggle icon={<Coffee />} soundPaths={[CoffeeAudio]} />
          <SoundToggle icon={<CloudRain />} soundPaths={[RainAudio]} />
          <SoundToggle icon={<Bird />} soundPaths={[BirdsAudio]} />
          <SoundToggle
            icon={<Music />}
            soundPaths={[
              music1,
              music2,
              music3,
              music4,
              music5,
              music6,
              music7,
            ]}
          />
        </section>
      </section>
    </main>
  );
};
