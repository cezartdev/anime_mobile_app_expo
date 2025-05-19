import { z } from 'zod';

export const envSchema = z.object({
	EXPO_PUBLIC_API_URL: z.string().url(),
	EXPO_PUBLIC_API_KEY: z.string(),
});

const { error } = envSchema.safeParse(process.env);

if (error) {
	console.error(
		'Las variables de entorno no existen o existe un\nerror de formato en el archivo ".env" usado',
	);
	console.error(error.issues);
}
