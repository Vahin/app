import { CountryType } from '@/entities/Country';
import { CurrencyType } from '@/entities/Currency';

export interface Profile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: CurrencyType;
  country?: CountryType;
  city?: string;
  username?: string;
  avatar?: string;
}
