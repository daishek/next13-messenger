"use client";

import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";

interface IProps {
  user: User;
}
const UserBox: React.FC<IProps> = ({ user }) => {
  const { name } = user;
  return (
    <div className="flex gap-2">
      <Avatar user={user} />
      <span>{name}</span>
    </div>
  );
};

export default UserBox;
