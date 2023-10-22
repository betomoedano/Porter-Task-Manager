"use client";
import { TrashIcon, StarIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  task: z.string().min(2, { message: "Enter at least 2 characters" }).max(100),
  description: z.string(),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="pt-3">
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
                      <Input placeholder="Visit codewithbeto.dev" {...field} />
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
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:text-red-500 hover:bg-red-50"
                    onClick={() => {}}
                  >
                    High <span>!!!</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:text-yellow-500 hover:bg-yellow-50"
                  >
                    Medium <span>!!</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:text-green-500 hover:bg-green-50"
                  >
                    Low <span>!</span>
                  </Button>
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
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 mt-5">
              <Button
                onClick={() => setShowForm(false)}
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
