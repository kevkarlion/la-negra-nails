// components/ButtonLink.tsx
import Link from "next/link";

interface ButtonLinkProps {
  text: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  margin?: string;
  border?: string;
  borderColor? :string
  font?: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  href = "#",
  bgColor = "trasnparent",
  textColor = "text-white",
  margin='m-2',
  border='border',
  borderColor,
  font='font-subtitle'
}) => {
  return (
    <Link
      href={href}
      className={`${bgColor} ${textColor} ${margin} ${border} ${borderColor} ${font} shadow-md w-[20.625rem] h-[1.75rem] rounded-md 
                  text-center font-semibold text-sm flex items-center justify-center 
                  hover:opacity-90 transition duration-300 ease-in-out transform active:scale-95`}
    >
      {text}
    </Link>
  );
};
