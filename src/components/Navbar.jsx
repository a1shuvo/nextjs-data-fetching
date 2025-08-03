import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { SignInButton, SignOutButton } from "./AuthButtons";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          MyApp
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/products/add">Add Products</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {!session ? (
            <>
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <SignInButton />
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="px-2">Hi, {session.user.username}</span>
              </li>
              <li>
                <SignOutButton />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
