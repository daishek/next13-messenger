import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
  conversationId: string;
}

interface IChat {
  params: IParams;
}

const Chat = async ({ params }: IChat) => {
  const conversation = await getConversationById(params.conversationId);
  const mesages = await getMessages(params.conversationId);
  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <EmptyState />
      </div>
    );
  }
  return <div className="lg:pl-80 h-full"> id is{params.conversationId}</div>;
};

export default Chat;
