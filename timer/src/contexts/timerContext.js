import { useCallback, useMemo, useState, useRef } from "react";
import { getNewTimer } from "../utils/timerUtils";
import constate from "constate";

const useTimersContext = () => {
    const [timers, setTimers] = useState([]);
    const counterId = useRef(0);

    const addTimer = useCallback(() => {
        const newTimer = getNewTimer(counterId.current += 1);
        setTimers((prevTimers) => [...prevTimers, newTimer]);
    }, []);

    const removeTimer = useCallback((timerId) => {
        setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== timerId));
    }, []);

    const store = useMemo(() => {
        return {
            state: { timers },
            actions: { setTimers, addTimer, removeTimer }
        }
    }, [timers, setTimers, addTimer, removeTimer]);

    return store;
};

export const [TimersProvider, useTimers] = constate(useTimersContext);