"use client";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export default function SuspenseComponent() {
  const { data } = useSWR("/api/todo", fetcher, { suspense: true });

  return <h1>{data.message}</h1>;
}
