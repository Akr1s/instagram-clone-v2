import { axiosInstance } from '../../api/axios';
import { IUser } from '../../interfaces/user.interface';
import { ISignInForm, ISignUpForm } from './auth.type';

export class AuthService {
    public static signIn(values: ISignInForm): Promise<IUser> {
        const url = 'auth/signin';
        const data = values;

        return axiosInstance.post(url, data).then((res) => res.data);
    }

    public static signUp(values: ISignUpForm): Promise<void> {
        const url = 'auth/signup';
        const data = values;

        return axiosInstance.post(url, data);
    }

    public static signOut(): Promise<void> {
        const url = 'auth/signout';

        return axiosInstance.post(url);
    }
}
