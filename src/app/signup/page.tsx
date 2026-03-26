"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function SignupPage () {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const onSignup = async () => {}


    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr/>
        <label htmlFor="username">Username</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
            />
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
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"  onClick={onSignup}>Signup Here</button>
            <Link href="/login" className="mt-4 text-blue-500 hover:underline">Already have an account? Login here</Link>
        </div>
     ) 
}