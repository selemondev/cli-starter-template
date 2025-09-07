import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: 'src/index.ts',
	dts: true,
	format: ['esm', 'cjs'],
	minify: true,
	shims: true,
	exports: true,
});
