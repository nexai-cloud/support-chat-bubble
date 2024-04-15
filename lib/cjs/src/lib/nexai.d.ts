import { type NexaiSession } from "./session/chat-session";
import { Socket } from "socket.io-client";
export declare class Nexai {
    nexaiApiKey: string;
    session: NexaiSession;
    nexaiApiUrl: string;
    constructor({ nexaiApiKey, session }: {
        nexaiApiKey: string;
        session?: NexaiSession;
    });
    chat(message: string): Promise<any>;
    getProjectSocket(): Socket;
    getSessionSocket(): Socket;
}
