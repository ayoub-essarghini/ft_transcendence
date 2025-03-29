import {h} from "../core/roboto.js"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: "play", label: "Play Game", icon: "🎮" },
    { id: "leaderboard", label: "Leaderboard", icon: "🏆" },
    { id: "tournaments", label: "Tournaments", icon: "🎯" },
    { id: "practice", label: "Practice Mode", icon: "🏓" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "profile", label: "My Profile", icon: "👤", divider: true },
    { id: "friends", label: "Friends", icon: "👥" },
    { id: "achievements", label: "Achievements", icon: "🎖️" },
  ]

  const footerItems = [
    { id: "help", label: "Help & Support" },
    { id: "terms", label: "Terms of Use" },
    { id: "privacy", label: "Privacy Policy" },
  ]

  return (
    <div className="w-full md:w-56 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-4 flex justify-center">
        <div className="text-xl font-bold text-green-400">
          <span className="text-blue-400">PONG</span> MASTERS
        </div>
      </div>

      {/* Game Shortcuts */}
      <div className="grid grid-cols-2 gap-2 px-3 py-2">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-md p-2 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 bg-blue-500 rounded-full mb-1 flex items-center justify-center">
            <span className="text-xs">🏆</span>
          </div>
          <span className="text-xs">RANKED</span>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-md p-2 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 bg-purple-500 rounded-full mb-1 flex items-center justify-center">
            <span className="text-xs">🎲</span>
          </div>
          <span className="text-xs">CASUAL</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4 flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className={item.divider ? "mt-4 pt-4 border-t border-gray-800" : ""}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-2 flex items-center space-x-3 ${
                  activeTab === item.id
                    ? "bg-blue-900 text-white border-l-4 border-blue-500"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  <span>{item.icon}</span>
                </span>
                <span className="text-sm">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Links */}
      <div className="p-4 text-xs text-gray-500">
        {footerItems.map((item) => (
          <div key={item.id} className="mb-1">
            <a href="#" className="hover:text-gray-300">
              {item.label}
            </a>
          </div>
        ))}
      </div>

      {/* Support */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center justify-center space-x-2 text-sm text-gray-300 hover:text-white">
          <span className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs">?</span>
          <span>Live Support</span>
        </button>
      </div>
    </div>
  )
}

