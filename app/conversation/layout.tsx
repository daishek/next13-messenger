import getConversation from "../actions/getConversations";
import { Sidebar } from "../components/sidebar/Sidebar";
import ConversationsList from "./components/ConversationsList";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversation();
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <ConversationsList conversations={conversations!} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
