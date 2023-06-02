"use client";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import React from "react";
import DesktopItem from "./DesktopItem";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  if (isOpen) return null;
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white lg:hidden z-40 border-t-[1px] border-t-gray-200">
      <ul className="grid grid-cols-3">
        {routes.map((item) => (
          <MobileItem
            key={item.label}
            label={item.label}
            href={item.href}
            active={item.active}
            icon={item.icon}
            onClick={item.onClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MobileFooter;
