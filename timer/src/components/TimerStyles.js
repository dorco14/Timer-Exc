import { createUseStyles } from 'react-jss';

export const useTimerStyles = createUseStyles({
    blueButton: {
        marginTop: '1%',
        height: '50px',
        width: '5%',
        marginBottom: '1%',
        marginLeft: '1%',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#3498db',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '#2980b9',
        },

        '&:active': {
            backgroundColor: '#1f618d',
        },
    },

    redButton: {
        marginTop: '1%',
        height: '50px',
        width: '5%',
        marginBottom: '1%',
        marginLeft: '1%',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#e74c3c',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '#c0392b', 
        },

        '&:active': {
            backgroundColor: '#922b21',
        },
    },

    greenButton: {
        marginTop: '1%',
        height: '50px',
        width: '5%',
        marginBottom: '1%',
        marginLeft: '1%',
        padding: '12px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#2ecc71',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',

        '&:hover': {
            backgroundColor: '#27ae60'
        },

        '&:active': {
            backgroundColor: '#1d8348'
        },
    },

    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: '#ccc',
        margin: '10px 0', 
    },

    timerContainer: {
        textAlign: 'center',
        padding: '20px',
    },

    timer: {
        fontSize: '32px',
        marginBottom: '1%',
        marginLeft: '1%',
        fontWeight: 'bold',
        color: '#333',
        margin: '10px 0',
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
})