import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher(url: string): Promise<any> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

export async function getReq() {
  const response = await fetch("http://localhost:3000/api/todo", {
    // body: JSON.stringify({
    //   user: "beto",
    //   pass: "xxx",
    // }),
    // method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${"beto"}`,
    },
  });
  return await response.json();
}
