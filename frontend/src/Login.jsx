import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email.');
            return;
        }
        if (!password) {
            setError('Please enter your password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email: email,
                password: password
            });

            if (response.data.success) {
                navigate('/dashboard', { state: { userName: response.data.userName } });
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message);
            } else {
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-netflix relative sm:bg-black/80 flex flex-col justify-start sm:justify-center items-center">

            <div className="absolute inset-0 bg-black sm:bg-opacity-50 z-0"></div>

            <div className="absolute top-0 left-0 w-full p-4 sm:p-8 z-20">
                <h1 className="text-red-600 text-3xl sm:text-5xl font-bold tracking-tight px-4 cursor-pointer" onClick={() => navigate('/')}>NETFLIX</h1>
            </div>

            <div className="relative z-10 w-full max-w-md bg-black sm:bg-black/75 px-10 sm:px-16 pt-16 pb-24 sm:mt-10 sm:rounded-md mt-16 min-h-[600px]">
                <h2 className="text-3xl font-medium mb-7 text-white">Sign In</h2>

                {error && (
                    <div className="bg-[#e87c03] text-white p-3 mb-4 rounded text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#333] text-white rounded outline-none py-3 px-4 focus:bg-[#454545] border-transparent focus:border-[#e87c03]"
                            placeholder="Email or phone number"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#333] text-white rounded outline-none py-3 px-4 focus:bg-[#454545] border-transparent focus:border-[#e87c03]"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#e50914] hover:bg-[#f40612] transition-colors text-white font-semibold py-3 mt-4 rounded text-base"
                    >
                        Sign In
                    </button>

                    <div className="flex justify-between items-center text-sm text-[#b3b3b3] mt-2 group">
                        <label className="flex items-center gap-1 cursor-pointer">
                            <input type="checkbox" className="form-checkbox bg-[#333] border-none text-[#b3b3b3] rounded-sm focus:ring-0 checked:bg-gray-400" />
                            Remember me
                        </label>
                        <a href="#" className="hover:underline">Need help?</a>
                    </div>
                </form>

                <div className="mt-16 sm:mt-24 text-[#737373]">
                    <p className="text-base mb-3 leading-relaxed">
                        New to Netflix? <a href="#" className="text-white hover:underline transition-all">Sign up now.</a>
                    </p>
                    <p className="text-sm">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
