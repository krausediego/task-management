"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useToast,
  Button,
  Input,
} from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/auth";
import { z } from "zod";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useSignInMutation } from "@/hooks/services";

function SignInForm() {
  const [passwordView, setPasswordView] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const showPassword = (show: boolean): string => {
    return show ? "text" : "password";
  };

  const handleChangeView = (
    event: React.MouseEvent,
    setState: (state: boolean) => void,
    state: boolean
  ): void => {
    event.preventDefault();
    setState(!state);
  };

  const { mutateAsync } = useSignInMutation();

  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (
    data
  ) => {
    try {
      await mutateAsync(data);
      return toast({
        title: "Login realizado com sucesso",
        action: <Check />,
        variant: "success",
      });
    } catch (error) {
      return toast({
        title: "Erro ao realizar o login.",
        action: <X />,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="emailOrUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                Nome de usuário ou email
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Senha</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={showPassword(passwordView)} {...field} />
                  <Button
                    onClick={(event) =>
                      handleChangeView(event, setPasswordView, passwordView)
                    }
                    variant="link"
                    className="absolute right-0 bottom-2"
                  >
                    {passwordView ? (
                      <Eye size={23} className="text-zinc-300" />
                    ) : (
                      <EyeOff size={23} className="text-zinc-300" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" type="submit" variant="primary">
          Entrar
        </Button>
      </form>
    </Form>
  );
}

export { SignInForm };
