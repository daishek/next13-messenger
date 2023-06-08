"use client";

import clsx from "clsx";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<InputProps> = ({
  id,
  required,
  placeholder,
  register,
  errors,
}) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      {...register(id, { required })}
      autoComplete="id"
      type="text"
      className={clsx(
        "flex-1 p-3 lg:p-5 bg-transparent outline-none",
        errors[id] && "focus:ring-rose-500"
      )}
    />
  );
};

export default MessageInput;
