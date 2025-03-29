import { h, useState } from "../../core/roboto.js";

export const GamePanel = () => {
  const [queueLoading, setQueueLoading] = useState(false);
  const [queueTimer, setQueueTimer] = useState(0);
  const [inQueue, setInQueue] = useState(false);
  
  const joinQueue = () => {
    setQueueLoading(true);
    setTimeout(() => {
      setQueueLoading(false);
      setInQueue(true);
      startTimer();
    }, 1500);
  };
  
  const leaveQueue = () => {
    setInQueue(false);
    setQueueTimer(0);
  };
  
  const startTimer = () => {
    const interval = setInterval(() => {
      setQueueTimer((prev) => prev + 1);
    }, 1000);
    
    // Clear interval after 3 minutes (simulating max queue time)
    setTimeout(() => {
      clearInterval(interval);
    }, 180000);
    
    // Store interval ID for cleanup
    return () => clearInterval(interval);
  };
  
  // Format timer as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Game Modes Section */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Game Modes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Ranked Mode */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700 rounded-lg overflow-hidden shadow-lg">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-blue-100">Ranked Mode</h3>
                    <span className="bg-blue-700 text-blue-100 text-xs font-semibold px-2.5 py-1 rounded">COMPETITIVE</span>
                  </div>
                  
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="text-xs bg-blue-700/50 text-blue-100 px-2 py-1 rounded">1v1</div>
                    <div className="text-xs bg-blue-700/50 text-blue-100 px-2 py-1 rounded">ELO Rating</div>
                    <div className="text-xs bg-blue-700/50 text-blue-100 px-2 py-1 rounded">Seasons</div>
                  </div>
                  
                  <p className="mt-3 text-sm text-blue-200 opacity-90">
                    Compete against players of similar skill. Climb the ranked ladder and earn rewards.
                  </p>
                  
                  <div className="mt-6">
                    {inQueue ? (
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-2">
                          <div className="animate-pulse text-lg font-bold text-blue-200">{formatTime(queueTimer)}</div>
                          <span className="ml-2 text-sm text-blue-300">in queue</span>
                        </div>
                        <button 
                          onClick={leaveQueue}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors text-sm w-full"
                        >
                          Leave Queue
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={joinQueue}
                        disabled={queueLoading}
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded transition-all duration-200 relative overflow-hidden"
                      >
                        {queueLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Joining Queue...
                          </span>
                        ) : (
                          <span>Find Match</span>
                        )}
                      </button>
                    )}
                    
                    <div className="mt-2 text-xs text-center text-blue-300">
                      Average Wait Time: ~45 seconds
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-800 px-5 py-3 flex items-center justify-between">
                  <div className="text-sm text-blue-200">
                    <span className="font-semibold">124</span> players in queue
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-1"></div>
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
              </div>
              
              {/* Casual Mode */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-700 rounded-lg overflow-hidden shadow-lg">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-purple-100">Casual Mode</h3>
                    <span className="bg-purple-700 text-purple-100 text-xs font-semibold px-2.5 py-1 rounded">FRIENDLY</span>
                  </div>
                  
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="text-xs bg-purple-700/50 text-purple-100 px-2 py-1 rounded">1v1</div>
                    <div className="text-xs bg-purple-700/50 text-purple-100 px-2 py-1 rounded">2v2</div>
                    <div className="text-xs bg-purple-700/50 text-purple-100 px-2 py-1 rounded">Custom Rules</div>
                  </div>
                  
                  <p className="mt-3 text-sm text-purple-200 opacity-90">
                    Play for fun with no rating changes. Try different game modes and rule variations.
                  </p>
                  
                  <div className="mt-6">
                    <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded transition-all duration-200 relative overflow-hidden">
                      Play Casual
                    </button>
                    
                    <div className="mt-2 text-xs text-center text-purple-300">
                      Average Wait Time: ~30 seconds
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-800 px-5 py-3 flex items-center justify-between">
                  <div className="text-sm text-purple-200">
                    <span className="font-semibold">87</span> players in queue
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-1"></div>
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            {/* Game Stats Section */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg mt-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Game Stats
              </h2>
              
              {/* Placeholder for game stats */}
              <div className="text-center text-gray-400">No stats available yet.</div>
            </div>
          </div>
        {/* Player Profile Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg mt-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9 5-3.5-10L21 7l-9 5-9-5 3.5 2.5L3 19l9-5z"></path>
                </svg>
                Player Profile
            </h2>
            
            {/* Placeholder for player profile */}
            <div className="text-center text-gray-400">No profile information available.</div>
        </div>
      </div>);
              

}
