import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Porter - Lightweight Task Manager
        </h1>
        <div className="flex items-center gap-3">
          <Button asChild size={"icon"}>
            <a href="https://github.com/betomoedano/Porter-Task-Manager.git">
              <GitHubLogoIcon />
            </a>
          </Button>
          {/* <Button disabled>
            Column <PlusIcon className="ml-1" />
          </Button> */}
        </div>
      </div>
      <p className="mb-3">
        Want to build this app yourself? Head over to{" "}
        <a className="text-blue-500" href="https://codewithbeto.dev">
          codewithbeto.dev
        </a>{" "}
        and check out our React with TypeScript course. <br />
        Oh, and grab our Early Bird deal while youre at it! 🐤
      </p>
      <Dashboard />
      <div className="my-3 min-w-fit flex flex-col items-end">
        <h3 className="hidden lg:flex font-bold mb-2">Shortcuts</h3>
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium ">
          <span className="mr-3">- New Task</span>
          <kbd className="pointer-events-none select-none  rounded border px-1 leading-none text-white text-xl bg-slate-950 border-slate-950">
            ⌘
          </kbd>
          <kbd className="pointer-events-none select-none  rounded border px-1.5 text-white bg-slate-950 border-slate-950">
            K
          </kbd>
        </div>
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium mt-1">
          <span className="mr-3">- Close Task Form</span>
          <kbd className="pointer-events-none select-none  rounded border px-1.5 text-white bg-slate-950 border-slate-950">
            Esc
          </kbd>
        </div>
      </div>
    </main>
  );
}
