#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const reposCommand_1 = require("./commands/reposCommand");
const serverCommand_1 = require("./commands/serverCommand");
const program = new commander_1.Command();
program
    .name("keytime")
    .description("Keytime is a tool to help you manage your time")
    .version("1.0.0");
(0, reposCommand_1.reposCommand)(program);
(0, serverCommand_1.startCommand)(program);
(0, serverCommand_1.stopCommand)(program);
program.parse();
//# sourceMappingURL=index.js.map