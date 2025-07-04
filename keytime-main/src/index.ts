#!/usr/bin/env node

import { Command } from "commander";
import { reposCommand } from "./commands/reposCommand";
import { startCommand, stopCommand } from "./commands/serverCommand";
const program = new Command();

program
  .name("keytime")
  .description("Keytime is a tool to help you manage your time")
  .version("1.0.0");

reposCommand(program);
startCommand(program);
stopCommand(program);
program.parse();
