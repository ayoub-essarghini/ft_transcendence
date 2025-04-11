import { h, useRef, useState } from "../core/roboto.js"

export interface ChatProps {
    profile:{
        name: string
        image: string
        online: boolean
    },
    messages: {
        id: number
        text: string
        sender: "me" | "them"
        time: string
    }[]
}

export default function ChatConversation({id}:{id:number | null }) {

    const messagesEndRef = useRef<HTMLDivElement | null>(null)
    const [message, setMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleSendMessage = () => {
   
        console.log("Sending message:", message)

    }

    

    const messages = [
        {
            id: 1,
            text: "Hey, Are you free to play now!",
            sender: "them",
            time: "00:00 AM",
        },
        {
            id: 2,
            text: "Hello, How is it going Sist, Give me five minutes!",
            sender: "me",
            time: "00:00 AM",
        },
        {
            id: 3,
            text: "Yeah go ahead, I'm waiting!",
            sender: "them",
            time: "00:00 AM",
        },
        {
            id: 4,
            text: "Hello, How are you doing Sist!",
            sender: "me",
            time: "00:00 AM",
        },
        {
            id: 5,
            divider: true,
            time: "05:00 AM",
        },
        {
            id: 6,
            text: "Hey Where are you going Sist",
            sender: "me",
            time: "00:00 AM",
        },
    ]




    return (
        <div className="w-1/2 flex flex-col h-[92vh]  text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-[#1a1a6a]">
                <div className="flex items-center">
                    <div className="relative">
                        <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="Ahmed Amine" className="w-10 h-10 rounded-full" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a4a]"></div>
                    </div>
                    <div className="ml-3">
                        <div className="font-semibold">Olivia</div>
                        <div className="text-xs text-green-400">online</div>
                    </div>
                </div>
                <div className="flex space-x-3">

                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => {
                    if (msg.divider) {
                        return (
                            <div key={msg.id} className="flex justify-center items-center my-6">
                                <div className="h-px bg-[#1a1a6a] flex-grow"></div>
                                <div className="px-3 text-xs text-[var(--color-secondary)]">{msg.time}</div>
                                <div className="h-px bg-[#1a1a6a] flex-grow"></div>
                            </div>
                        )
                    }

                    return (
                        <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-[80%] md:max-w-[60%] rounded-2xl px-4 py-2 ${msg.sender === "me" ? 
                                    "bg-[#4a7aff] text-white" : "bg-[#1a1a6a] text-white"
                                    }`}
                            >
                                <p>{msg.text}</p>
                                <div className={`text-xs mt-1 ${msg.sender === "me" ? "text-blue-100" : "text-gray-400"}`}>
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    )
                })}

             { isTyping ?   (<div key="end"  className="flex justify-start">
                    <div className="text-sm text-gray-400 ml-2">Ahmed is typing...</div>
                </div>): (<div key="end"  className="flex justify-start">
                    <div className="text-sm text-gray-400 ml-2"></div>
                </div>)}

                <div ref={messagesEndRef} />
            </div>



            {/* Message Input */}
            <div className="p-3 border-t border-[#1a1a6a]">
                <div className="flex items-center">
                    <input
                        type="text"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                        value={message}
                        onInput={(e:any) => setMessage(e.target.value)}
                        placeholder="Message @AhmedHero..."
                        className="flex-1 bg-[#1a1a6a] text-white rounded-lg px-4 py-3 focus:outline-none"
                    />
                    <button
                        onClick={() => {
                            handleSendMessage()
                            setMessage("")
                            scrollToBottom()
                        }}
                        className="ml-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
