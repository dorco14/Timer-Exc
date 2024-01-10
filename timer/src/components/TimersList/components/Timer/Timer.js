import React, { useState, useRef, useCallback } from 'react';
import { useStyles } from './styles';
import { formatTime } from '/Users/dorcohen/Desktop/Timer-Exc/timer/src/utils/timerUtils'
import { useTimers } from '../../../../contexts/timerContext';
import { TimerButton } from '../TimerButton';
import { TimerText } from '../TimerText';

const getTimerTitle = (timerId) => `Timer ${timerId}`;
const PAUSE_BUTTON = 'Pause';
const RESUME_BUTTON = 'Resume';
const STOP_BUTTON = 'Stop';
const REMOVE_BUTTON = 'Remove';
const RED_BUTTON = 'red';
const BLUE_BUTTON = 'blue';

export const Timer = (props) => {
  const { timer } = props;
  const runningRef = useRef(false);
  const [elapsedTime, setElapsedTime] = useState(timer.elapsedTime);

  const store = useTimers();
  const timerClasses = useStyles();

  const timerInterval = useCallback((time) => {
    if (runningRef.current) {
      requestAnimationFrame(() => {
        setElapsedTime(Date.now() - time);
        timerInterval(time);
      });
    }
  }, []);

  const handlePause = useCallback(() => {
    runningRef.current = false;
  }, []);

  const handleResume = useCallback(() => {
    runningRef.current = true
    timerInterval(Date.now() - elapsedTime);
  }, [elapsedTime, timerInterval]);

  const handleStop = useCallback(() => {
    runningRef.current = false;
    setElapsedTime(0);
  }, []);

  const handleRemove = useCallback(() => {
    store.actions.removeTimer(timer.id);
  }, [timer.id, store]);

  return (
    <div className={timerClasses.timerContainer}>
      <TimerText text={getTimerTitle(timer.id)} />
      <TimerText text={formatTime(elapsedTime)} />
      <div>
        {runningRef.current ? (
          <TimerButton color={RED_BUTTON} text={PAUSE_BUTTON} onClick={handlePause} />
        ) : (
          <TimerButton color={BLUE_BUTTON} text={RESUME_BUTTON} onClick={handleResume} />
        )}
      </div>
      <div className={timerClasses.buttonsContainer}>
        <TimerButton color={RED_BUTTON} text={STOP_BUTTON} onClick={handleStop} />
        <TimerButton color={RED_BUTTON} text={REMOVE_BUTTON} onClick={handleRemove} />
      </div>
    </div>
  );
};