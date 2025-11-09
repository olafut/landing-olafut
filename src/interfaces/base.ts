import type { CSSProperties, PropsWithChildren } from 'react';

export interface BaseProps extends PropsWithChildren {
  id?: string;
  className?: string;
  style?: CSSProperties;
}
