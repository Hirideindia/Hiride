import React from 'react';

const BookingComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-primary to-secondary dark:from-blue-800 dark:to-green-800">
            <h1 className="text-3xl font-bold text-white mb-8">Book a Driver</h1>
            <div className="w-full max-w-lg p-8 space-y-6 bg-foreground rounded-lg shadow-md dark:bg-gray-800">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="startDateTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">When do you need a driver</label>
                        <input type="datetime-local" id="startDateTime" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="endDateTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Till when you require a driver</label>
                        <input type="datetime-local" id="endDateTime" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="pickupAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pickup Address</label>
                        <input type="text" id="pickupAddress" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="pickupLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location link (Google maps link): optional</label>
                        <input type="url" id="pickupLink" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <div>
                        <label htmlFor="package" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Package</label>
                        <select id="package" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option value="roundtrip">RoundTrip</option>
                            <option value="hourly">Hourly</option>
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="outstation">Outstation</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dropAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Drop Address</label>
                        <input type="text" id="dropAddress" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="dropLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location link (Google maps link): optional</label>
                        <input type="url" id="dropLink" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <div>
                        <label htmlFor="carName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name of car</label>
                        <input type="text" id="carName" className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <
