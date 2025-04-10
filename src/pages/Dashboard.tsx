import { h } from "../core/roboto.js";
import { Layout } from "../pages/layout/layout.js";
import AchievementsDashboard from "../components/Achievement.js";
import { AchievementHistory } from "../components/achievement-history.js";
import { TournamentAchievement } from "../components/tournament-achievement.js";
import { ProfileHeader } from "../components/profile-header.js";

export const Dashboard = () => {

  const matches = [
    {
      time: "2:30 PM",
      player1: {
        name: "Alex ",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Mira",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      score: "1 - 3",
    },
    {
      time: "3:15 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Noah",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
      },
      score: "2 - 2",
    },
    {
      time: "4:00 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Olivia",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      },
      score: "0 - 1",
    },
    {
      time: "4:45 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Ava",
        avatar: "https://randomuser.me/api/portraits/women/53.jpg",
      },
      score: "3 - 4",
    },
    {
      time: "5:30 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Lucas",
        avatar: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      score: "5 - 5",
    },
    {
      time: "6:00 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "James",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      },
      score: "2 - 0",
    },
  ];

  const matches2 = [
    {
      time: "6:15 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Leo",
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      },
      score: "1 - 1",
    },
    {
      time: "6:45 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Mason",
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      },
      score: "3 - 1",
    },
    {
      time: "7:30 PM",
      player1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      player2: {
        name: "Logan",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      },
      score: "0 - 2",
    },
  ];


  return (
    <Layout
      title="Home"
      children={
        <div className="w-full flex flex-col text-fuchsia-50 ">

          <main className="w-full xl:px-14 flex flex-row justify-between h-[92vh] md:flex-col lg:flex-row sm:flex-col xs:flex-col md:px-10 overflow-y-auto mx-auto">
            <div className='lg:w-1/2 flex flex-col p-2 gap-6 lg:justify-normal md:justify-normal md:w-full sm:w-full sm:justify-center sm:items-center md:p-2'>
              <div className="achievements lg:w-full xs:w-full">
                <AchievementsDashboard winRate={20} level={17} loseRate={5.7} />
              </div>
              <div className="a-history mt-2 h-full lg:w-full overflow-y-auto">
                <AchievementHistory title="Achievement History" matches={matches} />
              </div>
            </div>

            <div className='right w-full flex flex-col justify-normal items-center p-2 gap-3'>
              <div className="a-tournaments w-full">
                <TournamentAchievement />
              </div>
              <div className="w-full bot-profile flex flex-row gap-3 md:flex-col sm:flex-col xs:flex-col xl:flex-row ">
                <div className="bot w-full  overflow-y-auto p-2">
                  <AchievementHistory title="Achievement Bot" matches={matches2} />
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
