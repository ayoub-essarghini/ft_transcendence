import { h, useState } from "../core/roboto.js"
import ChatConversation from "./chat-content.js";

export const ChatSide = (children:any) => {
    const [activeTab, setActiveTab] = useState("messages")
    const [currentUser, setCurrentUser] = useState(0)

    const messages = [
        {
            id: 1,
            name: "Sophia",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            time: "2:45 PM",
            message: "Did you finish the task I sent earlier?",
            unread: 2,
        },
        {
            id: 2,
            name: "Liam",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            time: "10:20 AM",
            message: "Meet me at the usual place!",
            unread: 1,
        },
        {
            id: 3,
            name: "Olivia",
            avatar: "https://randomuser.me/api/portraits/women/50.jpg",
            time: "4:15 PM",
            message: "I'm almost done, will ping you in a bit.",
            unread: 0,
        },
        {
            id: 4,
            name: "Noah",
            avatar: "https://randomuser.me/api/portraits/men/17.jpg",
            time: "9:30 AM",
            message: "Yo! That movie was epic 😎",
            unread: 3,
        },
        {
            id: 5,
            name: "Emma",
            avatar: "https://randomuser.me/api/portraits/women/28.jpg",
            time: "7:22 AM",
            message: "Don't forget the meeting at 11.",
            unread: 4,
        },
        {
            id: 6,
            name: "James",
            avatar: "https://randomuser.me/api/portraits/men/76.jpg",
            time: "11:59 AM",
            message: "I'll be there in 10 mins.",
            unread: 0,
        },
        {
            id: 7,
            name: "Ava",
            avatar: "https://randomuser.me/api/portraits/women/55.jpg",
            time: "3:03 PM",
            message: "Hey! Just checking in 😊",
            unread: 6,
        },
    ];


    return (
        <div className="flex flex-row w-full ">
            <div className="w-1/4 flex flex-col h-[93vh] bg-[#1e1e4e69] text-white">
                {/* Search bar */}
                <div className="p-4 border-b border-[#2a2a60]">
                    <input type="text" className="outline-none border border-[#ffffff69] rounded-md py-2 px-2 text-sm text-white  bg-transparent w-full" placeholder="Find or Start a conversation" />
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
                                <div className={`absolute bottom-0 right-0 w-3 h-3 ${index % 2 == 0 ? 'bg-green-500' : 'bg-gray-500'} rounded-full border-2 border-[#1e1e4e]`}></div>
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
