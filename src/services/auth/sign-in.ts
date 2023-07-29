import { z } from "zod";
import { api } from "../api";
import { signInSchema } from "@/schemas/auth";

const signInService = (data: z.infer<typeof signInSchema>) => {
  return api.post<{ data: { id: string; token: string } }>(
    "/auth/signIn",
    data
  );
};

export { signInService };
