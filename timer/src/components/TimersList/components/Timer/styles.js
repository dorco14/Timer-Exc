import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    timerButton: {
        marginTop: '1%',
        height: '50px',
        width: '5%',
        marginBottom: '1%',
        marginLeft: '1%',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '50px',
        cursor: 'pointer',
        color: '#fff',
        border: 'none',
        '&$blue': {
            backgroundColor: '#3498db',
            '&:hover': {
                backgroundColor: '#2980b9',
            },
            '&:active': {
                backgroundColor: '#1f618d',
            },
        },
        '&$red': {
            backgroundColor: '#e74c3c',
            '&:hover': {
                backgroundColor: '#c0392b',
            },
            '&:active': {
                backgroundColor: '#922b21',
            },
        },
    },
    timerContainer: {
        textAlign: 'center',
        padding: '20px',
    },
    timerText: {
        fontSize: '32px',
        marginBottom: '1%',
        marginLeft: '1%',
        fontWeight: 'bold',
        color: '#333',
        margin: '10px 0',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    red: {},
    blue: {}
})