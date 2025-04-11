import { h, useEffect, useRef, useState } from "../core/roboto.js"

export interface ChatProps {
    userId: number
    profile: {
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


export default function ChatConversation({ id }: { id: number | null }) {



    const messagesEndRef = useRef<HTMLDivElement | null>(null)
    const messagesContainerRef = useRef<HTMLDivElement | null>(null)
    const [message, setMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [previousChatId, setPreviousChatId] = useState<number | null>(null)

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }



    const handleSendMessage = () => {

        console.log("Sending message:", message)

    }


    const chats: ChatProps[] = [
        {
            userId: 1,
            profile: {
                name: "Alice Johnson",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                online: true,
            },
            messages: [
                { id: 1, text: "Hey! Are we still on for dinner tonight?", sender: "them", time: "06:00 PM" },
                { id: 2, text: "Of course! I'll be there at 7 🕖", sender: "me", time: "06:02 PM" },
                { id: 3, text: "Can't wait to see you there!", sender: "them", time: "06:15 PM" },
                { id: 4, text: "Same here! 😊", sender: "me", time: "06:16 PM" },
                { id: 5, text: "I'll take care of the reservation.", sender: "me", time: "06:18 PM" },
                { id: 6, text: "Great! See you soon.", sender: "them", time: "06:20 PM" },
                { id: 7, text: "Just booked a table at Bella's. Hope that works?", sender: "me", time: "06:25 PM" },
                { id: 8, text: "Perfect! I love their pasta 🍝", sender: "them", time: "06:27 PM" },
                { id: 9, text: "Me too! And their tiramisu is amazing", sender: "me", time: "06:30 PM" },
                { id: 10, text: "Oh yes! Definitely getting that for dessert", sender: "them", time: "06:32 PM" },
                { id: 11, text: "I'm leaving my place now. Traffic looks okay.", sender: "me", time: "06:40 PM" },
                { id: 12, text: "I'm starting to get ready. See you soon!", sender: "them", time: "06:42 PM" },
                { id: 13, text: "Just parking. Be there in 5!", sender: "me", time: "06:55 PM" },
                { id: 14, text: "Perfect timing! I just arrived too.", sender: "them", time: "06:56 PM" },
                { id: 15, text: "I see you by the entrance! Waving now 👋", sender: "me", time: "07:00 PM" },
                { id: 16, text: "I see you too! Coming over 😊", sender: "them", time: "07:01 PM" },
                { id: 17, text: "That was such a wonderful dinner! Thanks for suggesting it.", sender: "them", time: "09:30 PM" },
                { id: 18, text: "I had a great time too! We should do this again soon.", sender: "me", time: "09:32 PM" },
                { id: 19, text: "Absolutely! Maybe try that new place next weekend?", sender: "them", time: "09:35 PM" },
                { id: 20, text: "Sounds perfect! It's a date 😊", sender: "me", time: "09:37 PM" },
                { id: 21, text: "Got home safe. Thanks again for a lovely evening!", sender: "them", time: "10:00 PM" },
            ],
        },
        {
            userId: 2,
            profile: {
                name: "Mike Thompson",
                image: "https://randomuser.me/api/portraits/men/2.jpg",
                online: false,
            },
            messages: [
                { id: 1, text: "Did you finish the project?", sender: "them", time: "03:45 PM" },
                { id: 2, text: "Just submitted it now ✅", sender: "me", time: "03:47 PM" },
                { id: 3, text: "Awesome! Let's celebrate later 😎", sender: "them", time: "03:50 PM" },
                { id: 4, text: "For sure, I’m in! 🥳", sender: "me", time: "03:51 PM" },
                { id: 5, text: "How about drinks after the celebration?", sender: "them", time: "03:52 PM" },
                { id: 6, text: "Sounds perfect! 🍸", sender: "me", time: "03:53 PM" },
            ],
        },
        {
            userId: 3,
            profile: {
                name: "Sophie Lee",
                image: "https://randomuser.me/api/portraits/women/3.jpg",
                online: true,
            },
            messages: [
                { id: 1, text: "Good morning! Ready for the exam?", sender: "them", time: "08:00 AM" },
                { id: 2, text: "Kinda nervous but yeah 😅", sender: "me", time: "08:01 AM" },
                { id: 3, text: "You got this 💪", sender: "them", time: "08:02 AM" },
                { id: 4, text: "Thanks for the encouragement! 🙏", sender: "me", time: "08:05 AM" },
                { id: 5, text: "Any tips on the last chapter?", sender: "me", time: "08:10 AM" },
                { id: 6, text: "Just focus on the key points, you’ll be fine.", sender: "them", time: "08:12 AM" },
            ],
        },
        {
            userId: 4,
            profile: {
                name: "Daniel Kim",
                image: "https://randomuser.me/api/portraits/men/4.jpg",
                online: true,
            },
            messages: [
                { id: 1, text: "Join the call when you're ready", sender: "them", time: "09:30 AM" },
                { id: 2, text: "Give me 5 minutes, just grabbing coffee ☕", sender: "me", time: "09:31 AM" },
                { id: 3, text: "No worries, take your time!", sender: "them", time: "09:35 AM" },
                { id: 4, text: "Alright, I’m ready now!", sender: "me", time: "09:40 AM" },
                { id: 5, text: "Great, let’s dive in!", sender: "them", time: "09:45 AM" },
                { id: 6, text: "Starting now", sender: "me", time: "09:47 AM" },
            ],
        },
        {
            userId: 5,
            profile: {
                name: "Emma Wilson",
                image: "https://randomuser.me/api/portraits/women/5.jpg",
                online: false,
            },
            messages: [
                { id: 1, text: "Can you send me the notes from class?", sender: "them", time: "02:10 PM" },
                { id: 2, text: "Sure! Just a sec...", sender: "me", time: "02:11 PM" },
                { id: 3, text: "I’m sending them now!", sender: "me", time: "02:15 PM" },
                { id: 4, text: "Got them! Thanks 🙌", sender: "them", time: "02:20 PM" },
                { id: 5, text: "No problem, happy to help 😊", sender: "me", time: "02:22 PM" },
            ],
        },
        {
            userId: 6,
            profile: {
                name: "Jason Rivera",
                image: "https://randomuser.me/api/portraits/men/6.jpg",
                online: false,
            },
            messages: [
                { id: 1, text: "Wanna play tonight?", sender: "them", time: "05:30 PM" },
                { id: 2, text: "Yeah I'm free after 9!", sender: "me", time: "05:32 PM" },
                { id: 3, text: "Perfect! Let’s squad up 🔥", sender: "them", time: "05:34 PM" },
                { id: 4, text: "See you then! 🎮", sender: "me", time: "05:35 PM" },
                { id: 5, text: "Can’t wait to dominate!", sender: "them", time: "05:36 PM" },
            ],
        },
        {
            userId: 7,
            profile: {
                name: "Nina Patel",
                image: "https://randomuser.me/api/portraits/women/7.jpg",
                online: true,
            },
            messages: [
                { id: 1, text: "Can I ask you something real quick?", sender: "them", time: "01:00 PM" },
                { id: 2, text: "Sure, what’s up?", sender: "me", time: "01:01 PM" },
                { id: 3, text: "I need some advice on a project I’m working on", sender: "them", time: "01:02 PM" },
                { id: 4, text: "Of course! What’s the issue?", sender: "me", time: "01:05 PM" },
                { id: 5, text: "Can you take a look at the code later?", sender: "them", time: "01:10 PM" },
            ],
        },
        {
            userId: 8,
            profile: {
                name: "Liam Scott",
                image: "https://randomuser.me/api/portraits/men/8.jpg",
                online: true,
            },
            messages: [
                { id: 1, text: "Bro did you see that goal last night?!", sender: "them", time: "10:00 AM" },
                { id: 2, text: "Insane shot! Unreal!", sender: "me", time: "10:01 AM" },
                { id: 3, text: "What a game! I’m still hyped", sender: "them", time: "10:05 AM" },
                { id: 4, text: "Same! The energy was off the charts", sender: "me", time: "10:07 AM" },
                { id: 5, text: "We should catch the next match together", sender: "them", time: "10:10 AM" },
            ],
        },
        {
            userId: 9,
            profile: {
                name: "Olivia Bennett",
                image: "https://randomuser.me/api/portraits/women/9.jpg",
                online: false,
            },
            messages: [
                { id: 1, text: "Let’s meet tomorrow for coffee?", sender: "them", time: "04:45 PM" },
                { id: 2, text: "Yeah sure! Same place?", sender: "me", time: "04:46 PM" },
                { id: 3, text: "Yup. Can’t wait ☕", sender: "them", time: "04:47 PM" },
                { id: 4, text: "Looking forward to it!", sender: "me", time: "04:50 PM" },
            ],
        },
        {
            userId: 10,
            profile: {
                name: "Ethan Clark",
                image: "https://randomuser.me/api/portraits/men/10.jpg",
                online: true,
            },
            messages: [
                { id: 1, text: "What time’s the movie?", sender: "them", time: "07:20 PM" },
                { id: 2, text: "8 sharp. Don’t be late!", sender: "me", time: "07:21 PM" },
                { id: 3, text: "Haha I’ll try 😅", sender: "them", time: "07:22 PM" },
                { id: 4, text: "See you there, can’t wait!", sender: "me", time: "07:25 PM" },
                { id: 5, text: "Same here! 🍿", sender: "them", time: "07:26 PM" },
            ],
        }
    ];


    const chatId = (id ?? 0) + 1;
    console.log("chatId", chatId)
    const messages = chats.find(chat => chat.userId === chatId)?.messages || []
    const profile = chats.find(chat => chat.userId === chatId)?.profile

    useEffect(() => {

        const isChatChanged = previousChatId !== chatId;
        setPreviousChatId(chatId);

        if (messagesContainerRef.current) {
            if (isChatChanged) {

                messagesEndRef.current?.scrollIntoView({ block: 'end' });
            } else {

                scrollToBottom();
            }
        }
    }, [messages, chatId]);

    return (
        <div className="w-9/12 flex flex-col h-[93vh]  text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-[15px] bg-[#1e1e4e69] border-b border-[var(--color-card-border)]">
                <div className="flex items-center">
                    <div className="relative">
                        <img src={profile?.image} alt="Ahmed Amine" className="w-10 h-10 rounded-full" />
                        <div className={`absolute bottom-0 right-0 w-3 h-3 ${profile?.online == true ? 'bg-green-400' : 'bg-gray-400'} rounded-full border-2 border-[#0a0a4a]`}></div>
                    </div>
                    <div className="ml-3">
                        <div className="font-semibold">{profile?.name}</div>
                        <div className={`text-xs ${profile?.online === true ? 'text-green-400' : 'text-gray-400'} `}>{profile?.online === true ? 'Online' : 'Offline'}</div>
                    </div>
                </div>
                <div className="flex space-x-3">

                </div>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => {
                    // if (msg.divider) {
                    //     return (
                    //         <div key={msg.id} className="flex justify-center items-center my-6">
                    //             <div className="h-px bg-[#1a1a6a] flex-grow"></div>
                    //             <div className="px-3 text-xs text-[var(--color-secondary)]">{msg.time}</div>
                    //             <div className="h-px bg-[#1a1a6a] flex-grow"></div>
                    //         </div>
                    //     )
                    // }

                    return (
                        <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-[80%] md:max-w-[60%] rounded-2xl px-4 py-2 ${msg.sender === "me" ?
                                    "bg-[var(--color-secondary)] text-white" : "bg-[var(--color-card-history)] border border-[var(--color-card-border)] text-white"
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


                {isTyping ? (<div key="end" className="flex justify-start">
                    <div className="text-sm text-gray-400 ml-2">Ahmed is typing...</div>
                </div>) : null}
                <div ref={messagesEndRef} />

            </div>



            {/* Message Input */}
            <div className="p-[0.87rem] border-t border-[var(--color-card-border)] bg-[#1e1e4e69]">
                <div className="flex items-center">
                    <input
                        type="text"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                        value={message}
                        onInput={(e: any) => setMessage(e.target.value)}
                        placeholder={`Message @${profile?.name || ''}...`}
                        className="flex-1 bg-transparent text-white rounded-lg px-4 py-3 focus:outline-none"
                    />
                    <button
                        onClick={() => {
                            handleSendMessage()
                            setMessage("")
                            scrollToBottom()
                        }}
                        className="ml-2 bg-[var(--color-secondary)] text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
