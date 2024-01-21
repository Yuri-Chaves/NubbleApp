import z from 'zod';

export const ForgotPasswordSchema = z.object({
  email: z.string().email('email inválido'),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
