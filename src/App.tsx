import { useEffect, useRef } from 'react'
import { getProjectSocket, getSessionSocket } from './lib/socket'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './components/ui/resizable'
import { getClientSession } from './lib/session/chat-session'
import { ChatInput } from './ui/chat-input'
import logger from 'debug'
import { NexaiChatBubble } from '../chat-bubble'

const debug = logger('nexai:app')

type ChatMsg = {
  projectId: string;
  sessionKey: string;
  message: string;
  fromName: string;
  toName: string;
}
const msgs = observable<ChatMsg>([])
const projectMsgs = observable<ChatMsg>([])

const addMsg = action((msg: ChatMsg) => {
  msgs.push(msg)
})

const addProjectMsg = action((msg: ChatMsg) => {
  projectMsgs.push(msg)
})

const nexaiApiKey = 'clu8hm40800004vzfocfds9xa'
const nexaiAssetsUrl = 'https://nexai.site/ai/assets'

export const App = observer(() => {

  const loaded = useRef(false)
  const clientSession = getClientSession(nexaiApiKey, nexaiAssetsUrl)
  const sessionIo = getSessionSocket({
    sessionKey: clientSession.sessionId
  })
  const projectIo = getProjectSocket({
    projectId: nexaiApiKey
  })

  const sendSessionChatMsg = (message: string) => {
    const chatMsg = {
      message,
      projectId: nexaiApiKey,
      sessionKey: clientSession.sessionId,
      fromName: clientSession.name,
      toName: 'support'
    }
    sessionIo.emit('chat', chatMsg)
  }

  const sendSupportChatMsg = (message: string) => {
    const chatMsg = {
      message,
      projectId: nexaiApiKey,
      sessionKey: clientSession.sessionId,
      fromName: 'support',
      toName: clientSession.name
    }
    projectIo.emit('chat', chatMsg)
  }

  const onSendSessionChatMsg = (msg: string) => {
    sendSessionChatMsg(msg)
  }

  const onSendSupportChatMsg = (msg: string) => {
    sendSupportChatMsg(msg)
  }

  const onChat = (msg: ChatMsg, ...args: string[]) => {
    debug('session chat msg', { msg, args })
    addMsg(msg)
  }

  const onProjectChat = (msg: ChatMsg, ...args: string[]) => {
    debug('project chat msg', { msg, args })
    addProjectMsg(msg)
  } 

  useEffect(() => {
    if (loaded.current) return
    debug('loaded session...')
    sessionIo.on('chat', onChat)
    projectIo.on('chat', onProjectChat)
    loaded.current = true
    // setTimeout(() => {
    //   sendSessionChatMsg('hello from client')
    // }, 100)
  })

  return (
    <div className='flex-col align-middle items-center bg-slate-50'>
    <ResizablePanelGroup direction="horizontal" className='gap-1'>
      <ResizablePanel>
        <h2 className="text-2xl font-bold">
          Chat
        </h2>
        <div className='flex-col space-y-2 my-2 items-start align-top h-[80vh] overflow-y-auto'>
          {
            msgs.map((msg, index) => (
              <p key={index} className='flex gap-1 p-2 border rounded-xl'>
                <span className='font-bold'>{msg.fromName}</span>
                <span>{msg.message}</span>
              </p>
            ))
          }
        </div>
        <ChatInput
          onSendChatMsg={onSendSessionChatMsg}
        />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>
        <div className='flex-col space-y-2 my-2 items-start align-top h-[80vh] overflow-y-auto'>
          {
            projectMsgs.map((msg, index) => (
              <p key={index} className='flex gap-1 p-2 border rounded-xl'>
                <span className='font-bold'>{msg.fromName}</span>
                <span>{msg.message}</span>
              </p>
            ))
          }
        </div>
        <ChatInput
          onSendChatMsg={onSendSupportChatMsg}
        />
      </ResizablePanel>
    </ResizablePanelGroup>

      <div className="fixed bottom-50 right-10 z-50"
        style={{
          bottom: 140
        }}
      >
        <NexaiChatBubble
          width={400}
          nexaiApiKey={nexaiApiKey}
          aiName='AI'
          aiAvatarUrl='https://nexai.site/ai/assets/avatars/alien-3-eyes.png'
          projectName='Nexai'
          chatSuggests={[
            'Hi! I\'m fine.|What is this?',
            'Cool!|How do I use it?',
            'API?|Apps?',
            'NodeJS|React|Typescript|JS',
            'Pricing?|Free option?',
            'I am satisfied.|I am not happy.',
            'Thanks, bye.'
          ]}
        />
      </div>
    </div>
  )
})
