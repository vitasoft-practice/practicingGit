import { createContext, useState } from 'react'
import { useStore } from 'react-redux'

interface authContextType {
    user: boolean,
    login: () => void,
    logout: () => void
}

const AuthContext = createContext({
    user: false,
    login: () => { },
    logout: () => { },
})

export const AuthContextProvider = ({ children }: any) => {

    const [user, setUser] = useState(false)

    const login = () => {
        setUser(true);
    }
    const logout = () => {
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