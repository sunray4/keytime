// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { format } from "date-fns";
import * as vscode from "vscode";
import { Client } from "./client";
import { formatTime } from "./formatTime";

let client: Client | null = null;
let lastHeartbeat = 0;
// set heartbeat interval (always 2 minutes) and max heartbeat interval (decided by user - default 10 minutes)
const hbInterval = 1000 * 60 * 2;
let maxIntervalms = 1000 * 60 * 10;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // create output channel
  let output = vscode.window.createOutputChannel("Output");
  // create extension client
  client = new Client(output);

  // date tracking with vscode global state
  const today = format(new Date(), "yyyy-MM-dd");
  let date = context.globalState.get("date");
  if (!date) {
    date = format(new Date(), "yyyy-MM-dd");
    context.globalState.update("date", date);
    context.globalState.update("timeSpent", "0");
  }
  if (date !== today) {
    date = today;
    context.globalState.update("date", date);
    context.globalState.update("timeSpent", "0");
  }
  output.appendLine(`time spent: ${context.globalState.get("timeSpent")}`);
  const sbItem = _createStatusBarItem(
    BigInt(context.globalState.get("timeSpent") as string)
  );
  checkForMaxInterval(client, output, context);

  output.appendLine("Activating keytime extension...");
  output.show(true);

  output.appendLine('Congratulations, your extension "keytime" is now active!');

  let folderNames: string[];
  const folders = vscode.workspace.workspaceFolders;

  if (!folders || folders.length <= 0) {
    output.appendLine("No workspace folders found");
    return;
  } else {
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
      processHeartbeat(
        newHeartbeat,
        doc,
        context,
        output,
        sbItem,
        client,
        folderNames
      );
    }
  }

  vscode.workspace.onDidChangeTextDocument((event) => {
    if (client) {
      checkForMaxInterval(client, output, context);
    }
    // check if changes are from a file - prevent output channel changes from being tracked
    const doc = event.document;
    const newHeartbeat = Date.now();
    if (
      (newHeartbeat - lastHeartbeat >= hbInterval &&
        newHeartbeat - lastHeartbeat <= maxIntervalms) ||
      lastHeartbeat === 0
    ) {
      output.appendLine("text changed");
      if (client) {
        processHeartbeat(
          newHeartbeat,
          doc,
          context,
          output,
          sbItem,
          client,
          folderNames
        );
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
        processHeartbeat(
          newHeartbeat,
          doc,
          context,
          output,
          sbItem,
          client,
          folderNames
        );
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
        processHeartbeat(
          newHeartbeat,
          doc,
          context,
          output,
          sbItem,
          client,
          folderNames
        );
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
function _createStatusBarItem(timeSpent: bigint) {
  const sbItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    1
  );
  sbItem.text = `$(timeline-open) ${formatTime(timeSpent)}`;
  sbItem.tooltip = "Time spent coding today";
  sbItem.show();
  return sbItem;
}

function _updateStatusBarItem(sbItem: vscode.StatusBarItem, timeSpent: bigint) {
  sbItem.text = `${formatTime(timeSpent)}`;
}

function processHeartbeat(
  newHeartbeat: number,
  doc: vscode.TextDocument,
  context: vscode.ExtensionContext,
  output: vscode.OutputChannel,
  sbItem: vscode.StatusBarItem,
  client: Client,
  folderNames: string[]
) {
  if (doc && doc.uri.scheme === "file") {
    output.appendLine("doc found");
    // update local vscode timespent data
    if (lastHeartbeat !== 0) {
      const timeSpent = BigInt(context.globalState.get("timeSpent") as string);
      if (timeSpent >= 0 && newHeartbeat - lastHeartbeat <= maxIntervalms) {
        context.globalState.update(
          "timeSpent",
          timeSpent + BigInt(newHeartbeat - lastHeartbeat)
        );
        output.appendLine(
          `time spent: ${context.globalState.get("timeSpent")}`
        );
        _updateStatusBarItem(
          sbItem,
          BigInt(context.globalState.get("timeSpent") as string)
        );
      }
    }

    lastHeartbeat = newHeartbeat;
    client.prepareHeartbeat(
      doc,
      newHeartbeat,
      folderNames,
      format(new Date(), "yyyy-MM-dd")
    );
  }
}

function checkForMaxInterval(
  client: Client,
  output: vscode.OutputChannel,
  context: vscode.ExtensionContext
) {
  let mi = context.globalState.get("maxInterval");
  if (mi && typeof mi === "number") {
    maxIntervalms = mi * 60 * 1000;
  } else {
    const maxInterval = client.getMaxInterval();
    if (maxInterval) {
      maxIntervalms = maxInterval * 60 * 1000;
      output.appendLine(`updated maxInterval: ${maxInterval}`);
      context.globalState.update("maxInterval", maxInterval);
    }
  }
}
