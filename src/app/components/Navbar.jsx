"use client";

import Link from "next/link";

const Navbar = () => {
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
            <Link href="/meals">Meals</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* Optional: Add login/user icon/cart/etc. */}
      </div>
    </div>
  );
};

export default Navbar;
