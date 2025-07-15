#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const projCommand_1 = require("./commands/projCommand");
const serverCommand_1 = require("./commands/serverCommand");
const userCommand_1 = require("./commands/userCommand");
const program = new commander_1.Command();
program
    .name("keytime")
    .description("Keytime is a tool to help you manage your time")
    .version("1.0.0");
(0, projCommand_1.projCommand)(program);
(0, userCommand_1.userCommand)(program);
(0, serverCommand_1.startCommand)(program);
(0, serverCommand_1.stopCommand)(program);
program.parse();
//# sourceMappingURL=index.js.map