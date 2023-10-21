import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="border border-red-500">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <Button>New Task</Button>
      </div>
      <Dashboard />
    </main>
  );
}
