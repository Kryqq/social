import React, { FormEvent } from 'react';
import styles from './LoginMenu.module.scss';
import { loginUser } from '../../redux/auth/actionCreators.ts';
import { useAppDispatch } from '../../redux/store/store.tsx';
import { useForm } from 'react-hook-form';

const LoginMenu = () => {
   const dispatch = useAppDispatch();
   //    const [login, setLogin] = React.useState('');
   //    const [password, setPassword] = React.useState('');
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const submitHandler = ({ login, password }) => {
 

      dispatch(loginUser({ login, password }));
   };
   return (
      <div>
         <form onSubmit={handleSubmit(submitHandler)}>
            <label>
               login:
               <input {...register('login', { required: 'Поле обязательно к заполнению', minLength: 5 })}></input>
            </label>
            <div>{errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}</div>
            <label>
               password:
               <input {...register('password', { required: 'Поле обязательно к заполнению', minLength: 5 })}></input>
            </label>
            <div>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
            <input type="submit"></input>
         </form>
      </div>
   );
};

export default LoginMenu;

// {
//    /* <div className={styles.popup__wrapper}>
// <div className={styles.content}>
//    <div className={styles.popup__login_icon}>
// 	 <svg fill="#000000" width="100px" height="100px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// 	    <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
// 	 </svg>
//    </div>
//    <div>
// 	 <form className={styles.popup__login} onSubmit={submitHandler}>
// 	    <div className={styles.popup__login_info}>
// 		  <div className={styles.popup__login_info_input}>
// 			<input
// 			   className={styles.popup__login_info_input_pos}
// 			   name="login"
// 			   type="text"
// 			   value={login}
// 			   onChange={(e) => setLogin(e.target.value)}
// 			></input>
// 			<svg
// 			   width="22px"
// 			   height="20px"
// 			   className={styles.popup__login_info_svg}
// 			   viewBox="0 -0.5 25 25"
// 			   xmlns="http://www.w3.org/2000/svg"
// 			>
// 			   <path
// 				 d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
// 				 fill="#000000"
// 			   />
// 			</svg>
// 		  </div>
// 		  <label htmlFor="login">Login</label>
// 	    </div>
// 	    <div className={styles.popup__login_info}>
// 		  <div className={styles.popup__login_info_input}>
// 			<input
// 			   className={styles.popup__login_info_input_pos}
// 			   name="password"
// 			   type="text"
// 			   value={password}
// 			   onChange={(e) => setPassword(e.target.value)}
// 			></input>
// 			<svg
// 			   width="22px"
// 			   height="20px"
// 			   className={styles.popup__login_info_svg}
// 			   viewBox="0 -0.5 25 25"
// 			   xmlns="http://www.w3.org/2000/svg"
// 			>
// 			   <path
// 				 d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
// 				 fill="#000000"
// 			   />
// 			</svg>
// 		  </div>
// 		  <label htmlFor="password">Password</label>
// 	    </div>
// 	    <button>submit</button>
// 	 </form>
//    </div>
// </div>
// </div> */
// }
