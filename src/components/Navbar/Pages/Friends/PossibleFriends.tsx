import React from 'react';
import styles from './PossibleFriends.module.scss';

import { Friend } from './Friend/PossibleFriend.tsx';
import { useSelector} from 'react-redux';
import { fetchFriends, iFriendList } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';

import { useAppDispatch } from '../../../../redux/store/store.tsx';

const Friends: React.FC = () => {
   const dispatch = useAppDispatch();
  
   const friends = useSelector((state: {govnoJopa:iFriendList}) =>{

	return state.govnoJopa.friends} );




	
   React.useEffect(() => {
      dispatch(fetchFriends());
   }, [fetchFriends]);

   return (
      <div>
         {friends ? (
            <div className={styles.friends__wrapper}>
               {friends.map((friend: any) => (
                  <Friend key={friend.id} {...friend} />
               ))}
            </div>
         ) : (
            'загрузка'
         )}
      </div>
   );
};

export default Friends;
