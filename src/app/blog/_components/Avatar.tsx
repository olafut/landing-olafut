import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { Author } from '@/interfaces/author';
import type { BaseProps } from '@/interfaces/base';

interface AvatarProps extends Partial<Author>, BaseProps {
  variant?: 'default' | 'compact';
}

const avatarVariants = cva(
  'bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-500',
  {
    variants: {
      variant: {
        default: 'w-12 h-12 text-2xl mr-4',
        compact: 'w-8 h-8 text-sm mr-2',
      },
    },
  },
);

const nameVariants = cva('font-bold', {
  variants: {
    variant: {
      default: 'text-xl',
      compact: 'text-sm',
    },
  },
});

export const Avatar = ({
  avatar,
  name,
  variant = 'default',
  className,
}: AvatarProps) => {
  return (
    <div className={twMerge('flex items-center', className)}>
      {!avatar || !name ? (
        <div className="inline-block">
          <div className={avatarVariants({ variant })}>
            <span>{name?.charAt(0).toUpperCase()}</span>
          </div>
        </div>
      ) : (
        <Image
          src={avatar}
          className={avatarVariants({ variant })}
          height={48}
          width={48}
          alt={name}
          priority
          decoding="async"
          loading="eager"
        />
      )}

      <div className={nameVariants({ variant })}>{name}</div>
    </div>
  );
};
