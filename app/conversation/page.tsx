"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import EmptyState from "../components/EmptyState";
import useConversation from "../hooks/useConversation";
import clsx from "clsx";

const Conversations = () => {
  const router = useRouter();
  const session = useSession();
  const { isOpen } = useConversation();

  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  return (
    <div
      className={clsx("lg:block lg:pl-80 h-full", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
