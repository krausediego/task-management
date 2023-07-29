import { z } from "zod";
import { api } from "../api";
import { signUpSchema } from "@/schemas/auth";

const signUpService = (
  data: Omit<z.infer<typeof signUpSchema>, "repeatPassword">
) => {
  return api.post<{ data: { id: string; token: string } }>(
    "/auth/signUp",
    data
  );
};

export { signUpService };
