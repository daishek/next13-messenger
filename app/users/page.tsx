"use client";
import { signOut, useSession } from "next-auth/react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import EmptyState from "../components/EmptyState";

const Users = () => {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
