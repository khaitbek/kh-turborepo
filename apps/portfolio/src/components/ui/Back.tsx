"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button, ButtonProps } from "ui";

interface BackProps extends ButtonProps {
}
export const Back: FC<BackProps> = (props) => {
  const router = useRouter();
  const handleClick = () => router.back();
  return (
    <Button onClick={handleClick} variant="default" {...props}>
      Back
    </Button>
  )
}
