import { ProfileCard } from "../components/Leader-card.js"
import { h, useState } from "../core/roboto.js"
import { Layout } from "./layout/layout.js"


interface Player {
  id: number
  rank: number
  name: string
  username: string
  score: number
  avatar: string
}

export const Leaderboard = () => {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 1,
      rank: 1,
      name: "Alex",
      username: "Alex Gaming",
      score: 256,
      avatar: "public/assets/images/avatar2.png?height=60&width=60",
    },
    {
      id: 2,
      rank: 2,
      name: "Sarah",
      username: "Sarah Pro",
      score: 245,
      avatar: "public/assets/images/avatar3.png?height=60&width=60",
    },
    {
      id: 3,
      rank: 3,
      name: "Michael",
      username: "Michael Plays",
      score: 210,
      avatar: "public/assets/images/avatar2.png?height=60&width=60",
    },
    {
      id: 4,
      rank: 4,
      name: "Jolia",
      username: "Jolia Gamer 1",
      score: 193,
      avatar: "public/assets/images/avatar3.png?height=60&width=60",
    },
    {
      id: 5,
      rank: 5,
      name: "David",
      username: "David Streamer",
      score: 187,
      avatar: "public/assets/images/avatar2.png?height=60&width=60",
    },
    {
      id: 6,
      rank: 6,
      name: "Emma",
      username: "Emma Plays",
      score: 176,
      avatar: "public/assets/images/avatar3.png?height=60&width=60",
    },
  ])

  return (
    <Layout  title="Leaderboard" children={

      <div className="h-auto overflow-auto">
        <div className="flex items-center justify-center bg-navy-950 px-20 py-10">
          <div className="w-full flex flex-row justify-around items-center gap-6 lg:mx-32 md:mx-10 sm:mx-5 lg:flex-row md:flex-row xs:mx-2 sm:flex-col xs:flex-col ">


            <ProfileCard
              name="Sarah Pro"
              score={245}
              rank={2}
              badgeCount={2}
              profileImage="https://randomuser.me/api/portraits/women/21.jpg"
              isPrimary={false}
            />

            <ProfileCard
              name="Ahmed Ali"
              score={342}
              rank={1}
              badgeCount={3}
              profileImage="https://randomuser.me/api/portraits/men/20.jpg"
              isPrimary={true}
            />
            <ProfileCard
              name="David Streamer"
              score={200}
              rank={3}
              badgeCount={1}
              profileImage="https://randomuser.me/api/portraits/men/21.jpg"
              isPrimary={false}
            />




          </div>
        </div>



        <div className="flex juscetify-center px-10">
          <div className="w-full max-w-5xl mx-auto bg-[var(--color-card-background)] rounded-xl p-5 text-white font-sans">
            {/* Header */}
            <div className="flex items-center bg-[var(--color-card-history)] rounded-lg p-4 mb-4">

              <div className="w-1/6 text-center">Rank</div>
              <div className="w-3/12 md:w-2/12">Name</div>
              <div className="hidden md:block w-5/12">UserName</div>
              <div className="w-2/12 md:w-1/12 ml-auto text-right">Score</div>
            </div>

            {/* Player rows */}
            <div className="space-y-3">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center bg-[var(--color-card-history)] rounded-xl p-4 transition-transform hover:translate-y-[-2px] hover:shadow-lg relative"
                >
                  <div className="absolute left-4">
                    <img
                      src={player.avatar || "/placeholder.svg"}
                      alt={player.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="w-1/6 text-center font-semibold pl-10">#{player.rank}</div>
                  <div className="w-3/12 md:w-2/12">{player.name}</div>
                  <div className="hidden md:block w-5/12">{player.username}</div>
                  <div className="w-2/12 md:w-1/12 ml-auto text-right font-semibold">{player.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>





    } />

  )
}
