import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    !session?.user?.email && null;

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });
    !currentUser && null;
    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
