"use client";
import { FullMessageType } from "@/app/types";
import { useRef } from "react";
import MessageBox from "./MessageBox";

interface BodyProps {
  messages: FullMessageType[];
}
const Body: React.FC<BodyProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex-1 flex flex-col gap-2 overflow-y-auto p-3">
      {messages.map((message, i) => (
        <MessageBox
          key={message.id}
          message={message}
          isLast={i === messages.length}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
