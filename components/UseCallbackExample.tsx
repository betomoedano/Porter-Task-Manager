"use client";
import { useCallback, useState, memo } from "react";
import { Button } from "./ui/button";

export default function UseCallbackExample(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>useCallback example</h1>
      <h1>{count}</h1>
      <Other count={count} />
      <CounterButton onIncrement={increment} />
    </div>
  );
}

const Other = memo(function Other({ count }: { count: number }) {
  console.log("Other component rendered");
  // fetching
  // filtering
  // sorting
  return <p>Other component {count}</p>;
});

const CounterButton = memo(function CounterButton({
  onIncrement,
}: {
  onIncrement: () => void;
}): JSX.Element {
  console.log("CounterButton rendered");
  return <Button onClick={onIncrement}>Increment</Button>;
});
