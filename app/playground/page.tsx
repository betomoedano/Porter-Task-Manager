import { ErrorBoundary } from "@/components/ErrorBoundary";
import PostsComponent from "@/components/PostsComponent";
import SearchComponent from "@/components/SearchComponent";
import SuspenseComponent from "@/components/SuspenseComponent";
import { Suspense } from "react";

export default function Playground() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold">Playground</h1>
      {/* <SearchComponent /> */}
      <PostsComponent />
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading with suspense</h1>}>
          <SuspenseComponent />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
