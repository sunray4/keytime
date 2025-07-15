#!/usr/bin/env node

import { Command } from "commander";
import { projCommand } from "./commands/projCommand";
import { startCommand, stopCommand } from "./commands/serverCommand";
import { userCommand } from "./commands/userCommand";
const program = new Command();

program
  .name("keytime")
  .description("Keytime is a tool to help you manage your time")
  .version("1.0.0");

projCommand(program);
userCommand(program);
startCommand(program);
stopCommand(program);
program.parse();
