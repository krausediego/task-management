import * as z from "zod";

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(6, "O nome deve conter ao menos 6 caracteres.")
      .nonempty("Nome de usuário obrigatório."),
    email: z
      .string()
      .email("Digite um email válido")
      .nonempty("Email obrigatório."),
    password: z.string().min(6, "A senha deve conter ao menos 6 caracteres."),
    repeatPassword: z
      .string()
      .min(6, "A senha deve conter ao menos 6 caracteres."),
    // acceptTerms: z
    //   .boolean()
    //   .default(false)
    //   .refine((val) => val === undefined, {
    //     message: "Aceite os termos",
    //     path: ["acceptTerms"],
    //   }),
  })
  .refine(({ password, repeatPassword }) => password === repeatPassword, {
    message: "Senhas nao conferem.",
    path: ["repeatPassword"],
  });

export { signUpSchema };
