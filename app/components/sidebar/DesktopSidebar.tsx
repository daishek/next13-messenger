"use client";
import { useState } from "react";
import useRoutes from "@/app/hooks/useRoutes";
import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
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
          py-3
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
    </aside>
  );
};

export default DesktopSidebar;
