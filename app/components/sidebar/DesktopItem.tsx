"use client";
interface IParams {
  label: string;
  href: string;
  active: boolean | undefined;
  icon?: any;
  onClick?: () => void;
}
import clsx from "clsx";
import Link from "next/link";
const DesktopItem: React.FC<IParams> = ({
  label,
  href,
  active,
  icon: Icon,
  onClick,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <li onClick={handleClick}>
      <Link
        title={label}
        href={href}
        className={clsx(
          `
            duration-300
            group
            flex
            gap-x-3
            rounded-md
            p-3
            text-sm
            font-semibold
            leading-6
            text-gray-500
            hover:text-black
            hover:bg-gray-100
        `,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-6 w-6" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
