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
const MobileItem: React.FC<IParams> = ({
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
            p-4
            justify-center
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
        <Icon className="h-6 w-6 shrink-0" />
      </Link>
    </li>
  );
};

export default MobileItem;
