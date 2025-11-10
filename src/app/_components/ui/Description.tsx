import type { FC, PropsWithChildren } from 'react';

export const Description: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-xs italic">{children}</span>;
};
