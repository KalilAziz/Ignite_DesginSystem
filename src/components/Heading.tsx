import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export type HeadingProps = {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
};

export const Heading = ({
  size = "medium",
  children,
  asChild,
  className,
}: HeadingProps) => {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      className={clsx(
        "text-gray-100 font-bold font-sans ",
        {
          "text-lg": size === "small",
          "text-xl": size === "medium",
          "text-2xl": size === "large",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
