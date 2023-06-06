"use client";
import useConversation from "@/app/hooks/useConversation";
import ConversationBox from "./ConversationBox";
import { FullConversationType } from "@/app/types";
import clsx from "clsx";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

interface ConversationsParams {
  conversations: FullConversationType[];
}
const ConversationsList: React.FC<ConversationsParams> = ({
  conversations,
}) => {
  const { conversationId, isOpen } = useConversation();
  return (
    <div
      className={clsx(
        `
        fixed
        inset-y-0
        lg:left-20
        overflow-y-auto
        border-r
        border-gray-200
        lg:w-80
        w-full
        h-full
      `,
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="h-full">
        <div className="flex items-center px-3 py-4">
          <h1 className="text-2xl font-bold flex-1 ">Conversations</h1>
          <button className="p-2 rounded-full bg-gray-100 cursor-pointer hover:opacity-75 transition">
            <AiOutlineUsergroupAdd size={20} />
          </button>
        </div>
        {!conversations.length ? (
          <div className="w-full grid place-items-center text-xs text-gray-600">
            <p>No conversations!</p>
          </div>
        ) : (
          <div className="grid">
            {conversations?.map((conversation) => (
              <ConversationBox
                key={conversation.id}
                conversation={conversation}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationsList;
