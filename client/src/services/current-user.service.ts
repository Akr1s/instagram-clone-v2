import { axiosInstance } from '../api/axios';
import { IUser } from '../interfaces/user.interface';

export class CurrentUserService {
    public static getCurrentUser(): Promise<IUser> {
        const url = 'users/me';

        return axiosInstance.get(url).then((res) => res.data);
    }
}
