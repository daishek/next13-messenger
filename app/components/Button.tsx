import clsx from "clsx";
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  type,
  fullWidth,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        `p-3 bg-blue-500 rounded text-white`,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-default"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
