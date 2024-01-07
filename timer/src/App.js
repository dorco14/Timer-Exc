import './App.css';
import { Timers } from './components/Timers';
import { TimerProvider } from './components/TimerContext';

function App() {
  return (
    <div className="App">
      <TimerProvider>
        <Timers />
      </TimerProvider>
    </div>
  );
}

export default App;
