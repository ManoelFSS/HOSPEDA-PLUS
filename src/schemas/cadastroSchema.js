import * as z from 'zod';

// Validação da senha
const passwordSchema = z.string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres." })
    .regex(/[A-Z]/, { message: "A senha deve conter ao menos uma letra maiúscula." })
    .regex(/[a-z]/, { message: "A senha deve conter ao menos uma letra minúscula." })
    .regex(/\d/, { message: "A senha deve conter ao menos um número." })
    .regex(/[@$!%*?&]/, { message: "A senha deve conter ao menos um caractere especial." });

// Validação do email
const emailSchema = z.string().email({ message: "Formato de email inválido." }).refine((email) => {
    const domain = email.split('@')[1];
    const allowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
    return allowedDomains.includes(domain);
}, { message: "Use um email dos seguintes domínios: gmail.com, yahoo.com, hotmail.com." });

// Validação do restante do formulário
const formCadastroSchema = z.object({
    name: z.string().min(3, { message: "O nome é obrigatório." }),
    phone: z.string().min(14, { message: "O número de celular deve ter no mínimo 10 dígitos." }),
    dataNasc: z.string().min(10, { message: "A data de nascimento é obrigatória." }),
    rg: z.string().min(9, { message: "O RG deve ter no mínimo 9 caracteres." }),
    cpf: z.string().length(11, "O CPF deve conter exatamente 11 dígitos numéricos"),
    email: emailSchema,
    password: passwordSchema,
    empresa: z.string().min(3, { message: "O nome da empresa é obrigatório." }),
    cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: "CNPJ deve estar no formato 11.111.111/1111-11" }), // Validação para o CNPJ, no formato correto
});

// Exportar o esquema de validação
export const cadastroSchema = formCadastroSchema;
