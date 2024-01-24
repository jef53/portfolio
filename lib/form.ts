import { z } from 'zod'


export const loginFormSchema = z.object({
  name: z.string().min(1, { message: 'Nome inválido' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  message: z.string().min(6, { message: 'Insira uma mensagem' }),
})