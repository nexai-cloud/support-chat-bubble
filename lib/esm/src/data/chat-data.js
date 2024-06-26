import { jsx as _jsx } from "react/jsx-runtime";
import { BotAvatar, ChatAvatar } from "../ui/chat-avatar";
import { ChooseAvatar } from "./choose-avatar";
export const getAiUser = ({ aiName, aiAvatarUrl }) => {
    console.log('aiAvatarUrl', aiAvatarUrl);
    return {
        userUid: 'nexai',
        name: aiName,
        avatar: aiAvatarUrl ? _jsx(ChatAvatar, { src: aiAvatarUrl, name: aiName }) : _jsx(BotAvatar, {}),
    };
};
export const getAiThreads = (chatSession, { aiName, aiAvatarUrl, nexaiAssetsUrl }) => [
    Object.assign(Object.assign({}, getAiUser({ aiName, aiAvatarUrl })), { hide: false, date: new Date(), messages: [
            {
                message: 'Hi there. I hope you are having a great day.'
            },
            {
                message: 'How may I help you?'
            },
            {
                message: (_jsx(ChooseAvatar, { nexaiAssetsUrl: nexaiAssetsUrl, chatSession: chatSession }))
            }
        ] })
];
