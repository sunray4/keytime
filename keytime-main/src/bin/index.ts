#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import boxen from "boxen";

interface ServeArguments {
  port: number;
  verbose?: boolean;
}

const serve = (port: number): void => {
  console.log(`Server would start on port ${port}`);
};

// cli
const cli = yargs(hideBin(process.argv))
  .command<ServeArguments>(
    "serve [port]",
    "start the server",
    (yargs) => {
      return yargs.positional("port", {
        describe: "port to bind on",
        type: "number",
        default: 5000,
      });
    },
    (argv) => {
      if (argv.verbose) {
        console.info(`Starting server on port ${argv.port}`);
      }
      serve(argv.port);
    }
  )
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  })
  .help()
  .parse();

console.log(cli);
