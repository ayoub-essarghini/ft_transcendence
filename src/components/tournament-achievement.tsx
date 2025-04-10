import {h} from "../core/roboto.js"
export const TournamentAchievement = ()=> {
    // Sample tournament data
    const tournaments = [
      {
        league: "League A",
        time: "1:00 PM",
        participants: 5,
        points: 10,
      },
      {
        league: "League C",
        time: "2:30 PM",
        participants: 6,
        points: 15,
      },
      {
        league: "League D",
        time: "4:45 PM",
        participants: 5,
        points: 7,
      },
      {
        league: "League B",
        time: "5:30 PM",
        participants: 3,
        points: 12,
      },
      {
        league: "League E",
        time: "6:15 PM",
        participants: 8,
        points: 20,
      },
      {
        league: "League F",
        time: "7:00 PM",
        participants: 2,
        points: 5,
      },
      {
        league: "League G",
        time: "7:00 PM",
        participants: 4,
        points: 14,
      },
      {
        league: "League H",
        time: "3:00 PM",
        participants: 2,
        points: 5,
      },
    ];
    
  
    return (
      <div className="w-full p-6 rounded-md bg-[var(--color-card-background)] text-white transition-shadow duration-200 ease-in-out hover:shadow-md hover:shadow-[var(--color-accent)]">
        <h2 className="text-xl font-normal mb-6">Tournament Achievement</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 lg:px-4">
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
   
    const participantAvatars = Array(tournament.participants > 5 ? 5 : tournament.participants)
  .fill(null)
  .map((_, i) => {
    // Generate a random gender and ID (0-99)
    const gender = Math.random() < 0.5 ? "men" : "women";
    const id = Math.floor(Math.random() * 100);

    return (
      <div
        key={i}
        className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-700 -ml-2 first:ml-0"
      >
        <img
          src={`https://randomuser.me/api/portraits/${gender}/${id}.jpg`}
          alt={`Participant ${i + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  });
  
    return (
      <div className="p-3 rounded-md bg-[var(--color-card-history)] border border-[var(--color-card-border)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-[#23dff1]">{tournament.league}</h3>
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
  