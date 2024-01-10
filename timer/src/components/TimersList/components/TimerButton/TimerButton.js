import { useMemo } from 'react';
import { useStyles } from './style';

export const TimerButton = ({ color, text, onClick, children }) => {
    const styles = useStyles();

    const getColorClass = useMemo(() => {
        switch (color) {
            case 'red':
                return styles.red;
            case 'blue':
                return styles.blue;
            case 'green':
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