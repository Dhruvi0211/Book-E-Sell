import { CreateUserModel, LoginModel } from "../models/AuthModel";
import UserModel from "../models/UserModel";
import request from "./request";

class AuthService {
    ENDPOINT = 'api/public';

    public async login(data: LoginModel): Promise<UserModel> {
        const url = 'api/public/login';
        return request.post(url, data).then((res) => {
            return res.data as UserModel;
        });
    }

    public async create(model: CreateUserModel): Promise<CreateUserModel> {
        const url = 'api/public/register';
        return request.post<CreateUserModel>(url, model).then((res) => {
        return res.data;
        });
    }
}
export default new AuthService();
