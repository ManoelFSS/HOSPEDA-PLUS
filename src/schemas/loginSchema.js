import { z } from "zod";

// Defina seu esquema de validação
const schema = z.object({
        email: z.string().email(),
        password: z.string()
        .min(8, "A senha deve ter pelo menos 8 caracteres!")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula (A, B, C, ...)")
        .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula (a, b, c, ...)")
        .regex(/[0-9]/, "A senha deve conter pelo menos um número (1, 2, 3, ...)")
        .regex(/[!@#$%^&*]/, "A senha deve conter pelo menos um caractere especial ( ! @ # $ % ^ & * )"),
});

// Função de validação
export const validateLoginSchema = (email, password) => {
        return  schema.parse({ email , password }); // Lança um erro se a validação falhar
}

