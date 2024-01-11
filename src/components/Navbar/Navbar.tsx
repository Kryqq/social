import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const NavBar: React.FC = () => {
   const getTabValueFromPath = (path: string): number => {
      switch (path) {
         case '/myProfile':
            return 0;
         case '/myFriends':
            return 1;
         case '/possibleFriends':
            return 2;
         case '/news':
            return 3;
         default:
            return 0;
      }
   };

   const location = useLocation();
   const [value, setValue] = React.useState<number>(getTabValueFromPath(location.pathname));

   const handleChange = (newValue: number) => {
      setValue(newValue);
   };

   useEffect(() => {
      setValue(getTabValueFromPath(location.pathname));
   }, [location.pathname]);

   return (
      <Tabs orientation="vertical" value={value} onChange={handleChange}>
         <Tab label="Профиль" component={Link} to="/myProfile" />
         <Tab label="Мои друзья" component={Link} to="/myFriends" />
         <Tab label="Возможные друзья" component={Link} to="/possibleFriends" />
         <Tab label="Новости" component={Link} to="/news" />
      </Tabs>
   );
};

export default NavBar;
