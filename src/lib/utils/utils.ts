import { isClass } from '@sapphire/utilities';
import { resolve } from 'node:path';
import process from 'node:process';

export async function resolveFile<T>(file: string) {
	const reslovedPath = resolve(process.cwd(), file);
	const File = await (await import(reslovedPath)).default;
	if (!isClass(File)) return null;
	return new File() as T;
}
