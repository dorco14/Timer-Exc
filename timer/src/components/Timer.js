import React, { useEffect, useState } from 'react';
import { useTimer } from './TimerContext';
import { useTimerStyles } from './TimerStyles';

export const Timer = (props) => {

  const { timer } = props

  const [elapsedTime, setElapsedTime] = useState(timer.elapsedTime)
  const [startTime, setStartTime] = useState(timer.startTime)
  const [isRunning, setIsRunning] = useState(timer.isRunning)

  const { actions } = useTimer()
  const timerClasses = useTimerStyles()

  let timerInterval;

  const startTimer = () => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);

    timerInterval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 10);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerInterval);
  };

  useEffect(() => {
    if (isRunning) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, elapsedTime, startTime]);


  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const handleRemove = (timerId) => {
    actions.removeTimer(timerId);

  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className={timerClasses.timerContainer}>
      <div className={timerClasses.timer}>Timer {timer.id}: </div>
      <div className={timerClasses.timer}>{formatTime(elapsedTime)}</div>
      <div>
        {isRunning ? (
          <button className={timerClasses.redButton} onClick={handlePause}>Pause</button>
        ) : (
          <button className={timerClasses.blueButton} onClick={handleResume}>Resume</button>
        )}
      </div>
      <div className={timerClasses.buttonContainer}>
        <button className={timerClasses.redButton} onClick={handleStop}>Stop</button>

        <button className={timerClasses.redButton} onClick={() => handleRemove(timer.id)}>Remove</button>
      </div>
    </div>
  );
};
