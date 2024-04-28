import { axiosInstance } from '../api/axios';
import { ISignInForm, ISignUpForm } from '../views/auth/auth.type';

export class AuthService {
    public static signIn(values: ISignInForm): Promise<void> {
        const url = 'auth/signin';
        const data = values;

        return axiosInstance.post(url, data);
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
