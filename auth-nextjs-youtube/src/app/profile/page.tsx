"use client"
import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import{useRouter } from 'next/navigation'

export default function ProfilePage() {
    const router = useRouter();

    const logout = async () => {
        try {
            const res = await axios.get("/api/users/logout");
            console.log(" Logout successful", res.data);
            router.push("/login");
        } catch (error) {
            console.error("An unexpected error happened:", error);
        }
    };

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
                    <button
                        onClick={logout}
                        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}