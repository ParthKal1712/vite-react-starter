import React from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full", // Full width on all screen sizes
        "px-4 sm:px-6 md:px-8", // Increasing padding as screen size grows
        "md:max-w-[90%]", // At md, start leaving some padding from sides
        "lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl", // Stable width from lg onwards
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
