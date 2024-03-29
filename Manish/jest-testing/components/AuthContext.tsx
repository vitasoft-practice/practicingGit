import { createContext, useState } from 'react'

interface authContextType {
    user: boolean,
    login: () => void,
    logout: () => void
}

const AuthContext = createContext({
    user: false,
    login: () => {},
    logout: () => {},
})

export const AuthContextProvider = ({ children }: any) => {

    const [user, setUser] = useState(false)

    const login = () => {
        console.log("clicked login");
        setUser(true);
    }
    const logout = () => {

        console.log("clicked logout");

        setUser(false);
    }

    const value = {
        user,
        login,
        logout,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext