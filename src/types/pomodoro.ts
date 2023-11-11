export enum PomodoroStatus {
  FOCUS = 1,
  SHORT_BREAK = 2,
  LONG_BREAK = 3,
}

export type PomodoroData = {
  status: PomodoroStatus;
  time: number;
  interval: NodeJS.Timeout | undefined;
  breaks?: number;
};
