import axios from "axios";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { TextInput } from "../components/TextInput";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";

export const SignIn: React.FC = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post("/sessions"),
      {
        email: "kalilazizsantoschami@hotmail.com",
        password: "12345678",
      };

    setIsUserSignedIn(true);
  };

  return (
    <div className=" w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading className="mt-4" size="large">
          Ignite Lab
        </Heading>

        <Text className="text-gray-400 mt-1" size="large">
          Faça login e começe a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login Realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="*********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="small" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na Plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="small" asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu a senha?
          </a>
        </Text>
        <Text size="small">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
};
