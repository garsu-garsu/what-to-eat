import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "what-to-eat-bruni",
  brand: {
    displayName: "오늘 뭐먹지",
    primaryColor: "#FF6B35",
    icon: "https://static.toss.im/appsintoss/13203/f2ffa704-cec0-41e1-a147-e21712edceba.png",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite dev",
      build: "vite build",
    },
  },
  permissions: [],
  outdir: "dist",
  navigationBar: { withBackButton: true, withHomeButton: false },
});
