"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import {useMutation} from "@tanstack/react-query";
import { toast } from "sonner";

const Page=()=>{
  const trpc = useTRPC();
  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess: (data) => {
      toast.success("AI job queued successfully!");
    },
    onError: (err) => {
      toast.error("Failed to queue AI job: " + err.message);
    }
  }))

  return (
    <Button onClick={() => testAi.mutate()}>
      Test AI Mutation
    </Button>
  )
}

export default Page;