import { h } from "../core/roboto.js"

export const ProfileHeader = () => {
    return (
        <div className="w-10/12 rounded-3xl bg-[#0a0b34] text-white overflow-hidden">

            <div className="relative pt-4 px-4 pb-6">

                <button className="absolute top-6 right-6 p-2 rounded-full bg-[#1a1b4b] bg-opacity-50 hover:bg-opacity-70 transition-colors">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>


                <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden">
                    <img src="/placeholder.svg?height=64&width=64" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>


            <div className="mx-4 mb-4 p-2 rounded-xl bg-[#151863] border border-[#2a2b6b]">

                <div className="mb-6 pb-4 border-b border-[#2a2b6b]">
                    <h2 className="text-lg font-semibold mb-1">Ahmed Amine</h2>
                    <p className="text-gray-300">#AhmedHero</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold ">Member Since</h3>
                    <p className="text-gray-300">Apr 29, 2023</p>
                </div>
            </div>
        </div>
    )
}
