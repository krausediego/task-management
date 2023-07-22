"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/auth";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useSignUpMutation } from "@/hooks/services/auth/useSignUpMutation";
import request from "axios";

function SignUpForm() {
  const [passwordView, setPasswordView] = useState(false);
  const [repeatPasswordView, setRepeatPasswordView] = useState(false);
  const { toast } = useToast();

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

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync, isLoading } = useSignUpMutation();

  const onSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = async (
    data
  ) => {
    const { email, username, password } = data;
    try {
      await mutateAsync({ email, username, password });
      return toast({
        title: "Cadastro realizado com sucesso",
        action: <Check />,
        variant: "success",
      });
    } catch (error) {
      if (request.isAxiosError(error) && error.request) {
        if (error.response?.status === 409) {
          return toast({
            title: "Nome de usuário ou email em uso",
            action: <X />,
            variant: "destructive",
          });
        }
      }
      return toast({
        title: "Erro ao realizar o cadastro",
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Nome de usuário</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
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
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Repita a senha</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={showPassword(repeatPasswordView)} {...field} />
                  <Button
                    onClick={(event) =>
                      handleChangeView(
                        event,
                        setRepeatPasswordView,
                        repeatPasswordView
                      )
                    }
                    variant="link"
                    className="absolute right-0 bottom-2"
                  >
                    {repeatPasswordView ? (
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
        {/* <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={() => field.onChange(!field.value)}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Aceito os termos</FormLabel>
              </div>
            </FormItem>
          )}
        /> */}
        <Button size="lg" type="submit" variant="primary">
          Cadastrar
        </Button>
      </form>
    </Form>
  );
}

export { SignUpForm };
