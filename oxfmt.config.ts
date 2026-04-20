import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 120,
  ignorePatterns: ["dist/**", "convex/_generated/**", "src/routeTree.gen.ts"],
});
