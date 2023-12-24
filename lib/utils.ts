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

export interface Product {
  id: number;
  name: string;
  isExpensive: boolean;
  price: number;
}

export function createProducts(): Product[] {
  console.log("Creating Products");
  const products: Product[] = [];

  for (let i = 0; i < 100; i++) {
    const price = Math.floor(Math.random() * 1000);
    products.push({
      id: i + 1,
      price: price,
      isExpensive: price > 500 ? true : false,
      name: `${i + 1} Product Name`,
    });
  }

  return products;
}

export function filterProducts(
  products: Product[],
  filterBy: "all" | "expensive" | "cheap"
): Product[] {
  console.log("Filtering Products");
  return products.filter((product) => {
    if (filterBy === "all") {
      return true;
    } else if (filterBy === "expensive") {
      return product.isExpensive;
    } else if (filterBy === "cheap") {
      return !product.isExpensive;
    }
  });
}
