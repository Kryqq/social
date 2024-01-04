import { axiosInstance } from '../auth/instatnce';
import { IloginResponse, iLoginRequest } from './types';
import Endpoints from './endpoints';
import { AxiosPromise } from 'axios';
export const login = (params: iLoginRequest): AxiosPromise<IloginResponse> =>
   axiosInstance.post(Endpoints.AUTH.LOGIN, params);
