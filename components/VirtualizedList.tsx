"use client";
import { Product } from "@/lib/utils";
import * as React from "react";
import { List, ListRowProps } from "react-virtualized";

export default function VirtualizedList({
  products,
}: {
  products: Product[];
}): JSX.Element {
  function rowRenderer({ key, index, style }: ListRowProps) {
    return (
      <div key={key} style={style}>
        {products[index].name}
      </div>
    );
  }

  return (
    <List
      width={300}
      height={300}
      rowCount={products.length}
      rowHeight={20}
      containerStyle={{ border: "1px solid red", margin: 10 }}
      rowRenderer={rowRenderer}
      overscanRowCount={20}
    />
  );
}
