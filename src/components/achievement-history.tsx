import {h} from "../core/roboto.js"

export const AchievementHistory = ({ title, matches }: { title: string; matches: MatchProps['match'][] }) => {
    return (
        <div className="w-full max-w-lg p-6 rounded-3xl bg-[#0a0b34] text-white">
            <h2 className="text-lg font-normal mb-6">{title}</h2>

            <div className="space-y-4">
                {matches.map((match) => (
                    <MatchHistoryCard  match={match} />
                ))}
            </div>
        </div>
    )
}
  
  interface MatchProps {
    match: {
      time: string
      player1: {
        name: string
        avatar: string
      }
      player2: {
        name: string
        avatar: string
      }
      score: string
    }
  }
  
  function MatchHistoryCard({ match }: MatchProps) {
    return (
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1a1b4b] bg-opacity-50 border border-[#2a2b6b]">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-300 w-16">{match.time}</span>
          <div className="flex items-center space-x-2">
            <img
              src={match.player1.avatar || "/placeholder.svg"}
              alt={match.player1.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-gray-700"
            />
            <span className="font-medium">{match.player1.name}</span>
          </div>
        </div>
  
        <div className="font-bold text-xl px-3">{match.score}</div>
  
        <div className="flex items-center space-x-2">
          <span className="font-medium">{match.player2.name}</span>
          <img
            src={match.player2.avatar || "/placeholder.svg"}
            alt={match.player2.name}
            className="w-8 h-8 rounded-full object-cover border-2 border-gray-700"
          />
        </div>
      </div>
    )
  }
  