import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";

export default {
  title: "Component/TextInput",
  component: TextInput.Root,
  args: {
    //normalmente colocamos o parenteses, mas colocamos colchetes para que n precisamos colocar o fragment
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Enter your name" type="text" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Enter your name" type="text" />,
  },
};
