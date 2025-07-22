"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MealSearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("search") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (query) params.set("search", query.trim());
      router.push(`/meals?${params.toString()}`);
    }, 500); // debounce delay

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for meals..."
      className="input input-primary w-full max-w-md"
    />
  );
}
