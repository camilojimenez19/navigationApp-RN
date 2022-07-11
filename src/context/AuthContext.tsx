import React, { createContext, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

/** 1. Definir como luce, que informacion tendré aquí */
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

/** 2. Estado Inicial */
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

/** 3. Lo usaremos para decirle a React como luce y que expone el context */
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

/** 4. Crear el contexto */
export const AuthContext = createContext({} as AuthContextProps);

/** 5. Exponer componente proveedor del estado */
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const handleSignIn = () => {
        dispatch({ type: 'signin'});
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn: handleSignIn,
        }}>
            { children }
        </AuthContext.Provider>
    );
}
