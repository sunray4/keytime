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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const vscode = __importStar(require("vscode"));
const ws_1 = __importDefault(require("ws"));
const findFolder_1 = require("./findFolder");
class Client {
    ws = null;
    output;
    initialHb = null;
    isOpen = false;
    isConnecting = false; // to prevent concurrent reconnection attempts - this should be true when ws is open
    constructor(output) {
        this.output = output;
        this.connect();
    }
    async connect() {
        if (this.isConnecting) {
            return;
        }
        this.isConnecting = true;
        this.ws = new ws_1.default("ws://localhost:8081");
        this.ws.on("error", (err) => {
            this.output.appendLine(err.message);
            this.isOpen = false;
            this.isConnecting = false;
        });
        this.ws.on("open", () => {
            this.output.appendLine("Connected to server");
            this.isOpen = true;
            this.ws?.send("Hello from client");
            if (this.initialHb) {
                this.sendHeartbeat(this.initialHb);
                this.output.appendLine("sent initial heartbeat...");
                this.initialHb = null;
            }
            // this.sendQueue();
        });
        this.ws.on("message", (data) => {
            this.output.appendLine(`Received message: ${data.toString()}`);
        });
        this.ws.on("close", (code, reason) => {
            this.output.appendLine("Disconnected from server");
            this.isOpen = false;
            this.isConnecting = false;
            vscode.window.showInformationMessage("Server disconnected. You won't be able to track time until you restart the server.");
        });
    }
    // private sendQueue() {
    //   if (this.isOpen) {
    //     this.queue.forEach(async (message) => {
    //       this.sendHeartbeat(message);
    //       await new Promise((resolve) => setTimeout(resolve, 1000));
    //     });
    //     this.output.appendLine(`Sent ${this.queue.length} messages from queue`);
    //     this.queue = [];
    //   }
    // }
    prepareHeartbeat(doc, timestamp, folderNames) {
        const message = {
            type: "heartbeat",
            timestamp: timestamp,
            folder: (0, findFolder_1.findFolder)(folderNames, doc.uri.path),
            lang: doc.languageId,
            editor: "vscode",
        };
        if (message.folder === "") {
            this.output.appendLine("No corresponding folder found. Heartbeat not sent.");
            return;
        }
        this.sendHeartbeat(message);
    }
    sendHeartbeat(message) {
        if (this.isOpen) {
            this.ws?.send(JSON.stringify(message));
            this.output.appendLine(`Sent message: ${JSON.stringify(message)}`);
            // } else if (this.isConnecting) {
            //   this.queue.push(message);
        }
        else {
            // this.queue.push(message);
            this.initialHb = message;
            this.connect();
        }
    }
    close() {
        this.ws?.close();
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map