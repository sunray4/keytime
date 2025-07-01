// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Client } from "./client";


let output = vscode.window.createOutputChannel("Output");
 // create extension client
const client = new Client(output);
const hbInterval = 1000 * 60 * 2;
const maxInterval = 1000 * 60 * 15;


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  output.appendLine("Activating keytime extension...");
  output.show(true);

  output.appendLine('Congratulations, your extension "keytime" is now active!');

  let lastHeartbeat = Date.now();
  
  // send initial heartbeat when extension is activated
  const editor = vscode.window.activeTextEditor;
  let doc = null;
  if (editor) {
    doc = editor.document;
  }
  client.sendHeartbeat("heartbeat", lastHeartbeat, doc);

  vscode.workspace.onDidChangeTextDocument((event) => {
    // check if changes are from a file - prevent output channel changes from being tracked
    const doc = event.document;
    if (doc.uri.scheme !== "file") return;

    output.appendLine("text doc change");

    if (Date.now() - lastHeartbeat >= hbInterval && Date.now() - lastHeartbeat <= maxInterval) {
      lastHeartbeat = Date.now();
      output.appendLine("sending heartbeat...");
      client.sendHeartbeat("heartbeat", Date.now(), doc);
    }
  });

  vscode.window.onDidChangeActiveTextEditor((event) => {
    if (!event) return;
    lastHeartbeat = Date.now();
    const doc = event.document;
    if (!doc) return;

    output.appendLine("text editor changed");
    output.appendLine("sending heartbeat...");
    client.sendHeartbeat("heartbeat", Date.now(), doc);

  });

  vscode.window.onDidChangeWindowState((event) => {
    if (event.focused) {
      lastHeartbeat = Date.now();
      output.appendLine("editor focused");

      const editor = vscode.window.activeTextEditor;
      let doc = null;
      if (editor) {
        doc = editor.document;
      }

      output.appendLine("sending heartbeat...");
      client.sendHeartbeat("heartbeat", Date.now(), doc);
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
  client.close();
}
