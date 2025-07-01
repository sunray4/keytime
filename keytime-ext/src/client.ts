import WebSocket from 'ws';
import * as vscode from "vscode";

interface Message {
    type: string;
    timestamp: number;
    filename: string | null;
}

export class Client {
    private ws: WebSocket | null = null;
    private output: vscode.OutputChannel;
    private queue: Message[] = [];
    private isOpen: boolean = false;

    constructor(output: vscode.OutputChannel) {
        this.output = output;
        this.connect();
    }

    private async connect() {
        this.ws = new WebSocket('ws://localhost:8081');

        this.ws.on('error', (err) => this.output.appendLine(err.message));
        
        this.ws.on('open', () => {
            this.output.appendLine('Connected to server');
            this.isOpen = true;
            this.ws?.send('Hello from client');
            this.sendQueue();
        });

        this.ws.on('message', (data) => {
            this.output.appendLine(`Received message: ${data.toString()}`);
        });

        this.ws.on('close', () => {
            this.output.appendLine('Disconnected from server');
        });
    }

    private sendQueue() {
        if (this.isOpen) {
            this.queue.forEach(message => this.sendHeartbeat(message));
        }
    }

    public sendHeartbeat(message: Message) {
        if (this.isOpen) {
            this.ws?.send(JSON.stringify(message));
            this.output.appendLine(`Sent message: ${JSON.stringify(message)}`);
        } else {
            this.queue.push(message);
        }
    }

    public close() {
        this.ws?.close();
    }
}

// export function server(output: vscode.OutputChannel): () => void {
//     ws = new WebSocket('ws://localhost:8081');

//     ws.on('error', output.appendLine);
    
//     ws.on('open', () => {
//         output.appendLine('Connected to server');
//         ws?.send('Hello from client');
//     });

//     ws.on('message', (data) => {
//         output.appendLine(`Received message: ${data.toString()}`);
//     });

//     ws.on('error', (error) => {
//         output.appendLine(`WebSocket error: ${error}`);
//     });

//     ws.on('close', () => {
//         output.appendLine('Disconnected from server');
//     });

//     return () => {
//         if (ws) {
//             ws.close();
//             ws = null;
//         }
//     };
// }