import { Outlet, createRootRoute } from "@tanstack/react-router";

// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "@/components/navbar";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Navbar />
        <hr />
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </>
    );
  },
});
