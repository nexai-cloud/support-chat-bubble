import { randomAvatarGenerator } from "../avatars/random-avatar";
import { randomNameGenerator } from "./random-name"

export type NexaiSession = {
  name: string;
  sessionId: string;
  isShowChat: boolean;
  avatarUrl?: string;
  email?: string;
}

export const getClientSession = (apiKey: string, nexaiAssetsUrl: string): NexaiSession => {
  if (typeof window !== "undefined") {
    let session =  fetchSession(apiKey)
    if (!session) {
      session = createSession(nexaiAssetsUrl)
      saveClientSession(apiKey, session)
    }
    return session
  } else {
    return createSession(nexaiAssetsUrl)
  }
}

export const createSession = (nexaiAssetsUrl: string): NexaiSession => {
  const avatar = randomAvatarGenerator(nexaiAssetsUrl)
  return {
    name: randomNameGenerator({
      object: avatar.name,
      sep: ' '
    }),
    avatarUrl: avatar.path,
    sessionId: Math.random().toString(36).substring(2),
    isShowChat: true
  }
}

export const fetchSession = (apiKey: string): NexaiSession|undefined => {
  const session =  window.localStorage.getItem('nexai-session-' + apiKey)
  if (session) {
    return JSON.parse(session)
  }
}

export const saveClientSession = (apiKey: string, session: NexaiSession) => {
  const json = JSON.stringify(session)
  window.localStorage.setItem('nexai-session-' + apiKey, json)
}