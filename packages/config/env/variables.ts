import { envSchema } from './config';

export const ENV = envSchema.parse(process.env);
