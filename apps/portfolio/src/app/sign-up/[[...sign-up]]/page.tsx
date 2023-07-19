import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
}

export default Page;