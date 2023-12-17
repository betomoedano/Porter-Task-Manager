"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { ChangeEvent, Suspense, lazy, useEffect, useState } from "react";
const LazyPostsComponent = lazy(() => import("./PostsComponent"));

export default function SearchComponent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 1000);

  const hanleSearch = (searchValue: string) => {
    console.log("Searching for: ", searchValue);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      hanleSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <h1>Debounce example</h1>
      <input
        type="text"
        placeholder="Search something"
        className="border border-gray-500 px-3 py-1 rounded"
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
      />
      <Suspense fallback={<h1>Lazy loading...</h1>}>
        <LazyPostsComponent />
      </Suspense>
    </div>
  );
}
