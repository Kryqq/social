import { axiosInstance } from '../instatnce.ts';
import { IloginResponse, ILoginRequest } from '../types';
import Endpoints from '../endpoints.ts';
import { AxiosPromise } from 'axios';

export const login = (params: ILoginRequest): AxiosPromise<IloginResponse> =>
   axiosInstance.post(Endpoints.AUTH.LOGIN, params);

export const logout = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.LOGOUT);
