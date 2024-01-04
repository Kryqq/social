import { axiosInstance } from '../instatnce';
import { IloginResponse, ILoginRequest } from '../types';
import Endpoints from '../endpoints';
import { AxiosPromise } from 'axios';
export const login = (params: ILoginRequest): AxiosPromise<IloginResponse> =>
   axiosInstance.post(Endpoints.AUTH.LOGIN, params);
