import { PauseCircle, PlayCircle, StopCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { PomodoroData, PomodoroStatus } from "../types/pomodoro";
import { Button } from "./ui/button";

import afterBreakAudio from "../sounds/effects/after-break.mp3";
import afterFocusAudio from "../sounds/effects/after-focus.mp3";
import { usePomodoro } from "../hooks/usePomodoro";

export const PomodoroTimer: React.FC = () => {
  const { timeForPomodoroStatusInSeconds } = usePomodoro();

  const [pomodoro, setPomodoro] = useState({
    time: timeForPomodoroStatusInSeconds[PomodoroStatus.FOCUS],
    status: PomodoroStatus.FOCUS,
    interval: undefined,
    breaks: 0,
  } as PomodoroData);

  const minutesLeft = Math.floor(pomodoro.time / 60);
  const secondsLeft = pomodoro.time % 60;

  function getFormattedLeftTime() {
    return `${String(minutesLeft).padStart(2, "0")}:${String(
      secondsLeft
    ).padStart(2, "0")}`;
  }

  const handleInterval = useCallback(() => {
    setPomodoro((currentPomodoroData) => {
      const timeUpdated = currentPomodoroData.time - 1;
      if (timeUpdated === 0) {
        switch (currentPomodoroData.status) {
          case PomodoroStatus.FOCUS:
            if (currentPomodoroData.breaks < 3) {
              return {
                ...currentPomodoroData,
                time: timeForPomodoroStatusInSeconds[
                  PomodoroStatus.SHORT_BREAK
                ],
                status: PomodoroStatus.SHORT_BREAK,
                breaks: currentPomodoroData.breaks + 1,
              };
            } else {
              return {
                ...currentPomodoroData,
                time: timeForPomodoroStatusInSeconds[PomodoroStatus.LONG_BREAK],
                status: PomodoroStatus.LONG_BREAK,
                breaks: 0,
              };
            }
          default:
            return {
              ...currentPomodoroData,
              time: timeForPomodoroStatusInSeconds[PomodoroStatus.FOCUS],
              status: PomodoroStatus.FOCUS,
            };
        }
      } else {
        return {
          ...currentPomodoroData,
          time: timeUpdated,
        };
      }
    });
  }, []);

  function onPlayOrPause() {
    if (pomodoro.interval) {
      clearInterval(pomodoro.interval);
      setPomodoro({
        ...pomodoro,
        interval: undefined,
      });
    } else {
      setPomodoro({
        ...pomodoro,
        interval: setInterval(handleInterval, 1000),
      });
    }
  }

  function onStop() {
    clearInterval(pomodoro.interval);
    setPomodoro((currentPomodoro) => ({
      ...currentPomodoro,
      interval: undefined,
      time: timeForPomodoroStatusInSeconds[pomodoro.status],
    }));
  }

  useEffect(() => {
    if (!pomodoro.interval) return;

    if (pomodoro.status === PomodoroStatus.FOCUS) {
      const audio = new Audio(afterBreakAudio);
      audio.play();

      new Notification("Break timer is over", {
        body: "Start your focus time!",
      });
    } else {
      const audio = new Audio(afterFocusAudio);
      audio.play();

      new Notification("Pomodoro timer is over", {
        body: "It's time to take a break!",
      });
    }

    clearInterval(pomodoro.interval);
    setPomodoro((currentPomodoro) => ({
      ...currentPomodoro,
      interval: undefined,
    }));
  }, [pomodoro.status]);

  return (
    <section
      id="timer"
      className="flex flex-col gap-2 flex-1 border-[1px] border-solid border-text-muted rounded-lg py-4 px-12"
    >
      <h2 className="text-center text-sm font-light">
        {pomodoro.status === PomodoroStatus.FOCUS ? "Focus Time" : "Break Time"}
      </h2>
      <p className="text-6xl text-center">{getFormattedLeftTime()}</p>
      <div className="flex justify-center align-center gap-4 mt-2">
        <Button
          variant="ghost"
          size="icon"
          disabled={
            pomodoro.time ===
            timeForPomodoroStatusInSeconds[PomodoroStatus.FOCUS]
          }
          onClick={onStop}
          className="not-draggable"
        >
          <StopCircle size={30} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onPlayOrPause}
          className="not-draggable"
        >
          {!pomodoro.interval ? (
            <PlayCircle size={30} />
          ) : (
            <PauseCircle size={30} />
          )}
        </Button>
      </div>
    </section>
  );
};
