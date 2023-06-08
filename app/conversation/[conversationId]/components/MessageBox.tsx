"use client";
import Avatar from "@/app/components/Avatar";
import { FullMessageType } from "@/app/types";
import clsx from "clsx";
import { useSession } from "next-auth/react";
interface MessageBoxProps {
  message: FullMessageType;
  isLast: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  const session = useSession();
  const isOwn = session?.data?.user?.email === message.sender.email;
  const seenList = (message.seen || [])
    .filter((user) => user.email !== message.sender.email)
    .map((user) => user.name)
    .join(", ");

  return (
    <div
      className={clsx(
        "flex gap-5 items-center",
        isOwn && "justify-end flex-row-reverse"
      )}
    >
      <Avatar user={message.sender} />
      <div className={clsx("flex flex-col w-full", isOwn && "items-end")}>
        <p
          className={clsx(
            " max-w-[75%] px-3 py-2 rounded-3xl ",
            isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
          )}
        >
          {message.body}
        </p>
        {seenList && (
          <span className="pl-3 text-[10px] text-gray-400 line-clamp-1 max-w-[75%]">
            {seenList}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
