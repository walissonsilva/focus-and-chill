import { PomodoroStatus } from "../types/pomodoro";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type PomodoroContextData = {
  timeForPomodoroStatusInSeconds: Record<PomodoroStatus, number>;
};

const PomodoroContext = createContext<PomodoroContextData>(
  {} as PomodoroContextData
);

export const PomodoroProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [timeForPomodoroStatusInSeconds, setTimeForPomodoroInSeconds] =
    useState<Record<PomodoroStatus, number>>({
      [PomodoroStatus.FOCUS]: 25 * 60,
      [PomodoroStatus.SHORT_BREAK]: 5 * 60,
      [PomodoroStatus.LONG_BREAK]: 20 * 60,
    });

  useEffect(() => {
    const getPomodoroTimersFromLocalStorage =
      localStorage.getItem("pomodoroTimers");

    if (getPomodoroTimersFromLocalStorage) {
      setTimeForPomodoroInSeconds(
        JSON.parse(getPomodoroTimersFromLocalStorage)
      );
    }
  }, []);

  return (
    <PomodoroContext.Provider value={{ timeForPomodoroStatusInSeconds }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error(`usePomodoro must be used inside of a PomodoroProvider`);
  }

  return context;
};
