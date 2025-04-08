import { h } from "../core/roboto.js";
import { Layout } from "../pages/layout/layout.js";
import { Link } from "../core/router/Link.js";
import AchievementsDashboard from "../components/Achievement.js";
import { AchievementHistory } from "../components/achievement-history.js";
import { TournamentAchievement } from "../components/tournament-achievement.js";
import { ProfileHeader } from "../components/profile-header.js";

export const Dashboard = () => {

  const matches = [
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
  ]
  const matches2 = [

    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
   
  ]
  return (
    <Layout
      children={
        <div className="w-full flex flex-col text-fuchsia-50">
          <h1 className=" p-2 text-2xl font-semibold ml-8 mb-6">Home Page</h1>
          <main className="flex flex-row w-full h-full">
            <div className='w-1/2 left flex flex-col p-2 gap-2'>
              <div className="achievements">
               <AchievementsDashboard winRate={20} level={17} loseRate={5.7} />
              </div>
              <div className="a-history">
              <AchievementHistory title="Achievement History" matches={matches}/>
              </div>
            </div>

            <div className='right w-full flex flex-col justify-normal items-center p-2 gap-3'>
              <div className="a-tournaments w-full">
                <TournamentAchievement />
              </div>
              <div className="w-full bot-profile flex flex-row gap-4">
                <div className="bot w-full">
                <AchievementHistory title="Achievement Bot" matches={matches2}/>
                </div>
                <div className="profile w-full">
                 <ProfileHeader />
                </div>
              </div>
            </div>
          </main>


        </div>
      }
    />
  );
};
