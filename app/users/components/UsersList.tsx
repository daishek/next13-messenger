"use client";
import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="lg:w-80 w-full fixed">
      <div className="px-5">
        <h1 className="text-2xl font-bold py-4">People</h1>
        <div className="grid gap-2">
          {users.map((user) => (
            <UserBox key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
