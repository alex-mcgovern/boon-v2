import { defineConfig } from "tsup";
import base from "../../tsup.base";

export default defineConfig({
	...base,
	entry: ["src"],
});
