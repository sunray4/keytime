#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const reposCommand_1 = require("./commands/reposCommand");
const program = new commander_1.Command();
program
    .name("keytime")
    .description("Keytime is a tool to help you manage your time")
    .version("1.0.0");
(0, reposCommand_1.reposCommand)(program);
program.parse();
//# sourceMappingURL=index.js.map