import * as z from 'zod';

// Validação da senha
const passwordSchema = z.string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres." })
    .regex(/[A-Z]/, { message: "A senha deve conter ao menos uma letra maiúscula. Ex: ( A, B, C, ...)" })
    .regex(/[a-z]/, { message: "A senha deve conter ao menos uma letra minúscula . Ex: ( a, b, c, ... )" })
    .regex(/\d/, { message: "A senha deve conter ao menos um número. Ex: ( 1, 2, 3, ... )" })
    .regex(/[@$!%*?&]/, { message: "A senha deve conter ao menos um caractere especial. Ex: ( ! @ # $ % ^ & * ) " });

// Validação do email
const emailSchema = z.string().email({ message: "Formato de email inválido." }).refine((email) => {

    const domain = email.split('@')[1];
    const allowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'uol.com.br', 'bol.com.br', 'globo.com', 'projetobol.com.br', 'projetobol.com'];
    return allowedDomains.includes(domain);
    
}, { message: "Ops!, E-mail temporario não pode ser usado. Utilize outro valido." });

// Validação do restante do formulário
const formCadastroSchema = z.object({
    name: z.string().min(2, { message: "O nome é obrigatório deve conter pelo menos 2 caracteres. Ex: Jó" }),
    phone: z.string().min(14, { message: "O número de celular deve ter o formato (XX) 9XXXX-XXXX" }),
    email:emailSchema,
    password:passwordSchema,
});

// Exportar o esquema de validação
export const cadastroSchema = formCadastroSchema;
