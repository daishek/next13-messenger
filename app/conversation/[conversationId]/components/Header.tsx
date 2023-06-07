"use client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return conversation.users.length + " members";
    }
    return "Active";
  }, [conversation]);

  return (
    <div className="bg-white border-b-gray-200 border-b-[1px] flex gap-3 items-center p-3">
      <Link href="/conversation" className="text-gray-500">
        <HiChevronDoubleLeft size={20} />
      </Link>
      <div className="flex-1 flex items-center gap-3">
        <Avatar user={otherUser} />
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl leading-5">{otherUser.name}</h3>
          <span className="text-xs text-gray-500 leading-3">{statusText}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
