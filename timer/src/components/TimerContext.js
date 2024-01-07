import React, { createContext, useContext, useState } from "react";

export const TimerContext = createContext({
    values: {
        timers: []
    },
    actions: {
        setTimers: () => { },
        addTimer: () => { }
    }
})

export const TimerProvider = ({ children }) => {
    const [timers, setTimers] = useState([])
    const [id, setId] = useState(0)

    const addTimer = () => {
        setId((prevCounter) => prevCounter + 1)
        const newTimer = {
            id: id,
            startTime: null,
            elapsedTime: 0,
            isRunning: false,
        };

        setTimers((prevTimers) => [...prevTimers, newTimer]);
    }

    const removeTimer = (timerId) => {
        setTimers(timers.filter((timer) => timer.id !== timerId))
    }

    return (
        <TimerContext.Provider value={{
            values: { timers },
            actions: { setTimers, addTimer , removeTimer }
        }} >
            {children}
        </TimerContext.Provider>
    )
}

export const useTimer = () => {
    return useContext(TimerContext)
}