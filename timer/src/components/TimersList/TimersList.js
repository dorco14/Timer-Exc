import React, { Fragment } from 'react';
import { Timer } from './components/Timer/Timer';
import { useTimers } from '../../contexts/timerContext';
import  { useStyles } from './styles';

const TIMER_LIST = 'Timer List';
const ADD_TIMER = 'Add Timer';

export const TimersList = () => {
  const store = useTimers();
  const timersClasses = useStyles();

  return (
    <div>
      <h1 className={timersClasses.timerText}>{TIMER_LIST}</h1>
      <div className={timersClasses.divider}></div>
      {
        store.state.timers.map((timer) => (
          <Fragment key={timer.id}>
            <Timer timer={timer} />
            <div className={timersClasses.divider}></div>
          </Fragment>
        ))
      }
      <button className={`${timersClasses.timerButton} ${timersClasses.green}`} onClick={store.actions.addTimer}>{ADD_TIMER}</button>
    </div>
  );
}
