import { cloneElement, useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

interface SoundToggleProps {
  icon: JSX.Element;
  soundPaths: string[];
}

export const SoundToggle: React.FC<SoundToggleProps> = ({
  icon,
  soundPaths,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement>(
    new Audio(soundPaths[Math.floor(Math.random() * soundPaths.length)]),
  );
  const [pressed, setPressed] = useState(false);

  function onPressedChange() {
    const newPressed = !pressed;

    if (soundPaths.length === 1) {
      if (newPressed) {
        audio.loop = true;
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      if (newPressed) {
        audio.play();
        audio.addEventListener("ended", () => {
          setAudio(
            new Audio(
              soundPaths[Math.floor(Math.random() * soundPaths.length)],
            ),
          );
        });
      } else {
        audio.pause();
      }
    }

    setPressed(newPressed);
  }

  useEffect(() => {
    if (pressed) {
      audio.play();
      audio.addEventListener("ended", () => {
        setAudio(
          new Audio(soundPaths[Math.floor(Math.random() * soundPaths.length)]),
        );
      });
    }
  }, [audio]);

  return (
    <Toggle
      variant="outline"
      className="h-20 w-20"
      onPressedChange={onPressedChange}
    >
      {cloneElement(icon, {
        size: 50,
      })}
    </Toggle>
  );
};
