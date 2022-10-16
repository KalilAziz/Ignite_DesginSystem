import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export type TextProps = {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  asChild?: boolean;
};

export const Text = ({ size = "medium", children, asChild }: TextProps) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx("text-gray-100 font-sans ", {
        "text-xs": size === "small",
        "text-sm": size === "medium",
        "text-lg": size === "large",
      })}
    >
      {children}
    </Comp>
  );
};
