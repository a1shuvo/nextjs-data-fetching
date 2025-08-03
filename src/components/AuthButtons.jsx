"use client";

import { signIn, signOut } from "next-auth/react";

export function SignInButton() {
  return (
    <button onClick={() => signIn()} className="btn btn-primary rounded">
      Login
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="btn btn-error text-white rounded"
    >
      Logout
    </button>
  );
}
