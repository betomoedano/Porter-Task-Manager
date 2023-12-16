"use client";

import { useFetch } from "@/hooks/useFetch";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsComponent(): JSX.Element {
  const [theme, setTheme] = useLocalStorage<string>("@theme", "light");
  const { data, error, loading } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const style = theme === "dark" ? "bg-black text-white" : "bg-white";

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <ul>
      <Button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </Button>
      <li className="font-bold ">Theme value: {theme}</li>
      <li className="font-bold ">Posts fetched using useFetch advanced hook</li>
      {data &&
        data.slice(0, 5).map((post) => (
          <li
            className={cn("text-sm border border-gray-500 p-1", style)}
            key={post.id}
          >
            {post.title}
          </li>
        ))}
    </ul>
  );
}
