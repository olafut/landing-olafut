import Image from 'next/image';
import type { Author } from '@/interfaces/author';

type AvatarProps = Partial<Author>;

export const Avatar = ({
  avatar = '/assets/blog/authors/patricio.webp',
  name = 'Patricio Mariscal',
}: AvatarProps) => {
  return (
    <div className="flex items-center">
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
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};
