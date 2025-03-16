"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json()

            if(response.ok) {
                localStorage.setItem("access_token", data.access);
                localStorage.setItem("refresh_token", data.refresh);
                alert("Login successful!")
                router.push("/create-post");
            } else {
                alert(`Login failed: ${data.detail || "Invalid credentials"}🥱`);
            }
        } catch (error) {
            console.error("Login error: ", error);
            alert("An error occured. Please try again!")
        }
    };

    return (
        <div className="flex items-center justify-content min-h-screen text-white justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">ENTER DASHBOARD🙂</h2>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 mb-3 bg-gray-700 border border-gray-600 rounded"
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-3 bg-gray-700 border border-gray-600 rounded"
                />
                <button
                    onClick={handleLogin}
                    className="w-full p-3 bg-blue-600 hover:bg-blue-800 hover:cursor-pointer rounded"
                >Login</button>
            </div>
        </div>
    )
}