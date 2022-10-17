import React, { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: React.ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
};

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({children}: TextInputIconProps) => {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
};

export interface TextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent h-12 flex-1 text-gray-100 w-full  text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";
TextInputRoot.displayName = "TextInput.Root";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
