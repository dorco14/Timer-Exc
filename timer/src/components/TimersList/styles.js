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
        '&$green': {
            backgroundColor: '#2ecc71',
            '&:hover': {
                backgroundColor: '#27ae60'
            },
            '&:active': {
                backgroundColor: '#1d8348'
            },
        },
    },
    green: {},
    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: '#ccc',
        margin: '10px 0',
    },
    timerText: {
        fontSize: '32px',
        marginBottom: '1%',
        marginLeft: '1%',
        fontWeight: 'bold',
        color: '#333',
        margin: '10px 0',
    }
})