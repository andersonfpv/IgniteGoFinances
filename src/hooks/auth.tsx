import React, { 
    createContext,
    ReactNode,
    useContext 
} from "react";
import { UseFormReset } from "react-hook-form";


interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    emai: string;
    photo?: string;
}

interface IAuthContextData {
    user: User;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const user = {
        id: '1234',
        name: 'Anderson Felipe',
        email: 'anderson.ti.senac@gmail.com',
    };

    return(
        <AuthContext.Provider value={{ user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
