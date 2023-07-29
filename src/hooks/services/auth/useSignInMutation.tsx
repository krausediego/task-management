import { queryClient } from "@/app/client-provider";
import { signInSchema } from "@/schemas/auth";
import { signInService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const useSignInMutation = () =>
  useMutation(
    async (data: z.infer<typeof signInSchema>) => {
      return signInService(data);
    },
    {
      onSuccess: async (profile) =>
        queryClient.setQueryData(["profile"], profile),
    }
  );

export { useSignInMutation };
