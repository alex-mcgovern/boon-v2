import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
	plugins: [react()],
	build: {
		minify: false,
		lib: {
			entry: [
				path.resolve(__dirname, "components/button/index.js"),
				path.resolve(__dirname, "components/input/index.js"),
			],
			name: "boon-v2",
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", "react-dom"],
			output: {
				globals: {
					react: "react",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
			preserveModules: true,
			preserveModulesRoot: "components",
		},
	},
});
