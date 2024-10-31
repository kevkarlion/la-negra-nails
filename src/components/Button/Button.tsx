// components/ButtonLink.tsx
import Link from 'next/link';

interface ButtonLinkProps {
  text: string;
  href: string;
  bgColor?: string;
  textColor?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  href = '#',
  bgColor = 'bg-primary',
  textColor = 'text-white',
}) => {
  return (
    <Link
      href={href}
      className={`${bgColor} ${textColor} w-[20.625rem] h-[1.75rem] rounded-md 
                  text-center font-semibold text-sm flex items-center justify-center 
                  hover:opacity-90 transition duration-300 ease-in-out transform active:scale-95`}
    >
      {text}
    </Link>
  );
};
