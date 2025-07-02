interface Message {
    type: string;
    timestamp: number;
    folder: string;
    lang: string;
    editor: string;
}
export declare function handleHeartbeat(message: Message): Promise<void>;
export {};
//# sourceMappingURL=handleHeartbeat.d.ts.map