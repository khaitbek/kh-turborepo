import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return <SignIn path="/sign-up" routing="path" signUpUrl="/sign-up" />
}

export default Page;