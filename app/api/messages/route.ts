import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { conversationId, message, image } = body;

    if (!currentUser?.id || !currentUser?.email) {
      console.log("X. CURRENT USER DOES NOT EXIST");
      return new NextResponse("Unauthorised", { status: 401 });
    }
    console.log("01. CURRENT USER EXIST");
    const newMessage = await prisma.message.create({
      data: {
        body: message,
        image: image,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
        sender: {
          connect: {
            id: currentUser.id,
          },
        },
        seen: {
          connect: {
            id: currentUser.id,
          },
        },
      },
      include: {
        seen: true,
        sender: true,
      },
    });

    if (newMessage) {
      console.log("02. MESSAGE CREATED");
    }
    const updatedConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: newMessage.id,
          },
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            seen: true,
          },
        },
      },
    });
    return NextResponse.json(newMessage);
  } catch (error) {
    console.log("MESSAGE ERROR!", error);
    return new NextResponse("Internal error!", { status: 400 });
  }
}
