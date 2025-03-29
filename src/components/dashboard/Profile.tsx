import { h, useState, useEffect } from "../../core/roboto.js";

interface UserStats {
  wins: number;
  losses: number;
  winRate: number;
  rank: number;
  level: number;
  xp: number;
  nextLevelXp: number;
  achievements: number;
  totalGames: number;
  averageScore: number;
}

interface User {
  id: number;
  username: string;
  email?: string;
  avatarUrl?: string;
  status: 'online' | 'offline' | 'in-game';
  stats: UserStats;
  joinDate: string;
}

interface ProfileProps {
  user: User | null;
}

export const Profile = ({ user }: ProfileProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email || '',
      });
    }
  }, [user]);

  // Mock user data for visual display when real user is not available
  const mockUser: User = {
    id: 1,
    username: "Player1",
    email: "player1@example.com",
    status: 'online',
    avatarUrl: "./public/assets/images/player1.png",
    stats: {
      wins: 42,
      losses: 18,
      winRate: 70,
      rank: 156,
      level: 8,
      xp: 750,
      nextLevelXp: 1000,
      achievements: 12,
      totalGames: 60,
      averageScore: 7.5
    },
    joinDate: "2023-09-15"
  };

  // Use mock data if no user provided
  const displayUser = user || mockUser;
  
  // Calculate XP percentage for progress bar
  const xpPercentage = (displayUser.stats.xp / displayUser.stats.nextLevelXp) * 100;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would update the user profile
    console.log('Profile update:', formData);
    setIsEditing(false);
    // Submit updated profile data to backend
  };

  // Generate player initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Profile Header */}
      <div className="rounded-lg overflow-hidden">
        {/* Cover Image - Gradient Background */}
        <div className="h-24 bg-gradient-to-r from-blue-800 to-purple-800 relative">
          {/* Status Badge */}
          <div className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-medium 
            ${displayUser.status === 'online' ? 'bg-green-500' : 
              displayUser.status === 'in-game' ? 'bg-yellow-500' : 'bg-gray-500'}`}>
            {displayUser.status === 'online' ? 'Online' : 
             displayUser.status === 'in-game' ? 'In Game' : 'Offline'}
          </div>
        </div>

        <div className="bg-gray-800 px-4 py-4 sm:px-6 border-b border-gray-700">
          <div className="flex flex-col sm:flex-row items-center">
            {/* Avatar */}
            <div className="relative -mt-12 mb-3 sm:mb-0">
              {displayUser.avatarUrl ? (
                <img 
                  src={displayUser.avatarUrl} 
                  alt={displayUser.username} 
                  className="w-24 h-24 rounded-full border-4 border-gray-800 bg-gray-700"
                />
              ) : (
                <div className="w-24 h-24 rounded-full border-4 border-gray-800 bg-gray-700 flex items-center justify-center">
                  <span className="text-2xl font-bold">{getInitials(displayUser.username)}</span>
                </div>
              )}
              {/* Level Badge */}
              <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center border-2 border-gray-800">
                <span className="text-xs font-bold">Lv{displayUser.stats.level}</span>
              </div>
            </div>

            {/* User Info */}
            <div className="sm:ml-6 text-center sm:text-left flex-grow">
              <h1 className="text-2xl font-bold">{displayUser.username}</h1>
              <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start mt-1">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                </svg>
                Joined {displayUser.joinDate}
              </p>
              
              {/* XP Bar */}
              <div className="w-full mt-3 bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                  style={{width: `${xpPercentage}%`}}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {displayUser.stats.xp} / {displayUser.stats.nextLevelXp} XP
              </p>
            </div>

            {/* Edit Profile Button */}
            <div>
              <button 
                onClick={() => setIsEditing(!isEditing)} 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="bg-gray-800 rounded-lg mt-4 overflow-hidden">
        <div className="border-b border-gray-700">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'overview'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('statistics')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'statistics'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Statistics
            </button>
            <button
              onClick={() => setActiveTab('match-history')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'match-history'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Match History
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'achievements'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Achievements
            </button>
          </nav>
        </div>

        <div className="p-4">
          {/* Edit Profile Form */}
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Avatar
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-700">
                    {displayUser.avatarUrl ? (
                      <img src={displayUser.avatarUrl} alt="Current avatar" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-xl">
                        {getInitials(displayUser.username)}
                      </div>
                    )}
                  </span>
                  <button
                    type="button"
                    className="ml-5 bg-gray-700 py-2 px-3 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-600"
                  >
                    Change
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div>
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Quick Stats */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-medium mb-3">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-400">Win Rate</p>
                        <p className="text-2xl font-bold text-green-400">{displayUser.stats.winRate}%</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-400">Rank</p>
                        <p className="text-2xl font-bold text-yellow-400">#{displayUser.stats.rank}</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-400">Wins</p>
                        <p className="text-2xl font-bold text-blue-400">{displayUser.stats.wins}</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-400">Total Games</p>
                        <p className="text-2xl font-bold text-purple-400">{displayUser.stats.totalGames}</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-2 bg-gray-700 rounded-md">
                        <div className="bg-green-500 bg-opacity-20 p-2 rounded-md mr-3">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">Won against Player45</p>
                          <p className="text-xs text-gray-400">2 hours ago</p>
                        </div>
                        <div className="text-sm font-medium text-green-400">10-5</div>
                      </div>
                      <div className="flex items-center p-2 bg-gray-700 rounded-md">
                        <div className="bg-red-500 bg-opacity-20 p-2 rounded-md mr-3">
                          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">Lost to GrandMaster2</p>
                          <p className="text-xs text-gray-400">Yesterday</p>
                        </div>
                        <div className="text-sm font-medium text-red-400">7-10</div>
                      </div>
                      <div className="flex items-center p-2 bg-gray-700 rounded-md">
                        <div className="bg-yellow-500 bg-opacity-20 p-2 rounded-md mr-3">
                          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">Earned Achievement: "On Fire"</p>
                          <p className="text-xs text-gray-400">3 days ago</p>
                        </div>
                        <div className="text-sm font-medium text-yellow-400">+25 XP</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'statistics' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-gray-400 text-sm">Win/Loss Ratio</h4>
                      <div className="flex justify-center items-center mt-2">
                        <div className="text-3xl font-bold text-green-400">{displayUser.stats.wins}</div>
                        <div className="mx-2 text-2xl text-gray-500">/</div>
                        <div className="text-3xl font-bold text-red-400">{displayUser.stats.losses}</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-gray-400 text-sm">Average Score</h4>
                      <div className="mt-2 text-3xl font-bold text-blue-400">
                        {displayUser.stats.averageScore}
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <h4 className="text-gray-400 text-sm">Achievements</h4>
                      <div className="mt-2 text-3xl font-bold text-purple-400">
                        {displayUser.stats.achievements}/20
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-medium mb-4">Performance Graph</h3>
                    <div className="h-48 flex items-end justify-between px-2">
                      <div className="h-1/3 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-2/3 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-1/2 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-1/4 w-1/12 bg-red-500 rounded-t"></div>
                      <div className="h-3/4 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-1/2 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-1/3 w-1/12 bg-red-500 rounded-t"></div>
                      <div className="h-2/3 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-4/5 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-1/4 w-1/12 bg-red-500 rounded-t"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <div>Game 1</div>
                      <div>Game 10</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'match-history' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Opponent
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Result
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Score
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          XP
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-sm mr-3">P2</div>
                            <div className="text-sm font-medium">Player2</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                            Win
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          10 - 8
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          Today, 14:30
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                          +15 XP
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-sm mr-3">GM</div>
                            <div className="text-sm font-medium">GrandMaster2</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900 text-red-300">
                            Loss
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          7 - 10
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          Yesterday, 19:15
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-400">
                          +5 XP
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-sm mr-3">P8</div>
                            <div className="text-sm font-medium">Player8</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                            Win
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          10 - 2
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          3 days ago
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                          +20 XP
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              
              {activeTab === 'achievements' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center">
                    <div className="h-12 w-12 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Master Scorer</h4>
                      <p className="text-xs text-gray-400">Score 50 points in a single match</p>
                    </div>
                    <div className="bg-green-500 p-1 rounded-full">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center">
                    <div className="h-12 w-12 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">On Fire</h4>
                      <p className="text-xs text-gray-400">Win 5 matches in a row</p>
                    </div>
                    <div className="bg-green-500 p-1 rounded-full">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center opacity-50">
                    <div className="h-12 w-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Tournament Champion</h4>
                      <p className="text-xs text-gray-400">Win a tournament</p>
                    </div>
                    <div className="bg-gray-600 p-1 rounded-full">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center opacity-50">
                    <div className="h-12 w-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Social Butterfly</h4>
                      <p className="text-xs text-gray-400">Add 10 friends</p>
                    </div>
                    <div className="bg-gray-600 p-1 rounded-full">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};