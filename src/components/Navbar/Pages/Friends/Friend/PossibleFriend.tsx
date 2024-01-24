import React from 'react';
import styles from './PossibleFriend.module.scss';
import { useAppDispatch } from '../../../../../redux/store/store.tsx';
import { deleteFriendSlice } from '../../../../../redux/slices/FriendSlice/FrinendsSlice.ts';
import { Link } from 'react-router-dom';
import { addFriend } from '../../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';
import { Button, Paper, colors, useTheme } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { resultsFriend } from '../../../../../redux/slices/FriendSlice/types.ts';

export const Friend: React.FC<resultsFriend> = ({
   id,
   name,
   gender,
   image,
   location,
   species,
   status,
   type,
   origin,
   episode,
   url,
   created,
}) => {
   const theme = useTheme();
   const dispatch = useAppDispatch();
   const deleteFriend = () => {
      dispatch(deleteFriendSlice(id));
   };

   const handleAddFriend = () => {
      dispatch(addFriend({ id, name, gender, image, location, species, status, type, origin, episode, url, created }));
      dispatch(deleteFriendSlice(id));
   };

   return (
      <Paper variant="outlined" className={styles.friend__container}>
         <div className={styles.friend__wrapper}>
            <div className={styles.image__wrapper}>
               <Link to={`/possiblefriends/possiblefriend/${id}`}>
                  <img src={image}></img>
               </Link>
               <div className={styles.button__wrapper}>
                  <Button
                     sx={{
                        width: 180,
                        backgroundColor: theme.palette.primary.main,
                        ':hover': {
                           backgroundColor: theme.palette.secondary.main,
                        },
                     }}
                     variant="contained"
                     onClick={deleteFriend}
                     startIcon={<PersonRemoveIcon sx={{ width: 25, height: 25 }} />}
                     className={styles.button__addTo_friend}
                  >
                     Больше не показывать
                  </Button>
                  <Button
                     sx={{
                        margin: 1,
                        width: 180,
                        backgroundColor: theme.palette.primary.main,
                        ':hover': {
                           backgroundColor: theme.palette.secondary.main,
                        },
                     }}
                     onClick={handleAddFriend}
                     className={styles.button__send_message}
                     variant="contained"
                     startIcon={<PersonAddIcon sx={{ width: 25, height: 25 }} />}
                  >
                     Добавить в друзья
                  </Button>
               </div>
            </div>
            <div className={styles.span__wrapper}>
               <span className={styles.span__name}>
                  <Link to={`/possiblefriends/possiblefriend/${id}`}>{name}</Link>
               </span>
               <span className={styles.span__gender}>Gender: {gender} </span>
               <span className={styles.span__location}> Location: {location.name} </span>
               <span className={styles.span__species}> Species: {species} </span>
            </div>
         </div>
      </Paper>
   );
};
