import React from 'react';

const LoginSignup = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-800">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login / Sign Up</h2>
                
                <form className="space-y-4">
                    <div>
                        <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                        <input type="tel" id="mobile" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="+91 234 567 890" required />
                    </div>
                    <div>
                        <label for="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">OTP</label>
                        <input type="text" id="otp" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter OTP" required />
                    </div>
                    <button type="submit" className="w-full px-5 py-2.5 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Verify OTP</button>
                </form>

                <div className="flex items-center justify-between">
                    <hr className="w-full border-gray-300 dark:border-gray-600" />
                    <span className="px-2 text-gray-500 dark:text-gray-400">or</span>
                    <hr className="w-full border-gray-300 dark:border-gray-600" />
                </div>

                <button type="button" className="w-full flex items-center justify-center px-5 py-2.5 text-white bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8zm1.5 12.5H6.5V9h3v3.5zm0-5H6.5V4h3v3.5z" /></svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default LoginSignup;
