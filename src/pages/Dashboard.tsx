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
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
  ]
  const matches2 = [

    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
    {
      time: "5:00 PM",
      player1: {
        name: "Jolia",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      player2: {
        name: "Him",
        avatar: "public/assets/images/Avatar.svg?height=40&width=40",
      },
      score: "3 - 2",
    },
   
  ]
  return (
    <Layout
      children={
        <div className="w-full flex flex-col text-fuchsia-50 ">
          <h1 className="px-2 py-4 text-2xl font-semibold xl:px-24 md:px-10 mb-6">Home Page</h1>
          <main className="xl:px-24 flex flex-row justify-between w-full h-[90vh] md:flex-col lg:flex-row sm:flex-col md:px-10 overflow-y-auto ">
            <div className='lg:w-1/2  flex flex-col p-2 gap-8 lg:justify-normal md:justify-normal md:w-full sm:w-full sm:justify-center sm:items-center '>
              <div className="achievements w-full">
               <AchievementsDashboard winRate={20} level={17} loseRate={5.7} />
              </div>
              <div className="a-history mt-6 w-full">
              <AchievementHistory title="Achievement History" matches={matches}/>
              </div>
            </div>

            <div className='right w-full flex flex-col justify-normal items-center p-2 gap-3'>
              <div className="a-tournaments w-full">
                <TournamentAchievement />
              </div>
              <div className="w-full bot-profile flex flex-row gap-3 md:flex-col sm:flex-col lg:flex-row">
                <div className="bot w-full mt-2">
                <AchievementHistory title="Achievement Bot" matches={matches2}/>
                </div>
                <div className="profile w-full mt-2">
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
