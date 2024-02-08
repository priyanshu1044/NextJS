import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-xl font-bold text-gray-900 mb-4">Home Page</h2>
          <Link href="/profile" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
            Profile Page
          </Link>
          <Link href="/login" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
            Login Page
          </Link>
          <Link href="/not-found" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
            
            404 Page
            
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </div>
  );
}
