import { createLazyFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-row gap-2">
      Hello from About!<Button>hh</Button>
    </div>
  );
}
