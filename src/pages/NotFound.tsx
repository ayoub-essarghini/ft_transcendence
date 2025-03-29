import {h, useEffect, useState} from '../core/roboto.js';

export const NotFound = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [randomFacts, setRandomFacts] = useState<string[]>([
    "The first 404 error was encountered in 1984",
    "404 comes from 'Room 404', where CERN's web servers were located",
    "About 7% of all internet traffic leads to 404 pages",
    "The Space Jam website from 1996 is still online without a 404",
    "Some websites hide Easter eggs in their 404 pages",
  ])
  const [currentFact, setCurrentFact] = useState(0)

  const handleRefresh = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % randomFacts.length)
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % randomFacts.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [randomFacts.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="text-9xl font-bold text-gray-200 dark:text-gray-700">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Oops!
                </div>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-2xl font-bold text-center text-gray-800 dark:text-white">Page not found</h1>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="/"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </a>

            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Go Back
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">Did you know?</p>
              <button
                onClick={handleRefresh}
                className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 focus:outline-none"
              >
                <svg
                  className={`w-4 h-4 ${isAnimating ? "animate-spin" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 4V10H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 20V14H7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.51 9.00008C4.01717 7.56686 4.87913 6.28548 6.01547 5.27549C7.1518 4.2655 8.52547 3.56066 10.0083 3.22479C11.4911 2.88892 13.0348 2.93468 14.4952 3.35677C15.9556 3.77886 17.2853 4.56473 18.36 5.64008L23 10.0001M1 14.0001L5.64 18.3601C6.71475 19.4354 8.04437 20.2213 9.50481 20.6434C10.9652 21.0655 12.5089 21.1112 13.9917 20.7754C15.4745 20.4395 16.8482 19.7347 17.9845 18.7247C19.1209 17.7147 19.9828 16.4333 20.49 15.0001"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 min-h-[40px]">{randomFacts[currentFact]}</p>
          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-2 opacity-30">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

