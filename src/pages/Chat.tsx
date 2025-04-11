
import { ChatSide } from "../components/chat-side.js";
import { h } from "../core/roboto.js";
import { Layout } from "./layout/layout.js";



export const Chat = () => {

    return (
        <Layout  title="Chat" children={
        <div className="z-50">
            <ChatSide/>
        </div>
        }/>
    )
}