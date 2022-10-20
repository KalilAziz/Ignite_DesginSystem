import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = ({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-cyan-500 roudend font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};