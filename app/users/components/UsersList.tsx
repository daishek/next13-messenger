"use client";
import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="lg:w-80 w-full fixed">
      <div className="">
        <h1 className="text-2xl font-bold px-3 py-4">People</h1>
        <div className="grid">
          {users?.map((user) => (
            <UserBox key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
