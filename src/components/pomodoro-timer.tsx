import { PauseCircle, PlayCircle, StopCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface PomodoroTimerProps {
  initialPomodoroTimerInMinutes: number;
}

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  initialPomodoroTimerInMinutes,
}) => {
  const [pomodoroTimeInSeconds, setPomodoroTimeInSeconds] = useState(
    initialPomodoroTimerInMinutes * 60,
  );
  const [pomodoroInterval, setPomodoroInterval] = useState<
    NodeJS.Timeout | undefined
  >(undefined);

  const minutesLeft = Math.floor(pomodoroTimeInSeconds / 60);
  const secondsLeft = pomodoroTimeInSeconds % 60;

  function getFormattedLeftTime() {
    return `${String(minutesLeft).padStart(2, "0")}:${String(
      secondsLeft,
    ).padStart(2, "0")}`;
  }

  function onPlayOrPause() {
    if (pomodoroInterval) {
      clearInterval(pomodoroInterval);
      setPomodoroInterval(undefined);
    } else {
      setPomodoroInterval(
        setInterval(() => {
          setPomodoroTimeInSeconds((time) => time - 1);
        }, 1000),
      );
    }
  }

  function onStop() {
    clearInterval(pomodoroInterval);
    setPomodoroInterval(undefined);
    setPomodoroTimeInSeconds(initialPomodoroTimerInMinutes * 60);
  }

  return (
    <section
      id="timer"
      className="flex flex-col gap-4 border-[1px] border-solid border-text-muted rounded-sm py-4 px-12"
    >
      <p className="text-7xl">{getFormattedLeftTime()}</p>
      <div className="flex justify-center align-center gap-4 mt-4">
        <Button
          variant="ghost"
          size="icon"
          disabled={
            pomodoroTimeInSeconds === initialPomodoroTimerInMinutes * 60
          }
          onClick={onStop}
        >
          <StopCircle size={30} />
        </Button>
        <Button variant="ghost" size="icon" onClick={onPlayOrPause}>
          {!pomodoroInterval ? (
            <PlayCircle size={30} />
          ) : (
            <PauseCircle size={30} />
          )}
        </Button>
      </div>
    </section>
  );
};
