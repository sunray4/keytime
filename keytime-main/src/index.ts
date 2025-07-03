#!/usr/bin/env node

import { spawn } from "child_process";
import { Command } from "commander";
import { reposCommand } from "./commands/reposCommand";
const program = new Command();

program
  .name("keytime")
  .description("Keytime is a tool to help you manage your time")
  .version("1.0.0");

// Start server in background
function startServerInBackground() {
  const serverProcess = spawn("node", [__dirname + "/server.js"], {
    detached: true,
    stdio: "ignore",
  });

  serverProcess.unref();

  // Store the PID for potential cleanup later
  console.log(`Server started in background with PID: ${serverProcess.pid}`);
}

// Check if server is already running
function isServerRunning(): Promise<boolean> {
  return new Promise((resolve) => {
    const testProcess = spawn("node", [
      "-e",
      `
      const WebSocket = require('ws');
      const ws = new WebSocket('ws://localhost:8081');
      ws.on('open', () => {
        console.log('Server is running');
        ws.close();
        process.exit(0);
      });
      ws.on('error', () => {
        console.log('Server is not running');
        process.exit(1);
      });
      setTimeout(() => {
        console.log('Server is not running');
        process.exit(1);
      }, 1000);
    `,
    ]);

    testProcess.on("close", (code) => {
      resolve(code === 0);
    });
  });
}

// Initialize server if not running
async function initializeServer() {
  const isRunning = await isServerRunning();
  if (!isRunning) {
    startServerInBackground();
    // Give the server a moment to start
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

// Initialize server when CLI starts
initializeServer().catch(console.error);

reposCommand(program);

program.parse();
