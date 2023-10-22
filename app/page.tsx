import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Porter - Lightweight Task Manager
        </h1>
        <Button disabled>
          Column <PlusIcon className="ml-1" />
        </Button>
      </div>
      <Dashboard />
    </main>
  );
}
