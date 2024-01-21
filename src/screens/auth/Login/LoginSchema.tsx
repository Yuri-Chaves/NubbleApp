import z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('email inválido'),
  password: z.string().min(1, 'senha obrigatória'),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
