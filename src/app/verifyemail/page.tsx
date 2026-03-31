"use client";

import axios from "axios";
import Link from "next/link";
import link from "next/link";
import React, { useEffect, useState } from "react";


export default function VerifyEmailpage() {
    const[token, setToken] = useState("");
    const[verified, setVerified] = useState(false);
    const[error, setError] = useState("false");

    const verifyuserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token });
            setVerified(true);
        } catch (error:any) {
            setError("true");
            console.log(error.response.data);
        }

    };

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        // Use decodeURIComponent to clean up any $ or % characters
        setToken(decodeURIComponent(urlToken) || "");
        setToken(urlToken || "");
    }, []);

    useEffect(() => { 
        if (token.length > 0) {
            verifyuserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Verify Your Email</h1>
            <h2 className="p-2 bg-orange-500 text-black ">
                {token ? `${token}` : "No token"}</h2>

            {verified && (
                <div >
                    <h2 className="text-2xl font-bold mb-4">Email Verified Successfully!</h2>
                    <Link href="/login">
                    Login                
                    </Link>
                </div>
            )}

            {error && (
                <div >
                    <h2 className="text-2xl font-bold bg-red-500 text-black">Error</h2>
                    
                </div>
            )}
        </div>
    )}