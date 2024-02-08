import React from 'react'

export default function ProfilePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xs">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <img
                            className="mx-auto h-24 w-24 rounded-full"
                            src="/images/arpit-bala.gif"
                            alt="Profile"
                        />
                        <h2 className="text-center text-xl font-bold text-gray-900">Arpit Bala</h2>
                        <p className="text-center text-gray-600">arpitbala@example.com</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-gray-900">About</h3>
                        <p className="text-gray-600">
                            Hi, I'm Arpit Bala. I'm a software developer and I love building things.
                        </p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Skills</h3>
                        <p className="text-gray-600">JavaScript, React, Next.js, Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}