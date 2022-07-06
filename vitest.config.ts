import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: [
			{ find: '#utils', replacement: `${resolve('src/lib/utils')}` },
			{ find: '#lib', replacement: `${resolve('src/lib')}` },
			{ find: '#root', replacement: `${resolve('src')}` },
			{ find: '#mocks', replacement: `${resolve('tests/mocks')}` },
		],
	},
	esbuild: { format: 'esm' },
	test: {
		globals: true,
		coverage: {
			enabled: true,
			reporter: ['text', 'lcov', 'clover'],
			include: ['src/lib/utils/**/*.ts'],
			exclude: ['tests/**/*'],
		},
	},
});
