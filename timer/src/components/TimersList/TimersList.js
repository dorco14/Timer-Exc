import React, { Fragment } from 'react';
import { Timer } from './components/Timer/Timer';
import { useTimers } from '../../contexts/timerContext';
import { useStyles } from './styles';
import { TimerButton } from './components/TimerButton';
import { TimerText } from './components/TimerText';
import { COLORS } from './components/TimerButton/TimerButton';

const TIMERS_LIST_TEXT = 'Timers List';
const ADD_TIMER_TEXT = 'Add Timer';

export const TimersList = () => {
  const store = useTimers();
  const timersClasses = useStyles();

  return (
    <div>
      <TimerText text={TIMERS_LIST_TEXT} />
      <div className={timersClasses.divider}></div>
      {
        store.state.timers.map((timer) => (
          <Fragment key={timer.id}>
            <Timer timer={timer} />
            <div className={timersClasses.divider}></div>
          </Fragment>
        ))
      }
      <TimerButton color={COLORS.green} onClick={store.actions.addTimer} text={ADD_TIMER_TEXT} />
    </div>
  );
}