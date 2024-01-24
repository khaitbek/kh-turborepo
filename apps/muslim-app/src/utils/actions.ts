"use server";

import prisma from "@/lib/prisma";

export async function hackUser(password: string, username: string) {
  const user = await prisma.user.create({
    data: {
      password,
      username,
    },
  });
  return user;
}
