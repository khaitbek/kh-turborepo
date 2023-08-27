'use server';
import { cookies } from "next/headers";

export async function setToken(token: string) {
    cookies().set("insurToken", token)
}
