// vitest.config.ts

import { resolve } from 'pathe';
import { defineConfig } from 'vitest/config';
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	test: {
		include: ['src/__tests__/**/*.ts'],
		environment: 'node',
		globals: true,
		coverage: {
			provider: 'v8',
			include: ['src/**/*.ts'],
			exclude: [
				'src/**/*.test.ts',
				'src/**/__tests__/**',
				'src/**/__mocks__/**',
				'src/**/index.ts',
				'src/**/*.d.ts',
			],
		},
	},
});
