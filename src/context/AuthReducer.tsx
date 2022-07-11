import { AuthState } from './AuthContext';

type AuthAction = {
    type: 'signin'
}


/** Funcion que genera estado */
export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signin':

            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            }
        default:
            return state;
    }
}
