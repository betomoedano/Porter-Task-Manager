import PostsComponent from "@/components/PostsComponent";
import SearchComponent from "@/components/SearchComponent";

export default function Playground() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold">Playground</h1>
      <SearchComponent />
      <PostsComponent />
    </main>
  );
}
