import { getReq } from "@/lib/utils";

export default async function CompWithFetch() {
  const data = await getReq();
  console.log("Server", data);
  return <h1>{JSON.stringify(data)}</h1>;
}

// "use client";
// import { fetcher } from "@/lib/utils";
// import useSWR from "swr";

// export default function CompWithFetch() {
//   const { data, error, isLoading } = useSWR("/api/todo", fetcher);

//   if (error) return <h1>Error</h1>;
//   if (isLoading) return <h1>Loading...</h1>;
//   return <h1>{data.message}</h1>;
// }
