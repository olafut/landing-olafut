import Image from 'next/image';

type AvatarProps = {
  name: string;
  picture: string;
};

export const Avatar = ({ name, picture }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
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
