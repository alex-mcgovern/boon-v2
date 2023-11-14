import { defineConfig } from "tsup";
import base from "../../tsup.base";

export default defineConfig({
	...base,
	dts: true,
	entry: ["src/index.ts"],
});
