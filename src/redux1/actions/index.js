import { store } from '../../index.js';

export function UpdateUser(newUserName) {
    store.dispatch({
        type: 'UpdateUser',
        payload: {
            userName: newUserName
        }
    });
}


export function UpdateEmail(newEmail) {
    store.dispatch({
        type: 'UpdateEmail',
        payload: {
            userEmail: newEmail
        }
    });
}