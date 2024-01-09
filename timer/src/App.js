import { TimersList } from './components/TimersList';
import {TimersProvider} from './contexts/timerContext'
import { useAppStyles } from './appStyles';

export const App = () => {
  const appClasses = useAppStyles();

  return (
    <div className={appClasses.app}>
      <TimersProvider>
        <TimersList />
      </TimersProvider>
    </div>
  );
}