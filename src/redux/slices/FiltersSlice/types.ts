export type searchType = {
   searchValue: string;
};

export enum sortPropertyEnum {
   all = 'All',
   sex_m = 'Male',
   sex_f = 'Female',
   species_h = 'Human',
   species_a = 'Alien',
}

export type Sort = {
   name: string;
   sortProperty: sortPropertyEnum;
};

export type Filters = {
   searchValue: string;
   sortValue: Sort;
};
