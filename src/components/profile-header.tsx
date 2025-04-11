import { h } from "../core/roboto.js"

export const ProfileHeader = () => {
    return (
        <div className="w-10/12 rounded-lg border border-[var(--color-card-border)] text-white overflow-hidden transition-shadow duration-200 ease-in-out hover:shadow-md hover:shadow-[#00ffff83]">

            <div className="relative pt-4 px-4 pb-6">

                <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-card-history)] bg-opacity-50 hover:bg-opacity-70 transition-colors">
                    <i className="fa-solid fa-pen-to-square text-white text-sm"></i>
                </button>



                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>


            <div className="mx-4 mb-4 p-2 rounded-lg bg-[var(--color-card-history)] border border-[var(--color-card-border)]">

                <div className="mb-4 pb-4 border-b border-[var(--color-card-border)]">
                    <h2 className="text-[1rem] font-semibold mb-1">Ahmed Amine</h2>
                    <p className="text-gray-300">#AhmedHero</p>
                </div>

                <div>
                    <h3 className="text-[1rem] font-semibold ">Member Since</h3>
                    <p className="text-gray-300">Apr 29, 2023</p>
                </div>
            </div>
        </div>
    )
}
