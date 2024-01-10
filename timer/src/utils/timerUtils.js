export const formatTime = (time) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
};

export const getNewTimer = (timerId) => {
  return {
    id: timerId,
    startTime: null,
    elapsedTime: 0,
    isRunning: false,
  };
}