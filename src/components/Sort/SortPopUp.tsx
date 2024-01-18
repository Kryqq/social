import React, { useRef, useState } from 'react';

import { useAppDispatch } from '../../redux/store/store.tsx';
import { setSortPossibleFriendSlice } from '../../redux/slices/FiltersSlice/FiltersSlice.ts';
import styles from './SortPopUp.module.scss';
import { Sort, sortPropertyEnum } from '../../redux/slices/FiltersSlice/types.ts';
import { list } from '../../redux/slices/FiltersSlice/SortList.ts';

const SortPopUp: React.FC = () => {
   const dispatch = useAppDispatch();
   const sortRef = React.useRef<HTMLDivElement>(null);
  
   const [currentSort, setCurrentSort] = useState<Sort>({ name: 'All', sortProperty: sortPropertyEnum.all });

   const onClickListItem = (obj: Sort) => {
      setCurrentSort(obj);
      dispatch(setSortPossibleFriendSlice(obj));
      setOpen(false);
   };

   const [open, setOpen] = React.useState(false);

   const handleClickOutside = (event: MouseEvent) => {
      const current = sortRef.current;
      const path = event.composedPath();

      if (current && !path.includes(current)) {
         setOpen(false);
      }
   };

   React.useEffect(() => {
      document.body.addEventListener('click', handleClickOutside);
      return () => {
         document.body.removeEventListener('click', handleClickOutside);
      };
   }, []);

   return (
      <div ref={sortRef}>
         <span onClick={() => setOpen(!open)} className={styles.sortRef}>
            {currentSort.name}
         </span>

         {open && (
            <div>
               {list.map((obj, index) => (
                  <div onClick={() => onClickListItem(obj)} key={index}>
                     {obj.name}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default SortPopUp;
