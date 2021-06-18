import { MockModel } from "../../database/test/mock.model";
import { User } from "../schemas/user.schema";
import { userStub } from "./user.stub";

export class UserModel extends MockModel<User>{
    protected entityStub = userStub()
}