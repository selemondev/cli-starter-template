import { resolve } from 'pathe';
export const getPath = (path: string) => {
	return resolve(process.cwd(), path);
};
