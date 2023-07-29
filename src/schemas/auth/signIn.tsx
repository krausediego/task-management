import * as z from "zod";

const signInSchema = z.object({
  emailOrUsername: z.string().nonempty("Nome de usuário ou email obrigatório."),
  password: z.string().min(6, "A senha deve conter ao menos 6 caracteres."),
});

export { signInSchema };
