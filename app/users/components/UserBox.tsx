"use client";

import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use, useCallback, useState } from "react";

interface IProps {
  user: User;
}
const UserBox: React.FC<IProps> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/conversations", { userId: user.id })
      .then((data) => {
        router.push(`/conversation/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [user, router]);
  return (
    <div
      onClick={handleClick}
      className="flex gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer duration-300"
    >
      <Avatar user={user} />
      <span className="text-gray-500">{user.name}</span>
    </div>
  );
};

export default UserBox;
