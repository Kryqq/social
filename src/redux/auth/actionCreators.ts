import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api/index.ts';
import { ILoginRequest } from '../../api/types';
import { loginStart, loginSucess, loginFailure, logoutSuccess } from '../auth/authReducer.ts';

export const loginUser =
   (data: ILoginRequest) =>
   async (dispatch: Dispatch<any>): Promise<void> => {
      try {
         dispatch(loginStart());

         const res = await api.auth.login(data);

         dispatch(loginSucess(res.data.accessToken));
         //     dispatch(getProfile());
      } catch (e: any) {
         console.error(e);

         dispatch(loginFailure(e.message));
      }
   };
export const logoutUser =
   () =>
   async (dispatch: Dispatch): Promise<void> => {
      try {
         await api.auth.logout();
         dispatch(logoutSuccess());
      } catch (e) {
         console.log(e);
      }
   };
