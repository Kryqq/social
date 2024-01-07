import React, { useContext } from 'react';
import styles from './LoginMenu.module.scss';
import { useAppDispatch } from '../../../redux/store/store.tsx';
import { logoutUser } from '../../../redux/auth/actionCreators.ts';
import { useNavigate } from 'react-router-dom';

const LoginMenu = () => {
   const [isOpen, setOpen] = React.useState(false);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const handleLogout = () => {
      dispatch(logoutUser());
      navigate('/');
   };
   return (
      <div className={styles.loginMenu__container}>
         <div className={styles.loginMenu}>
            <div className={styles.loginMenu__wrapper}>
               <div className={styles.loginMenu__svg}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="#ffff"
                     width="20px"
                     height="20px"
                     viewBox="-5.5 0 19 19"
                     className="cf-icon-svg"
                  >
                     <path d="M7.987 5.653a4.536 4.536 0 0 1-.149 1.213 4.276 4.276 0 0 1-.389.958 5.186 5.186 0 0 1-.533.773c-.195.233-.386.454-.568.658l-.024.026c-.17.18-.328.353-.468.516a3.596 3.596 0 0 0-.4.567 2.832 2.832 0 0 0-.274.677 3.374 3.374 0 0 0-.099.858v.05a1.03 1.03 0 0 1-2.058 0v-.05a5.427 5.427 0 0 1 .167-1.385 4.92 4.92 0 0 1 .474-1.17 5.714 5.714 0 0 1 .63-.89c.158-.184.335-.38.525-.579.166-.187.34-.39.52-.603a3.108 3.108 0 0 0 .319-.464 2.236 2.236 0 0 0 .196-.495 2.466 2.466 0 0 0 .073-.66 1.891 1.891 0 0 0-.147-.762 1.944 1.944 0 0 0-.416-.633 1.917 1.917 0 0 0-.62-.418 1.758 1.758 0 0 0-.723-.144 1.823 1.823 0 0 0-.746.146 1.961 1.961 0 0 0-1.06 1.062 1.833 1.833 0 0 0-.146.747v.028a1.03 1.03 0 1 1-2.058 0v-.028a3.882 3.882 0 0 1 .314-1.56 4.017 4.017 0 0 1 2.135-2.139 3.866 3.866 0 0 1 1.561-.314 3.792 3.792 0 0 1 1.543.314A3.975 3.975 0 0 1 7.678 4.09a3.933 3.933 0 0 1 .31 1.563zm-2.738 9.81a1.337 1.337 0 0 1 0 1.033 1.338 1.338 0 0 1-.71.71l-.005.003a1.278 1.278 0 0 1-.505.103 1.338 1.338 0 0 1-1.244-.816 1.313 1.313 0 0 1 .284-1.451 1.396 1.396 0 0 1 .434-.283 1.346 1.346 0 0 1 .526-.105 1.284 1.284 0 0 1 .505.103l.005.003a1.404 1.404 0 0 1 .425.281 1.28 1.28 0 0 1 .285.418z" />
                  </svg>
               </div>
               <div className={styles.loginMenu__userLogin}>
                  <button onClick={() => setOpen(!isOpen)} className={styles.loginMenu__userLoginBtn}>
                     Login
                  </button>
                  <div className={isOpen ? styles.popupContentMenuActive : styles.popupContentMenu}>
                     <div className={styles.popupContent} onClick={handleLogout}>
                        Выйти из профиля
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginMenu;
