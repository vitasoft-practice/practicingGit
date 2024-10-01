export const ApiUrl: String = "http://localhost:5000"

export type CardType = {
    id: number,
    name: string,
    role: string
}

export type UserT = {
    _id: string,
    first_name: string,
    last_name: string
    email: string
    phone_number: number
}

export const publicRoutes = new Set(['/login', '/signup'])