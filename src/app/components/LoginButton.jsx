"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div className="flex justify-center pt-12">
      <button className="btn btn-primary rounded" onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
};

export default LoginButton;
