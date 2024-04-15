import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { getProjectSocket, getSessionSocket } from './lib/socket';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './components/ui/resizable';
import { getClientSession } from './lib/session/chat-session';
import { ChatInput } from './ui/chat-input';
import logger from 'debug';
import { NexaiChatBubble } from '../chat-bubble';
const debug = logger('nexai:app');
const msgs = observable([]);
const projectMsgs = observable([]);
const addMsg = action((msg) => {
    msgs.push(msg);
});
const addProjectMsg = action((msg) => {
    projectMsgs.push(msg);
});
const nexaiApiKey = 'clu8hm40800004vzfocfds9xa';
const nexaiAssetsUrl = 'https://nexai.site/ai/assets';
export const App = observer(() => {
    const loaded = useRef(false);
    const clientSession = getClientSession(nexaiApiKey, nexaiAssetsUrl);
    const sessionIo = getSessionSocket({
        sessionKey: clientSession.sessionId
    });
    const projectIo = getProjectSocket({
        projectId: nexaiApiKey
    });
    const sendSessionChatMsg = (message) => {
        const chatMsg = {
            message,
            projectId: nexaiApiKey,
            sessionKey: clientSession.sessionId,
            fromName: clientSession.name,
            toName: 'support'
        };
        sessionIo.emit('chat', chatMsg);
    };
    const sendSupportChatMsg = (message) => {
        const chatMsg = {
            message,
            projectId: nexaiApiKey,
            sessionKey: clientSession.sessionId,
            fromName: 'support',
            toName: clientSession.name
        };
        projectIo.emit('chat', chatMsg);
    };
    const onSendSessionChatMsg = (msg) => {
        sendSessionChatMsg(msg);
    };
    const onSendSupportChatMsg = (msg) => {
        sendSupportChatMsg(msg);
    };
    const onChat = (msg, ...args) => {
        debug('session chat msg', { msg, args });
        addMsg(msg);
    };
    const onProjectChat = (msg, ...args) => {
        debug('project chat msg', { msg, args });
        addProjectMsg(msg);
    };
    useEffect(() => {
        if (loaded.current)
            return;
        debug('loaded session...');
        sessionIo.on('chat', onChat);
        projectIo.on('chat', onProjectChat);
        loaded.current = true;
        // setTimeout(() => {
        //   sendSessionChatMsg('hello from client')
        // }, 100)
    });
    return (_jsxs("div", { className: 'flex-col align-middle items-center bg-slate-50', children: [_jsxs(ResizablePanelGroup, { direction: "horizontal", className: 'gap-1', children: [_jsxs(ResizablePanel, { children: [_jsx("h2", { className: "text-2xl font-bold", children: "Chat" }), _jsx("div", { className: 'flex-col space-y-2 my-2 items-start align-top h-[80vh] overflow-y-auto', children: msgs.map((msg, index) => (_jsxs("p", { className: 'flex gap-1 p-2 border rounded-xl', children: [_jsx("span", { className: 'font-bold', children: msg.fromName }), _jsx("span", { children: msg.message })] }, index))) }), _jsx(ChatInput, { onSendChatMsg: onSendSessionChatMsg })] }), _jsx(ResizableHandle, {}), _jsxs(ResizablePanel, { children: [_jsx("h2", { className: "text-2xl font-bold", children: "Dashboard" }), _jsx("div", { className: 'flex-col space-y-2 my-2 items-start align-top h-[80vh] overflow-y-auto', children: projectMsgs.map((msg, index) => (_jsxs("p", { className: 'flex gap-1 p-2 border rounded-xl', children: [_jsx("span", { className: 'font-bold', children: msg.fromName }), _jsx("span", { children: msg.message })] }, index))) }), _jsx(ChatInput, { onSendChatMsg: onSendSupportChatMsg })] })] }), _jsx("div", { className: "fixed bottom-50 right-10 z-50", style: {
                    bottom: 140
                }, children: _jsx(NexaiChatBubble, { width: 400, nexaiApiKey: nexaiApiKey, aiName: 'AI', aiAvatarUrl: 'https://nexai.site/ai/assets/avatars/alien-3-eyes.png', projectName: 'Nexai', chatSuggests: [
                        'Hi! I\'m fine.|What is this?',
                        'Cool!|How do I use it?',
                        'API?|Apps?',
                        'NodeJS|React|Typescript|JS',
                        'Pricing?|Free option?',
                        'I am satisfied.|I am not happy.',
                        'Thanks, bye.'
                    ] }) })] }));
});
