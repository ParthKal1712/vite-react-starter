import { createLazyFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-800 underline">
        Hello world!
      </h1>
      <Button>ss</Button>
    </div>
  );
}
