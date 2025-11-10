import type { IconType } from 'react-icons';

export type Initiative = {
  key: string;
  image: string;
  icon?: IconType;
  rtl: boolean;
  comingSoon: boolean;
};
