import { createContext, ReactNode, useState } from 'react';

type UserContextType = { 
    user: string;
    setUser: (u: string) => void;
};
export const userContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState('Monique');

    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}