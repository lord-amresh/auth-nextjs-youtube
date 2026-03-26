"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



export default function LoginPage () {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: ""
        
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error( error.message);
        } finally {
        setLoading(false);
        } 
    }

        useEffect(() => {
            if(user.email.length > 0 && user.password.length > 0) {
                setButtonDisabled(false);
            } else 
                {setButtonDisabled(true);
            }
        }, [user]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr/>
        
            <label htmlFor="email">Email</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Password"
            />
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"  onClick={onLogin}>Login Here</button>
            <Link href="/signup" className="mt-4 text-blue-500 hover:underline">Visit SignUp Page</Link>
        </div>
    ); 
}