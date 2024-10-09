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
    const allowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
    return allowedDomains.includes(domain);
}, { message: "Ops!, E-mail temporario não pode ser usado. Utilize outro valido." });

// Validação do restante do formulário
const formCadastroSchema = z.object({
    name: z.string().min(2, { message: "O nome é obrigatório deve conter pelo menos 2 caracteres. Ex: Jó" }),
    phone: z.string().min(14, { message: "O número de celular deve ter o formato (XX) 9XXXX-XXXX" }),
    dataNasc: z.string().min(10, { message: "A data de nascimento é obrigatória." }),
    rg: z.string().min(9, { message: "O RG deve ter no mínimo 9 caracteres." }),
    cpf: z.string().length(11, { message: "O CPF deve ter exatamente 11 caracteres numericos." }), // Ajustado para ser exatamente 11 dígitos
    email:emailSchema,
    password:passwordSchema,
    empresa: z.string().min(3, { message: 'Nome da empresa é obrigatório' }), // Validação para o nome da empresa
    cnpj: z.string()
            .optional()
        //   .length( { message: 'CNPJ deve ter 18 caracteres Ex: 00.000.000/0000-00' }) // Mantém a verificação para 18 caracteres
            // .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: "CNPJ deve estar no formato 00.000.000/0000-00" }) // Regex para formato do CNPJ
           // Deixa o campo CNPJ opcional, caso não seja obrigatório
});

// Exportar o esquema de validação
export const cadastroSchema = formCadastroSchema;
