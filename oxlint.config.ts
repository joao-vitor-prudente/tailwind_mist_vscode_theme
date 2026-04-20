import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
    maxWarnings: 0,
  },
  plugins: ["promise", "import"],
  rules: {
    "import/no-cycle": ["error", { maxDepth: 3 }],
  },
});
