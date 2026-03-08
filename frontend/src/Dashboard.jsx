import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = location.state?.userName || 'User';

    return (
        <div className="min-h-screen bg-black text-white p-10 flex flex-col pt-32 p-8">
            <div className="flex justify-between items-center mb-10 w-full max-w-6xl mx-auto">
                <h1 className="text-red-600 text-4xl font-bold tracking-tight">NETFLIX</h1>
                <button
                    onClick={() => navigate('/')}
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded font-semibold text-sm transition-colors"
                >
                    Sign Out
                </button>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">Welcome, {userName}!</h2>
                <p className="text-lg text-gray-400 mb-8">This is a dummy Dashboard page shown after a successful login.</p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Trending Now</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="aspect-video bg-zinc-800 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
