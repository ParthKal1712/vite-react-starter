import { createLazyFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-mono text-3xl font-bold text-red-800 underline">
        Hello world!
      </h1>
      <Button>ss</Button>
    </div>
  );
}
