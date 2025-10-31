import type { FC } from 'react';

interface MenuIconProps {
  isOpen: boolean;
  onClick?: () => void;
}

export const MenuIcon: FC<MenuIconProps> = ({ isOpen, onClick }) => {
  return (
    <div className="flex items-center justify-center relative md:hidden">
      <button
        onClick={onClick}
        className="relative w-16 h-16 bg-transparent rounded-lg focus:outline-none"
        aria-label="Toggle menu"
        type="button"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`absolute h-0.5 w-8 bg-neutral-800 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />

          <span
            className={`absolute h-0.5 w-8 bg-neutral-800 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </div>
      </button>
    </div>
  );
};
