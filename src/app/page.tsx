import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
const page = async() => {

  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div>{JSON.stringify(users)}</div>
      <Button className="bg-amber-400">Click me!</Button>
    </div>
  );
};

export default page;
