import { authInitialState, AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signin' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string }


/** Funcion que genera estado */
export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signin':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            }
        case 'logout':
            return {
                ...authInitialState,
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            }
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
            }
        default:
            return state;
    }
}
