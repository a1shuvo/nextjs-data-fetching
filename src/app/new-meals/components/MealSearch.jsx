"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchQuery = { search };
      const urlQueryParam = new URLSearchParams(searchQuery);
      const url = `${pathName}?${urlQueryParam}`;
      router.push(url);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for meals..."
      className="input input-primary w-full max-w-md"
    />
  );
};

export default MealSearch;
