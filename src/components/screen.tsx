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
import music6 from "../sounds/musics/easy-lifestyle.mp3";
import music7 from "../sounds/musics/floating-abstract.mp3";
import music8 from "../sounds/musics/lofi-chill-medium-version.mp3";

export const Screen = () => {
  return (
    <main className="pt-12 px-12 pb-4">
      <Header />

      <section className="flex mt-10 items-center justify-center gap-8">
        <PomodoroTimer />

        <section className="grid grid-rows-2 grid-cols-2 gap-4">
          <SoundToggle icon={<Coffee />} soundPaths={[CoffeeAudio]} />
          <SoundToggle icon={<CloudRain />} soundPaths={[RainAudio]} />
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
              music8,
            ]}
          />
          <SoundToggle icon={<Bird />} soundPaths={[BirdsAudio]} />
        </section>
      </section>
    </main>
  );
};
