import Image from 'next/image';
import type { Author } from '@/interfaces/author';

type AvatarProps = Partial<Author>;

export const Avatar = ({ avatar, name }: AvatarProps) => {
  return (
    <div className="flex items-center">
      {!avatar || !name ? (
        <div className="inline-block">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-500 mr-4">
            <span>{name?.charAt(0).toUpperCase()}</span>
          </div>
        </div>
      ) : (
        <Image
          src={avatar}
          className="w-12 h-12 rounded-full mr-4"
          height={48}
          width={48}
          alt={name}
          priority
          decoding="async"
          loading="eager"
        />
      )}

      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};
