// components/ButtonLink.tsx
import Link from "next/link";

interface ButtonLinkProps {
  text: string;
  href?: string;
  margin?: string;
  border?: string;
  borderColor?: string;
  font?: string;
}

export const ButtonBorder: React.FC<ButtonLinkProps> = ({
  text = "Contactanos",
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className=" w-[19rem] h-6 relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-sm font-medium text-pink-500 border-2 border-pink-500 rounded-lg group transition-all duration-300 ease-in-out"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
      <span className="relative z-10 text-white">{text}</span>
    </Link>
  );
};
