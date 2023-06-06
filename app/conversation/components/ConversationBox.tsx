"use client";
import useOtherUser from "@/app/hooks/useOtherUser";
import { FullConversationType } from "@/app/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import clsx from "clsx";
import Avatar from "@/app/components/Avatar";
import { format } from "date-fns";

interface IParams {
  conversation: FullConversationType;
}
const ConversationBox: React.FC<IParams> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const router = useRouter();
  const session = useSession();
  const handleClick = useCallback(() => {
    router.push(`/conversation/${conversation.id}`);
  }, [conversation.id, router]);

  const lastMessage = useMemo(() => {
    const messages = conversation.messages || [];
    const lastMessage = messages[messages.length - 1];
    return lastMessage;
  }, [conversation.messages]);

  const userEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) return false;
    if (!userEmail) return false;

    const seenArray = lastMessage.seen || [];

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image";
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Started a conversation";
  }, [lastMessage]);

  return (
    <div
      onClick={handleClick}
      className="flex gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer duration-300 relative"
    >
      <Avatar user={otherUser} />
      <div className="flex-1">
        <div className="flex items-end">
          <span className="text-gray-500 flex-1">
            {conversation.name || otherUser.name}
          </span>
          {lastMessage?.createdAt && (
            <span className="text-xs text-gray-400">
              {format(new Date(lastMessage?.createdAt), "p")}
            </span>
          )}
        </div>
        <p
          className={clsx(
            "truncate text-sm",
            hasSeen ? "text-gray-500" : "text-black font-medium"
          )}
        >
          {lastMessageText.length > 30
            ? lastMessageText.slice(0, 29) + "..."
            : lastMessageText}
        </p>
      </div>
    </div>
  );
};

export default ConversationBox;
