// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { server } from "./server";

let cleanup: (() => void) | null = null;
let output = vscode.window.createOutputChannel("Output");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  output.appendLine("Activating keytime extension...");
  output.show(true);
  cleanup = server(output);
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  output.appendLine('Congratulations, your extension "keytime" is now active!');

  let lastHeartbeat = Date.now();

  vscode.workspace.onDidChangeTextDocument((event) => {

    // check if changes are from a file - prevent output channel changes from being tracked
    const doc = event.document;
    if (doc.uri.scheme !== "file") return;

    output.appendLine("text doc change");

    // event.contentChanges.forEach((change, i) => {
    //   output.appendLine(`--- Change #${i + 1} ---`);
    //   output.appendLine(`Inserted text: "${change.text}"`);
    //   output.appendLine(
    //     `Range replaced: (${change.range.start.line}, ${change.range.start.character}) → (${change.range.end.line}, ${change.range.end.character})`
    //   );
    //   output.appendLine(`Range length: ${change.rangeLength}`);
    //   output.appendLine(`Range offset: ${change.rangeOffset}`);
    //   output.appendLine("Document URI: " + event.document.uri.toString());
    // });
  });

  vscode.window.onDidChangeActiveTextEditor((event) => {
    output.appendLine("text editor changed");
  });

  vscode.window.onDidChangeWindowState((event) => {
    if (event.focused) {
      output.appendLine("editor focused");
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
  if (cleanup) {
    cleanup();
    cleanup = null;
  }
}
