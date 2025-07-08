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
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const date_fns_1 = require("date-fns");
const vscode = __importStar(require("vscode"));
const client_1 = require("./client");
const formatTime_1 = require("./formatTime");
let client = null;
let lastHeartbeat = 0;
// set heartbeat interval (always 2 minutes) and max heartbeat interval (decided by user - default 10 minutes)
const hbInterval = 1000 * 60 * 2;
let maxIntervalms = 1000 * 60 * 10;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
async function activate(context) {
    // create output channel
    let output = vscode.window.createOutputChannel("Output");
    // create extension client
    client = new client_1.Client(output);
    // date tracking with vscode global state
    const today = (0, date_fns_1.format)(new Date(), "yyyy-MM-dd");
    let date = context.globalState.get("date");
    if (!date) {
        date = (0, date_fns_1.format)(new Date(), "yyyy-MM-dd");
        context.globalState.update("date", date);
        context.globalState.update("timeSpent", "0");
    }
    if (date !== today) {
        date = today;
        context.globalState.update("date", date);
        context.globalState.update("timeSpent", "0");
    }
    output.appendLine(`time spent: ${context.globalState.get("timeSpent")}`);
    const sbItem = _createStatusBarItem(BigInt(context.globalState.get("timeSpent")));
    checkForMaxInterval(client, output, context);
    output.appendLine("Activating keytime extension...");
    output.show(true);
    output.appendLine('Congratulations, your extension "keytime" is now active!');
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
        output.appendLine("initial editor found");
        doc = editor.document;
        const newHeartbeat = Date.now();
        if (client) {
            processHeartbeat(newHeartbeat, doc, context, output, sbItem, client, folderNames);
        }
    }
    vscode.workspace.onDidChangeTextDocument((event) => {
        if (client) {
            checkForMaxInterval(client, output, context);
        }
        // check if changes are from a file - prevent output channel changes from being tracked
        const doc = event.document;
        const newHeartbeat = Date.now();
        if ((newHeartbeat - lastHeartbeat >= hbInterval &&
            newHeartbeat - lastHeartbeat <= maxIntervalms) ||
            lastHeartbeat === 0) {
            output.appendLine("text changed");
            if (client) {
                processHeartbeat(newHeartbeat, doc, context, output, sbItem, client, folderNames);
            }
        }
    });
    vscode.window.onDidChangeActiveTextEditor((event) => {
        if (client) {
            checkForMaxInterval(client, output, context);
        }
        if (event) {
            const doc = event.document;
            const newHeartbeat = Date.now();
            output.appendLine("editor changed");
            if (client) {
                processHeartbeat(newHeartbeat, doc, context, output, sbItem, client, folderNames);
            }
        }
    });
    vscode.window.onDidChangeWindowState((event) => {
        if (client) {
            checkForMaxInterval(client, output, context);
        }
        if (event.focused) {
            output.appendLine("editor focused");
            const newHeartbeat = Date.now();
            const doc = vscode.window.activeTextEditor?.document;
            if (doc && client) {
                processHeartbeat(newHeartbeat, doc, context, output, sbItem, client, folderNames);
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
}
// // This method is called when your extension is deactivated
// export function deactivate() {
//   client?.close();
// }
function _createStatusBarItem(timeSpent) {
    const sbItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
    sbItem.text = `$(timeline-open) ${(0, formatTime_1.formatTime)(timeSpent)}`;
    sbItem.tooltip = "Time spent coding today";
    sbItem.show();
    return sbItem;
}
function _updateStatusBarItem(sbItem, timeSpent) {
    sbItem.text = `${(0, formatTime_1.formatTime)(timeSpent)}`;
}
function processHeartbeat(newHeartbeat, doc, context, output, sbItem, client, folderNames) {
    if (doc && doc.uri.scheme === "file") {
        output.appendLine("doc found");
        // update local vscode timespent data
        if (lastHeartbeat !== 0) {
            const timeSpent = BigInt(context.globalState.get("timeSpent"));
            if (timeSpent >= 0 && newHeartbeat - lastHeartbeat <= maxIntervalms) {
                context.globalState.update("timeSpent", timeSpent + BigInt(newHeartbeat - lastHeartbeat));
                output.appendLine(`time spent: ${context.globalState.get("timeSpent")}`);
                _updateStatusBarItem(sbItem, BigInt(context.globalState.get("timeSpent")));
            }
        }
        lastHeartbeat = newHeartbeat;
        client.prepareHeartbeat(doc, newHeartbeat, folderNames, (0, date_fns_1.format)(new Date(), "yyyy-MM-dd"));
    }
}
function checkForMaxInterval(client, output, context) {
    let mi = context.globalState.get("maxInterval");
    if (mi && typeof mi === "number") {
        maxIntervalms = mi * 60 * 1000;
    }
    else {
        const maxInterval = client.getMaxInterval();
        if (maxInterval) {
            maxIntervalms = maxInterval * 60 * 1000;
            output.appendLine(`updated maxInterval: ${maxInterval}`);
            context.globalState.update("maxInterval", maxInterval);
        }
    }
}
//# sourceMappingURL=extension.js.map