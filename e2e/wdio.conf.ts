import type { Options } from "@wdio/types";
import path from "path";

export const config: Options.Testrunner = {
  runner: "local",
  specs: [path.join(__dirname, "features/**/*.feature")],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true
    }
  ],
  logLevel: "info",
  baseUrl: "http://localhost:3000",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  reporters: ["spec"],
  cucumberOpts: {
    require: ["./e2e/step-definitions/**/*.ts"],
    timeout: 60000
  },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./e2e/tsconfig.json"
    }
  }
};
