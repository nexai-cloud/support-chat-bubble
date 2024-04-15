import { sendAiChat } from "~/server/query"
import { type NexaiSession, getClientSession } from "./session/chat-session"
import { getProjectSocket, getSessionSocket } from "./socket"
import { Socket } from "socket.io-client"

export class Nexai {

  nexaiApiKey: string
  session: NexaiSession
  nexaiApiUrl = 'https://nexai.site/api'
  ioUrl = 'https://chat.nexai.site'

  constructor({
    nexaiApiKey,
    session,
    nexaiApiUrl,
    ioUrl
  }: {
    nexaiApiKey: string;
    session?: NexaiSession;
    nexaiApiUrl?: string;
    ioUrl?: string;
  }) {
    this.nexaiApiKey = nexaiApiKey
    if (!session) {
      session = getClientSession(nexaiApiKey, "")
    }
    this.session = session
    if (ioUrl) this.ioUrl = ioUrl
    if (nexaiApiUrl) this.nexaiApiUrl = nexaiApiUrl
  }

  async chat(message: string) {
    return await sendAiChat({
      ...this.session,
      nexaiApiUrl: this.nexaiApiUrl,
      projectId: this.nexaiApiKey,
      message
    })
  }

  getProjectSocket(): Socket {
    return getProjectSocket({
      projectId: this.nexaiApiKey,
      ioUrl: this.ioUrl
    })
  }

  getSessionSocket(): Socket {
    return getSessionSocket({
      sessionKey: this.session.sessionId,
      ioUrl: this.ioUrl
    })
  }

}