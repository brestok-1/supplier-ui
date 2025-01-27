import { createContext } from 'react';
import { DataContextType } from '../types/DataType';

export const DataContext = createContext<DataContextType | undefined>(undefined);



