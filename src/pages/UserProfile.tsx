import { h, useState, useEffect } from "../core/roboto.js";
import { Layout } from "../pages/layout/layout.js";

interface UserProfileProps {
    username: string;
}

export const UserProfile = ({ username }: UserProfileProps) => {
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     
        setLoading(true);

      
            setUserData({
                username,
                name: `User ${username}`,
                level: Math.floor(Math.random() * 100),
                gamesPlayed: Math.floor(Math.random() * 200),
                wins: Math.floor(Math.random() * 150)
            });
            setLoading(false);
   
    }, [username]);

    return (
        <Layout children={<div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">User Profile</h1>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="text-lg text-gray-500">Loading user data...</div>
                </div>
            ) : userData ? (
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                            {userData.username.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold">{userData.name}</h2>
                            <p className="text-gray-600">@{userData.username}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold">{userData.level}</div>
                            <div className="text-sm text-gray-600">Level</div>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold">{userData.gamesPlayed}</div>
                            <div className="text-sm text-gray-600">Games played</div>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold">{userData.wins}</div>
                            <div className="text-sm text-gray-600">Wins</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-red-500">User not found</div>
            )}
        </div>} />


    );
};