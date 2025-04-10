import { h } from "../core/roboto.js"

export const AchievementHistory = ({ title, matches }: { title: string; matches: MatchProps['match'][] }) => {
  return (
    <div className="w-full h-auto overflow-y-auto max-w-lg p-6 rounded-md bg-[var(--color-card-background)] text-white transition-shadow duration-200 ease-in-out hover:shadow-md hover:shadow-[var(--color-accent)]">
      <h2 className="text-lg font-normal mb-6">{title}</h2>

      <div className="space-y-4">
        {matches.map((match) => (
          <MatchHistoryCard match={match} />
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
    <div className="flex items-center justify-between p-3 rounded-md bg-[var(--color-card-history)] bg-opacity-50 border border-[var(--color-card-border)]">
      <div className="flex items-center space-x-3">
        <span className="text-[0.8rem] font-medium text-gray-300 w-16">{match.time}</span>
        <div className="flex items-center space-x-2 relative">
          <img
            src={match.player1.avatar || "/placeholder.svg"}
            alt={match.player1.name}
            className="w-8 h-8 rounded-full object-cover border-2 border-gray-700"
          />
          <span
            className="text-sm font-medium w-[4rem] truncate overflow-hidden whitespace-nowrap block tooltip"
            data-tooltip={match.player1.name}
          >
            {match.player1.name}
          </span>
        </div>
      </div>

      <div className="font-bold text-lg px-3 w-[5rem]">{match.score}</div>

      <div className="flex items-center space-x-2 relative">
        <span className="text-sm font-medium w-[4rem] truncate overflow-hidden whitespace-nowrap block tooltip" data-tooltip={match.player2.name}>{match.player2.name}</span>
        <div className="w-auto">
          <img
            src={match.player2.avatar || "/placeholder.svg"}
            alt={match.player2.name}
            className="w-8 h-8 rounded-full object-cover border-2 border-gray-700"
          />
        </div>

      </div>
    </div>
  )
}
