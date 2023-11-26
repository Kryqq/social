import { type } from 'os';
import { createContext } from 'react';

interface ContextProps {
   popUpLoginMenu: () => void;
}

export const Context = createContext<ContextProps | undefined>(undefined);
