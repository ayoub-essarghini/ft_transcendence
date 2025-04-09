import {h} from "../core/roboto.js"
export const TournamentAchievement = ()=> {
    // Sample tournament data
    const tournaments = [
      {
        league: "League B",
        time: "5:00 PM",
        participants: 3,
        points: 12,
      },
      {
        league: "League B",
        time: "3:00 PM",
        participants: 3,
        points: 12,
      },
      {
        league: "League B",
        time: "3:00 PM",
        participants: 3,
        points: 12,
      },
      {
        league: "League B",
        time: "3:00 PM",
        participants: 3,
        points: 12,
      },
      {
        league: "League B",
        time: "3:00 PM",
        participants: 3,
        points: 12,
      },
      {
        league: "League B",
        time: "3:00 PM",
        participants: 3,
        points: 12,
      },
    ]
  
    return (
      <div className="w-full p-6 rounded-3xl bg-[var(--color-card-background)] text-white">
        <h2 className="text-xl font-normal mb-6">Tournament Achievement</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tournaments.map((tournament) => (
            <TournamentCard  tournament={tournament} />
          ))}
        </div>
      </div>
    )
  }
  
  interface TournamentProps {
    tournament: {
      league: string
      time: string
      participants: number
      points: number
    }
  }
  
  function TournamentCard({ tournament }: TournamentProps) {
    // Generate participant avatars
    const participantAvatars = Array(tournament.participants)
      .fill(null)
      .map((_, i) => (
        <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-700 -ml-2 first:ml-0">
          <img
            src="/public/assets/images/Image.svg?height=32&width=32"
            alt={`Participant ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))
  
    return (
      <div className="p-5 rounded-2xl bg-[var(--color-card-history)] border border-[var(--color-card-border)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">{tournament.league}</h3>
          <span className="text-sm text-gray-300">{tournament.time}</span>
        </div>
  
        <div className="flex items-center justify-start mb-6">
          <div className="flex items-center">{participantAvatars}</div>
          <div className="font-bold text-lg">+{tournament.points}</div>
        </div>
  
        <a href="#" className="text-sm text-gray-300 hover:text-white hover:underline transition-colors">
          Details
        </a>
      </div>
    )
  }
  