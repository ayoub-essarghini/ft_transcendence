import { h, useState, useEffect } from "../core/roboto.js";
import { Sidebar } from "../components/SideBar.js";
import { GamePanel } from "../components/dashboard/GamePanel.js";
// import { Leaderboard } from "../components/dashboard/Leaderboard.js";
// import { Tournaments } from "../components/dashboard/Tournaments.js";
// import { PracticeMode } from "../components/dashboard/PracticeMode.js";
// import { Settings } from "../components/dashboard/Settings.js";
import { Profile } from "../components/dashboard/Profile.js";
// import { Friends } from "../components/dashboard/Friends.js";
// import { Achievements } from "../components/dashboard/Achievements.js";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("play");
  const [onlineCount, setOnlineCount] = useState(426);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "friend", message: "John sent you a friend request", time: "2m ago" },
    { id: 2, type: "tournament", message: "Tournament starting in 10 minutes", time: "5m ago" },
    { id: 3, type: "achievement", message: "You earned 'First Win' achievement!", time: "1h ago" }
  ]);

  // Simulate real-time online count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => Math.floor(prev + Math.random() * 10 - 5));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Component to show based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "play":
        return <GamePanel />;
    //   case "leaderboard":
    //     return <Leaderboard />;
    //   case "tournaments":
    //     return <Tournaments />;
    //   case "practice":
    //     return <PracticeMode />;
    //   case "settings":
    //     return <Settings />;
      case "profile":
        return <Profile />;
    //   case "friends":
    //     return <Friends />;
    //   case "achievements":
    //     return <Achievements />;
      default:
        return <GamePanel />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-gray-800 border-b border-gray-700 py-2 px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile Only */}
          <div className="md:hidden text-xl font-bold text-green-400">
            <span className="text-blue-400">PONG</span> MASTERS
          </div>
          
          {/* Online Users Counter */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-green-400">{onlineCount} Players Online</span>
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-1.5 rounded-full hover:bg-gray-700 relative"
              >
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{notifications.length}</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b border-gray-700 flex justify-between items-center">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                    <button className="text-xs text-blue-400 hover:text-blue-300">Mark all as read</button>
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="px-4 py-3 border-b border-gray-700 hover:bg-gray-700">
                        <div className="flex items-start">
                          <div className="rounded-full bg-gray-700 p-2 mr-3">
                            {notification.type === "friend" && (
                              <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            )}
                            {notification.type === "tournament" && (
                              <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            )}
                            {notification.type === "achievement" && (
                              <svg className="h-4 w-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{notification.message}</p>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                          <button className="text-gray-500 hover:text-gray-400">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-2 text-center border-t border-gray-700">
                    <a href="#" className="text-xs text-blue-400 hover:text-blue-300">View all notifications</a>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center">
              <div className="mr-2 text-right hidden md:block">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-gray-400">Level 8</div>
              </div>
              <div className="h-9 w-9 rounded-full bg-gray-700 border-2 border-blue-500 flex items-center justify-center text-sm font-bold">JD</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:block">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-4">
          {renderTabContent()}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden bg-gray-800 border-t border-gray-700">
        <div className="grid grid-cols-5 gap-1 px-2 py-1">
          <button 
            onClick={() => setActiveTab("play")} 
            className={`p-2 rounded-md flex flex-col items-center justify-center ${activeTab === "play" ? "bg-blue-900 text-blue-400" : "text-gray-400"}`}
          >
            <span className="text-lg">🎮</span>
            <span className="text-xs">Play</span>
          </button>
          <button 
            onClick={() => setActiveTab("leaderboard")} 
            className={`p-2 rounded-md flex flex-col items-center justify-center ${activeTab === "leaderboard" ? "bg-blue-900 text-blue-400" : "text-gray-400"}`}
          >
            <span className="text-lg">🏆</span>
            <span className="text-xs">Ranks</span>
          </button>
          <button 
            onClick={() => setActiveTab("tournaments")} 
            className={`p-2 rounded-md flex flex-col items-center justify-center ${activeTab === "tournaments" ? "bg-blue-900 text-blue-400" : "text-gray-400"}`}
          >
            <span className="text-lg">🎯</span>
            <span className="text-xs">Tournaments</span>
          </button>
          <button 
            onClick={() => setActiveTab("friends")} 
            className={`p-2 rounded-md flex flex-col items-center justify-center ${activeTab === "friends" ? "bg-blue-900 text-blue-400" : "text-gray-400"}`}
          >
            <span className="text-lg">👥</span>
            <span className="text-xs">Friends</span>
          </button>
          <button 
            onClick={() => setActiveTab("profile")} 
            className={`p-2 rounded-md flex flex-col items-center justify-center ${activeTab === "profile" ? "bg-blue-900 text-blue-400" : "text-gray-400"}`}
          >
            <span className="text-lg">👤</span>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};