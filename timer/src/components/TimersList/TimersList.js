import React, { Fragment } from 'react';
import { Timer } from './components/Timer/Timer';
import { useTimers } from '../../contexts/timerContext';
import { useStyles } from './styles';
import { TimerButton } from './components/TimerButton';
import { TimerText } from './components/TimerText';

const TIMER_LIST = 'Timer List';
const ADD_TIMER = 'Add Timer';
const GREEN_COLOR = 'green';

export const TimersList = () => {
  const store = useTimers();
  const timersClasses = useStyles();

  return (
    <div>
      <TimerText text={TIMER_LIST}/>
      <div className={timersClasses.divider}></div>
      {
        store.state.timers.map((timer) => (
          <Fragment key={timer.id}>
            <Timer timer={timer} />
            <div className={timersClasses.divider}></div>
          </Fragment>
        ))
      }
      <TimerButton color={GREEN_COLOR} onClick={store.actions.addTimer} text={ADD_TIMER}/>
    </div>
  );
}