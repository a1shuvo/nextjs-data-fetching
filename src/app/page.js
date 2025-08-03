import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <p className="text-2xl font-bold">From client component</p>
      <UserInfo />
      <p className="text-2xl font-bold">From server component</p>
      {JSON.stringify(session)}
    </div>
  );
}
