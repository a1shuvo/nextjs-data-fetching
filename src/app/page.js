import LoginButton from "@/components/LoginButton";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <LoginButton />
      <p className="text-2xl font-bold">From client component</p>
      <UserInfo />
      <p className="text-2xl font-bold">From server component</p>
      {JSON.stringify(session)}
    </div>
  );
}
