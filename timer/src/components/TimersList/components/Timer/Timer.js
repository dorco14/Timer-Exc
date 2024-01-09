import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useStyles } from './styles';
import { formatTime } from '/Users/dorcohen/Desktop/Timer-Exc/timer/src/utils/timerUtils'
import { useTimers } from '../../../../contexts/timerContext';

const getTimerTitle = (timerId) => `Timer ${timerId}`;
const PAUSE_BUTTON = 'Pause';
const RESUME_BUTTON = 'Resume';
const STOP_BUTTON = 'Stop';
const REMOVE_BUTTON = 'Remove';

export const Timer = (props) => {
  const { timer } = props;

  const [elapsedTime, setElapsedTime] = useState(timer.elapsedTime);
  const [startTime, setStartTime] = useState(timer.startTime);
  const [isRunning, setIsRunning] = useState(timer.isRunning);

  const store = useTimers();
  const timerClasses = useStyles();
  const timerInterval = useRef(null);

  const startTimer = useCallback(() => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);

    timerInterval.current = requestAnimationFrame(() => {
      setElapsedTime(Date.now() - startTime);
    });
  }, [elapsedTime, startTime]);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerInterval.current);
  }, []);

  useEffect(() => {
    isRunning ? startTimer() : stopTimer();
    return () => clearInterval(timerInterval.current)
      ;
  }, [isRunning, startTimer, stopTimer]);

  const handlePause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleResume = useCallback(() => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);
  }, [elapsedTime]);

  const handleStop = useCallback(() => {
    setIsRunning(false);
    setElapsedTime(0);
  }, []);

  const handleRemove = useCallback(() => {
    store.actions.removeTimer(timer.id);
  }, [timer.id, store]);

  return (
    <div className={timerClasses.timerContainer}>
      <div className={timerClasses.timerText}>{getTimerTitle(timer.id)}</div>
      <div className={timerClasses.timerText}>{formatTime(elapsedTime)}</div>
      <div>
        {isRunning ? (
          <button className={`${timerClasses.timerButton} ${timerClasses.red}`} onClick={handlePause}>{PAUSE_BUTTON}</button>
        ) : (
          <button className={`${timerClasses.timerButton} ${timerClasses.blue}`} onClick={handleResume}>{RESUME_BUTTON}</button>
        )}
      </div>
      <div className={timerClasses.buttonsContainer}>
        <button className={`${timerClasses.timerButton} ${timerClasses.red}`} onClick={handleStop}>{STOP_BUTTON}</button>
        <button className={`${timerClasses.timerButton} ${timerClasses.red}`} onClick={handleRemove}>{REMOVE_BUTTON}</button>
      </div>
    </div>
  );
};
