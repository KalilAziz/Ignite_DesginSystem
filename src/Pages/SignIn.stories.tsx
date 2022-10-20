import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { SignIn } from "./SignIN";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              messege: "Sucesso!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

// Testing the component with Storybook Jest
export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "Kalilazizsantoschami@hotmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("*********"), "132456789");

    userEvent.click(
      canvas.getByRole("button", { name: "Entrar na Plataforma" })
    );

    await waitFor(() => {
      expect(canvas.getByText("Login Realizado!")).toBeInTheDocument();
    });
  },
};
