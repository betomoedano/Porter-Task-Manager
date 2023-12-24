import { ErrorBoundary } from "@/components/ErrorBoundary";
import PostsComponent from "@/components/PostsComponent";
import SearchComponent from "@/components/SearchComponent";
import SuspenseComponent from "@/components/SuspenseComponent";
import UseCallbackExample from "@/components/UseCallbackExample";
import UseMemoExample from "@/components/UseMemoExample";
import VirtualizedList from "@/components/VirtualizedList";
import { createProducts } from "@/lib/utils";
import { Suspense } from "react";

export default function Playground() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold">Playground</h1>
      {/* <SearchComponent /> */}
      {/* <PostsComponent />
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading with suspense</h1>}>
          <SuspenseComponent />
        </Suspense>
      </ErrorBoundary> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      <VirtualizedList products={createProducts()} />
    </main>
  );
}
