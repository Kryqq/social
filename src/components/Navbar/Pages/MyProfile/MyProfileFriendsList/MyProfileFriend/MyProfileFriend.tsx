import React from 'react';

const MyProfileFriend = ({name, image, id}) => {
   return (
      <div>
         <img src={image}></img>
	    <div>{name}</div>
      </div>
   );
};

export default MyProfileFriend;
