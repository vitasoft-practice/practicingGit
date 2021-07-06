import React, { useContext } from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import AuthContext, { AuthContextProvider } from '../components/AuthContext'
import IsLoggedIn from '../components/IsLoggedIn'

let getByTestId: any;

describe('should auth components render correctly', () => {

    afterEach(cleanup)

    it('Login and logout works correctly', () => {
        const TestComponents = () => {
            const { user, login, logout } = useContext(AuthContext)
            return (
                <>
                    <h2 data-testid='userStatus' >{user ? "login" : "logout"}</h2>

                    <button data-testid='userlogin' onClick={login}>Login</button>
                    <button data-testid='userlogout' onClick={logout}>Logout</button>
                </>
            )

        }
        const { getByTestId } = render(<AuthContextProvider>
            <TestComponents />
        </AuthContextProvider>
        )
        expect(getByTestId('userStatus').textContent).toBe('logout');

        fireEvent.click(getByTestId('userlogout'));

        expect(getByTestId('userStatus').textContent).toBe('logout');


    })

})