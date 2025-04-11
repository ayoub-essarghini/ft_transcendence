import { h, useEffect, useState } from "../core/roboto.js"
import ChatConversation from "./chat-content.js";

export const ChatSide = () => {
    const [activeTab, setActiveTab] = useState("messages")
    const [currentUser, setCurrentUser] = useState(0)
    const [searchTerm, setSearchTerm] = useState("");
    interface Message {
        id: number;
        name: string;
        avatar: string;
        time: string;
        message: string;
        unread: number;
        online: boolean;
    }

    const [messages, setMessages] = useState<Message[]>([])
    const messages2 = [
        {
            id: 1,
            name: "Alice Johnson",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            time: "06:02 PM",
            message: "Of course! I’ll be there at 7 🕖",
            unread: 2,
            online: true,
        },
        {
            id: 2,
            name: "Mike Thompson",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            time: "03:50 PM",
            message: "Awesome! Let's celebrate later 😎",
            unread: 1,
            online: false,
        },
        {
            id: 3,
            name: "Sophie Lee",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            time: "08:02 AM",
            message: "You got this 💪",
            unread: 0,
            online: true,
        },
        {
            id: 4,
            name: "Daniel Kim",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
            time: "09:31 AM",
            message: "Give me 5 minutes, just grabbing coffee ☕",
            unread: 3,
            online: true,
        },
        {
            id: 5,
            name: "Emma Wilson",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
            time: "02:11 PM",
            message: "Sure! Just a sec...",
            unread: 4,
            online: false,
        },
        {
            id: 6,
            name: "Jason Rivera",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg",
            time: "05:34 PM",
            message: "Perfect! Let’s squad up 🔥",
            unread: 0,
            online: true,
        },
        {
            id: 7,
            name: "Nina Patel",
            avatar: "https://randomuser.me/api/portraits/women/7.jpg",
            time: "01:01 PM",
            message: "Sure, what’s up?",
            unread: 6,
            online: false,
        },
    ];
    useEffect(() => {
        // Simulate API call
        setMessages(messages)
    }, [])

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);

    const handleSearch = (term: string) => {
        if (!term.trim()) {
            setMessages(messages2);
            return;
        }
        
        const filteredMessages = messages2.filter((message) =>
            message.name.toLowerCase().includes(term.toLowerCase())
        );

        setMessages(filteredMessages);
    };


    return (
        <div className="flex flex-row w-full ">
            <div className="w-1/4 flex flex-col h-[93vh] bg-[#1e1e4e69] text-white border-r border-[var(--color-card-border)]">
                {/* Search bar */}
                <div className="p-4 border-b border-[#2a2a60]">
                    <input type="text" className="outline-none border border-[#ffffff69]
                     rounded-md py-2 px-2 text-sm text-white 
                    bg-transparent w-full"
                        placeholder="Find or Start a conversation"
                        onInput={(e: any) => { setSearchTerm(e.target.value) }}
                    />
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[#2a2a60]">
                    <button
                        className={`flex-1 py-3 relative ${activeTab === "messages" ? "border-b-2 border-white font-semibold" : "text-gray-400"}`}
                        onClick={() => setActiveTab("messages")}
                    >
                        Messages
                        <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-[var(--color-secondary)] rounded-full">
                            16
                        </span>
                    </button>
                    <button
                        className={`flex-1 py-3 relative ${activeTab === "channels" ? "border-b-2 border-white font-semibold" : "text-gray-400"}`}
                        onClick={() => setActiveTab("channels")}
                    >
                        Channels
                        <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-[var(--color-secondary)] rounded-full">
                            1
                        </span>
                    </button>
                </div>

                {/* Messages list */}
                <div className="flex-1 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div
                            onClick={() => {
                                setCurrentUser(index)

                            }}
                            key={message.id}
                            className="flex items-center p-3 border-b border-[#2a2a60] hover:bg-[#2a2a60c5] cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src={message.avatar}
                                    alt={message.name}
                                    className="w-8 h-8 rounded-full bg-gray-700"
                                />
                                <div className={`absolute bottom-0 right-0 w-3 h-3 ${message.online == true ? 'bg-green-500' : 'bg-gray-500'} rounded-full border-2 border-[#1e1e4e]`}></div>
                            </div>
                            <div className="ml-3 flex-1 relative">
                                <div className="flex justify-between">
                                    <span className="font-medium">{message.name}</span>
                                    <span className="text-xs text-gray-400">{message.time}</span>
                                </div>
                                <p className="text-sm text-gray-300 w-[8rem] truncate overflow-hidden whitespace-nowrap tooltip" data-tooltip={message.message}>{message.message}</p>
                            </div>
                            <div className="ml-2 flex-shrink-0">
                                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-[var(--color-secondary)] rounded-full">
                                    {message.unread}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-[#2a2a60] items-center flex flex-wrap justify-normal">
                    <div className="rounded-full justify-center items-center overflow-hidden h-10 w-10">

                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />

                    </div>
                    <div className="flex flex-col items-center ml-4">
                        <div className="font-bold">Hicham Game</div>
                        <div className="text-sm text-gray-300">My Account</div>
                    </div>

                </div>
            </div>

            {/* Chat content will go here */}
            <div className="w-full ">
                <ChatConversation id={currentUser} />
            </div>
        </div>

    )
}
