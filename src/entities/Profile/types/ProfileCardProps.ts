import { CurrencyType } from '@/entities/Currency';
import { Profile } from '../testing';
import { CountryType } from '@/entities/Country';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (currency: CurrencyType) => void;
  onChangeCountry?: (country: CountryType) => void;
}
