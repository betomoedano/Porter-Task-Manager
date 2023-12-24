"use client";
import { Product, createProducts, filterProducts } from "@/lib/utils";
import { fchown } from "fs";
import { ChangeEvent, useMemo, useState } from "react";
import { Button } from "./ui/button";

const products = createProducts();

export default function UseMemoExample(): JSX.Element {
  const [dummyVariable, setDummyVariable] = useState<boolean>(false);
  const [filterBy, setFilterBy] = useState<"all" | "expensive" | "cheap">(
    "all"
  );

  return (
    <div>
      <Button onClick={() => setDummyVariable(!dummyVariable)}>
        Toggle Dummy
      </Button>
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setFilterBy(e.target.value as "all" | "expensive" | "cheap");
        }}
      >
        <option value={"all"}>All</option>
        <option value={"expensive"}>Expensive</option>
        <option value={"cheap"}>Cheap</option>
      </select>
      <h1>useMemo example</h1>
      <ProductsList products={products} filterBy={filterBy} />
    </div>
  );
}

function ProductsList({
  products,
  filterBy,
}: {
  products: Product[];
  filterBy: "all" | "expensive" | "cheap";
}): JSX.Element {
  const visibleProducts = useMemo(
    () => filterProducts(products, filterBy),
    [filterBy, products]
  );
  return (
    <ul>
      <p>items: {visibleProducts.length}</p>
      {visibleProducts.map((product) => (
        <li key={product.id}>
          {product.id} - ${product.price}{" "}
          {product.isExpensive ? "Expensive" : "Cheap"}
        </li>
      ))}
    </ul>
  );
}
