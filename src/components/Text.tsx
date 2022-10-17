import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export type TextProps = {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
};

export const Text = ({
  size = "medium",
  children,
  asChild,
  className,
}: TextProps) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans ",
        {
          "text-xs": size === "small",
          "text-sm": size === "medium",
          "text-lg": size === "large",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
