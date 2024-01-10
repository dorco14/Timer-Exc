import { useMemo } from 'react';
import { useStyles } from './style';

export const COLORS = {
    red: 'red',
    blue: 'blue',
    green: 'green'
}

export const TimerButton = ({ color, text, onClick, children }) => {
    const styles = useStyles();

    const getColorClass = useMemo(() => {
        switch (color) {
            case COLORS.red:
                return styles.red;
            case COLORS.blue:
                return styles.blue;
            case COLORS.green:
                return styles.green;
            default:
                return '';
        }
    }, [styles, color]);

    return (
        <button className={`${styles.timerButton} ${getColorClass}`} onClick={onClick}>
            {text}
            {children}
        </button>
    )
}