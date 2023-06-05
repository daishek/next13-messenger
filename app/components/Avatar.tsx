"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import getRandomColor from "../utils/getRandomColor";

interface AvatarProps {
  user: User;
}
const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const BGCOLOR = getRandomColor();
  !user && null;
  return (
    <div
      className={`relative rounded-full h-9 w-9 md:h-11 md:w-11 grid place-items-center ${BGCOLOR}`}
    >
      {user?.image ? (
        <div className="relative w-full h-full rounded-full overflow-hidden ">
          <Image alt={user?.name + " Avatar"} src={user?.image} fill />
        </div>
      ) : (
        <span className="text-white font-semibold">
          {user?.name?.slice(0, 1)}
        </span>
      )}
      <span className="absolute top-0 right-0 h-2 w-2 md:w-3 md:h-3 bg-green-500 rounded-full ring-2 ring-white"></span>
    </div>
  );
};

export default Avatar;
