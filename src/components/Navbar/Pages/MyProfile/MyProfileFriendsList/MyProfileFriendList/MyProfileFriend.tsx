import React from 'react';
import styles from './MyProfileFriend.module.scss'
const MyProfileFriend = ({name, image, id}) => {
   return (
      <div className = {styles.myProfileFriend_container}>
         <img src={image} className = {styles.myProfileFriend_container_image}></img>
	    <div>{name}</div>
      </div>
   );
};

export default MyProfileFriend;
