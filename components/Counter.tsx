import React, { useState } from "react";
import { Button } from "./ui/button";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 data-testid="count">Counter: {count}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        Increment
      </Button>
    </div>
  );
}
