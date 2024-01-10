import React, { useState, useRef, useCallback } from 'react';
import { useStyles } from './styles';
import { formatTime } from '/Users/dorcohen/Desktop/Timer-Exc/timer/src/utils/timerUtils'
import { useTimers } from '../../../../contexts/timerContext';
import { TimerButton } from '../TimerButton';
import { TimerText } from '../TimerText';
import { COLORS } from '../TimerButton/TimerButton';

const getTimerTitle = (timerId) => `Timer ${timerId}`;
const PAUSE_BUTTON = 'Pause';
const RESUME_BUTTON = 'Resume';
const STOP_BUTTON = 'Stop';
const REMOVE_BUTTON = 'Remove';

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
          <TimerButton color={COLORS.red} text={PAUSE_BUTTON} onClick={handlePause} />
        ) : (
          <TimerButton color={COLORS.blue} text={RESUME_BUTTON} onClick={handleResume} />
        )}
      </div>
      <div className={timerClasses.buttonsContainer}>
        <TimerButton color={COLORS.red} text={STOP_BUTTON} onClick={handleStop} />
        <TimerButton color={COLORS.red}  text={REMOVE_BUTTON} onClick={handleRemove} />
      </div>
    </div>
  );
};