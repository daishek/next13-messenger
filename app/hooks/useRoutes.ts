import { useMemo } from "react";
import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import { signOut } from "next-auth/react";
import { IoChatbubble, IoLogOut } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversation",
        active: pathname === "/conversation" || !!conversationId,
        icon: IoChatbubble,
      },
      {
        label: "Users",
        href: "/users",
        active: pathname === "/users",
        icon: FaUsers,
      },
      { label: "Logout", href: "/#", onClick: () => signOut(), icon: IoLogOut },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;
