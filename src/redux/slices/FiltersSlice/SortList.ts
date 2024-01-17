import { sortPropertyEnum } from './types.ts';

type SortList = {
   name: string;
   sortProperty: sortPropertyEnum;
};

export const list: SortList[] = [
   { name: 'Male', sortProperty: sortPropertyEnum.sex_m },
   { name: 'Female', sortProperty: sortPropertyEnum.sex_f },
   { name: 'Human', sortProperty: sortPropertyEnum.species_h },
   { name: 'Alien', sortProperty: sortPropertyEnum.species_a },
   { name: 'All', sortProperty: sortPropertyEnum.all },
];
