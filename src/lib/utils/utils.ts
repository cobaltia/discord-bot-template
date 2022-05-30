import { resolve } from 'node:path';

export async function resloveFile<T>(file: string) {
	const reslovedPath = resolve(file);
	const File = await (await import(reslovedPath)).default;
	if (!File?.constructor) return null;
	return new File() as T;
}
