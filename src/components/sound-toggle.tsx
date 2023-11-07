import { cloneElement } from "react";
import { Toggle } from "./ui/toggle";

interface SoundToggleProps {
  icon: JSX.Element;
  soundPath: string;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({
  icon,
  soundPath,
}) => {
  const audio = new Audio(soundPath);

  function onPressedChange(pressed: boolean) {
    if (pressed) {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
    }
  }

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
