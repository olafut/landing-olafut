import type { CSSProperties, PropsWithChildren } from 'react';

export interface BaseProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}
