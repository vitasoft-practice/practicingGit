import { createContext, useState } from 'react'
import { useStore } from 'react-redux'

interface authContextType {
    user: boolean,
    login: () => void,
    logout: () => void
}

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
})

export const AuthContextProvider = ({ children }: any) => {
    const [user,setUser] = useState(false)

    const login = () => {
        setUser(true);
    }
    const logout = () => {
        setUser(false);
    }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext