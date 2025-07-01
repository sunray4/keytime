// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Client } from "./client";

let client: Client | null = null;

const hbInterval = 1000 * 60 * 2;
const maxInterval = 1000 * 60 * 15;


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // create output channel
  let output = await vscode.window.createOutputChannel("Output");
  // create extension client
  const client = await new Client(output);

  output.appendLine("Activating keytime extension...");
  output.show(true);

  output.appendLine('Congratulations, your extension "keytime" is now active!');

  let lastHeartbeat = 0;
  
  // send initial heartbeat when extension is activated
  const editor = vscode.window.activeTextEditor;
  let doc = null;
  if (editor) {
    output.appendLine("editor found");
    doc = editor.document;
  }
  if (doc) { // if no document is open, don't send heartbeat
    lastHeartbeat = Date.now();
    const message = {
      type: "heartbeat",
      timestamp: lastHeartbeat,
      filename: doc.uri.path, 
    };
    output.appendLine("sending initial heartbeat...");
    client.sendHeartbeat(message);
  }

  vscode.workspace.onDidChangeTextDocument((event) => {
    // check if changes are from a file - prevent output channel changes from being tracked
    const doc = event.document;
    if (doc.uri.scheme === "file") {
      output.appendLine("text doc change");

      if (Date.now() - lastHeartbeat >= hbInterval && Date.now() - lastHeartbeat <= maxInterval || lastHeartbeat === 0) {
        lastHeartbeat = Date.now();
        const message = {
          type: "heartbeat",
          timestamp: lastHeartbeat,
          filename: doc.uri.path, 
        };
        output.appendLine("sending heartbeat...");
        client.sendHeartbeat(message);
      }
    }
  });

  vscode.window.onDidChangeActiveTextEditor((event) => {
    if (event) {
      lastHeartbeat = Date.now();
      const doc = event.document;
      if (doc) {
        output.appendLine("text editor changed");
        output.appendLine("sending heartbeat...");
        const message = {
          type: "heartbeat",
          timestamp: lastHeartbeat,
          filename: doc.uri.path, 
        };
        client.sendHeartbeat(message);
      }
    }
  });

  vscode.window.onDidChangeWindowState((event) => {
    if (event.focused) {
      lastHeartbeat = Date.now();
      output.appendLine("editor focused");

      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const doc = editor.document;
        if (doc) {
          output.appendLine("sending heartbeat...");
          const message = {
            type: "heartbeat",
            timestamp: lastHeartbeat,
            filename: doc.uri.path, 
          };
          client.sendHeartbeat(message);
        }
      }
    }
  });

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // 	const disposable = vscode.commands.registerCommand('keytime.helloWorld', () => {
  // 		// The code you place here will be executed every time your command is executed
  // 		// Display a message box to the user
  // 		vscode.window.showInformationMessage('Hello World from keytime!');
  // 	});

  // 	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
  client?.close();
}
