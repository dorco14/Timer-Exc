import { useStyles } from "./style"

export const TimerText = ({ text , children}) => {
    const styles = useStyles();

    return (
        <h1 className={styles.timerText}>
            {text}
            {children}
        </h1>
    )
}