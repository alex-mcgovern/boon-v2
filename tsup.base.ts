import { defineConfig } from "tsup";

export default defineConfig({
	banner: {
		js: '"use client"\n',
	},
	loader: {
		".css": "local-css",
	},
	dts: true,
	bundle: true,
	clean: true,
	external: ["react", "react-dom"],
	format: "esm",
	minify: false,
	outDir: "./dist",
	platform: "browser",
	target: "es2020",
	tsconfig: "tsconfig.json",
});
