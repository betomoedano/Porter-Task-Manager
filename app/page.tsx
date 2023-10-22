import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>New Task</Button>
      </div>
      <Dashboard />
    </main>
  );
}
