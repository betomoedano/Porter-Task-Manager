"use client";
import { TrashIcon, StarIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Dispatch, SetStateAction, useState } from "react";
import { useBoard } from "@/context/BoardContext/BoardContext";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  task: z.string().min(2, { message: "Enter at least 2 characters" }).max(100),
  description: z.string().max(500),
});

export default function CreateTaskForm({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      description: "",
    },
  });
  const { dispatch } = useBoard();
  const [tag, setTag] = useState("Low");

  function onSubmit({ task, description }: z.infer<typeof formSchema>) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Math.random().toString(), // YOLO
        date: new Date().toDateString(),
        tag,
        description,
        task,
      },
    });
    setShowForm(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="font-bold pb-3">New Task</CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-3">
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Title</FormLabel>
                    <FormMessage className="w-full" />
                    <FormControl>
                      <Input
                        autoFocus
                        placeholder="Visit codewithbeto.dev"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>
                    <MixerVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuLabel>Select Priority</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className={cn(
                      "w-full px-3 justify-between focus:bg-red-50 focus:text-red-500 cursor-pointer"
                    )}
                    onClick={() => setTag("High")}
                  >
                    High <span>!!!</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "w-full px-3 justify-between focus:bg-yellow-50 focus:text-yellow-500 cursor-pointer"
                    )}
                    onClick={() => setTag("Medium")}
                  >
                    Medium <span>!!</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "w-full px-3 justify-between focus:bg-green-50 focus:text-green-500 cursor-pointer"
                    )}
                    onClick={() => setTag("Low")}
                  >
                    Low <span>!</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 mt-5">
              <Button
                onClick={() => setShowForm(false)}
                type="button"
                className="w-full"
                variant={"secondary"}
              >
                Cancel
              </Button>
              <Button className="w-full" type="submit">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
