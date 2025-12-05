import z from 'zod/v3';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email diperlukan').email('Alamat email tidak valid'),
  password: z.string().min(6, 'kata sandi harus minimal 6 karakter'),
});

export type LoginForm = z.infer<typeof loginSchema>;
