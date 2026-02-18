import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "5s");
    await step.sleep("upload a video", "5s");
    await step.sleep("transcribing a video", "5s");
    await step.sleep("upload the text to AI", "5s");
    await step.sleep("generate description", "5s");
    
    await step.run("create-workflow", async()=>{
      return prisma.workflow.create({
        data: {
          name: `Workflow from inngest`,
        }
      });
    })
  },
);
