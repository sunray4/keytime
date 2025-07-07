"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const client_1 = require("./client");
let client = null;
const hbInterval = 1000 * 60 * 2;
const maxInterval = 1000 * 60 * 15;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
async function activate(context) {
    // create output channel
    let output = await vscode.window.createOutputChannel("Output");
    // create extension client
    const client = await new client_1.Client(output);
    output.appendLine("Activating keytime extension...");
    output.show(true);
    output.appendLine('Congratulations, your extension "keytime" is now active!');
    let lastHeartbeat = 0;
    let folderNames;
    const folders = vscode.workspace.workspaceFolders;
    if (!folders || folders.length <= 0) {
        output.appendLine("No workspace folders found");
        return;
    }
    else {
        folderNames = folders.map((folder) => folder.name);
    }
    // send initial heartbeat when extension is activated
    const editor = vscode.window.activeTextEditor;
    let doc = null;
    if (editor) {
        output.appendLine("editor found");
        doc = editor.document;
    }
    if (doc && doc.uri.scheme === "file") {
        // if no document is open, don't send heartbeat
        lastHeartbeat = Date.now();
        client.prepareHeartbeat(doc, lastHeartbeat, folderNames);
    }
    vscode.workspace.onDidChangeTextDocument((event) => {
        // check if changes are from a file - prevent output channel changes from being tracked
        const doc = event.document;
        if (doc && doc.uri.scheme === "file") {
            output.appendLine("text doc change");
            if ((Date.now() - lastHeartbeat >= hbInterval &&
                Date.now() - lastHeartbeat <= maxInterval) ||
                lastHeartbeat === 0) {
                lastHeartbeat = Date.now();
                client.prepareHeartbeat(doc, lastHeartbeat, folderNames);
            }
        }
    });
    vscode.window.onDidChangeActiveTextEditor((event) => {
        if (event) {
            lastHeartbeat = Date.now();
            const doc = event.document;
            if (doc && doc.uri.scheme === "file") {
                output.appendLine("text editor changed");
                client.prepareHeartbeat(doc, lastHeartbeat, folderNames);
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
                if (doc && doc.uri.scheme === "file") {
                    client.prepareHeartbeat(doc, lastHeartbeat, folderNames);
                }
            }
        }
    });
    vscode.workspace.onDidChangeWorkspaceFolders((event) => {
        const folders = vscode.workspace.workspaceFolders;
        if (folders && folders.length > 0) {
            folderNames = folders.map((folder) => folder.name);
        }
        output.appendLine("workspace folders changed");
    });
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // 	const disposable = vscode.commands.registerCommand('keytime.helloWorld', () => {
    // 		// The code you place here will be executed every time your command is executed
    // 		// Display a message box to the user
    // 		vscode.window.showInformationMessage('Hello World from keytime!');
    // 	});
    // 	context.subscriptions.push(disposable);
}
// This method is called when your extension is deactivated
function deactivate() {
    client?.close();
}
//# sourceMappingURL=extension.js.map