"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className="text-green-500">Hello Matt!</h1>
     <p className="">{count}</p>
     <Button>Click Me</Button>
    </main>
  );
}
