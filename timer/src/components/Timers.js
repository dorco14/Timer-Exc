import React from 'react';
import { Timer } from './Timer';
import { useTimer } from './TimerContext';
import { useTimerStyles } from './TimerStyles';


export const Timers = () => {
  const { values, actions } = useTimer()
  const timerClasses = useTimerStyles()

  return (
    <div>
      <h1 className={timerClasses.timer}>Timer List</h1>
      <div className={timerClasses.divider}></div>

      {
        values.timers.map((timer) => (
          <>
            <Timer key={timer.id} timer={timer} />
            <div className={timerClasses.divider}></div>
          </>
        ))
      }

      <button className={timerClasses.greenButton} onClick={actions.addTimer}>Add Timer</button>
    </div>
  );
}
