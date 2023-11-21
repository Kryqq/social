export type infoFriends = {
   count: number;
   pages: number;
   next: string;
   prev: boolean;
};

export type origin = {
   name: string;
   url: string;
};

export type locationFriends = {
   name: string;
   url: string;
};

export type imageFriends = {
   image: string;
};

export type episodeFriends = {
   episode: string[];
};

export type resultsFriends = {
   id: number;
   name: string;
   status: string;
   species: string;
   type: string;
   gender: string;
   origin: origin;
   locatin: locationFriends;
   image: imageFriends;
   episode: episodeFriends;
   url: string;
   created: string;
};

export interface FriendsSliceState {
     info: infoFriends;
   results: resultsFriends;
}
