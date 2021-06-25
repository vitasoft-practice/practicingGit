import { User } from "../schemas/user.schema";


export const userStub = (): User  => {
    return{
        id: 1,
        name: 'akash'
    }
}