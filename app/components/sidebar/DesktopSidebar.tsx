"use client";
import React, { useState } from "react";
import useRoutes from "@/app/hooks/useRoutes";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import Avatar from "../Avatar";
interface IParams {
  currentUser: User;
}
const DesktopSidebar: React.FC<IParams> = ({ currentUser }: any) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className="
        fixed
        hidden
        inset-y-0
        left-0
        top-0
        w-20
        px-6
        py-3
        bg-white
        border-r
        border-r-gray-200
        lg:flex
        flex-col
        justify content-between
      "
    >
      <ul
        role="list"
        className="
          h-full
          flex
          flex-col
          items-center
          gap-1
          
        "
      >
        {routes.map((item) => (
          <DesktopItem
            key={item.label}
            label={item.label}
            href={item.href}
            active={item.active}
            icon={item.icon}
            onClick={item.onClick}
          />
        ))}
      </ul>

      <nav className="flex flex-col items-center justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer hover:opacity-75 transition"
        >
          <Avatar user={currentUser} />
        </button>
      </nav>
    </aside>
  );
};

export default DesktopSidebar;
