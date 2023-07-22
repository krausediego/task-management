import { queryClient } from "@/app/client-provider";
import { signUpSchema } from "@/schemas/auth";
import { signUpService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const useSignUpMutation = () =>
  useMutation(
    async (data: Omit<z.infer<typeof signUpSchema>, "repeatPassword">) => {
      await signUpService(data);
    },
    {
      onSuccess: async (profile) =>
        queryClient.setQueryData(["profile"], profile),
    }
  );

export { useSignUpMutation };
