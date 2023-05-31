"use client";

import cslx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="font-semibold text-gray-500 text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        className={cslx(
          `
            bg-white
            p-3 rounded
            outline-none`,
          errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};

export default Input;
