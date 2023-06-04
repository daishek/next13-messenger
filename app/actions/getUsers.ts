import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

const getUsers = async () => {
  const session = await getSession();
  !session?.user?.email && null;

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session?.user?.email,
        },
      },
    });
    return users;
  } catch (eroor: any) {
    return [];
  }
};

export default getUsers;
