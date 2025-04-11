import { h,useState } from "../core/roboto.js"


interface ProfileCardProps {
  name: string
  score: number
  rank: number
  badgeCount: number
  profileImage: string
  isOnline?: boolean
  isPrimary?: boolean
}

export const ProfileCard = ({
  name,
  score,
  rank,
  badgeCount,
  profileImage,
  isOnline = true,
  isPrimary = false,
}: ProfileCardProps)=> {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`w-full relative flex flex-col ${isPrimary ? 'lg:mb-12 shadow-md shadow-[var(--color-accent)]' : 'mb-0'} items-center p-6 rounded-xl transition-all duration-300 bg-[--color-card-background] border border-[var(--color-card-border)] hover:shadow-lg hover:shadow-[#00ffff83]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-navy-700">
          <img
            src={ profileImage}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>
        {isOnline && (
          <div className="absolute bottom-3 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-e-white" />
        )}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white">{name}</h3>

      <div className="flex justify-center mt-2 space-x-2">
        {Array.from({ length: badgeCount }).map((_, index) => (
          <div key={index} className="w-6 h-6">
            <img src="public/assets/images/sideBar/star.svg" alt="" />
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full mt-4">
        <div className="text-gray-300">
          Score <span className="text-white font-bold text-xl">{score}</span>
        </div>
        <div className="text-gray-300">
          Rank <span className="text-white font-bold text-xl">#{rank}</span>
        </div>
      </div>
    </div>
  )
}
