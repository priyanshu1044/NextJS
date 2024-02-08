"use client"
import React,{useState,useEffect} from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"


export default function LoginPage() {
    const router = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loader, setLoader] = useState(false)

    const onLogin = async () => {
        try {
            setLoader(true);
            const res = await axios.post("/api/users/login", user);
            console.log("Login success", res.data);
            router.push("/profile");

        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoader(false);
        }
    }
  
    useEffect(() => { 
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])




    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          {loader ? (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({...user, email: e.target.value})}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => setUser({...user, password: e.target.value})}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={onLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
      </div>
        
    )
    }
    