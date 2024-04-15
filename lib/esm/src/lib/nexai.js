var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sendAiChat } from "../server/query";
import { getClientSession } from "./session/chat-session";
import { getProjectSocket, getSessionSocket } from "./socket";
export class Nexai {
    constructor({ nexaiApiKey, session }) {
        Object.defineProperty(this, "nexaiApiKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "session", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nexaiApiUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'https://nexai.site/api'
        });
        this.nexaiApiKey = nexaiApiKey;
        if (!session) {
            session = getClientSession(nexaiApiKey, "");
        }
        this.session = session;
    }
    chat(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sendAiChat(Object.assign(Object.assign({}, this.session), { nexaiApiUrl: this.nexaiApiUrl, projectId: this.nexaiApiKey, message }));
        });
    }
    getProjectSocket() {
        return getProjectSocket({
            projectId: this.nexaiApiKey
        });
    }
    getSessionSocket() {
        return getSessionSocket({
            sessionKey: this.session.sessionId
        });
    }
}
