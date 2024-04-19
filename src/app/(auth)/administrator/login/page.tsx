"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";
import axios from "axios";

export default function AdministratorLogin() {
    const router = useRouter();
    const [authData, setAuthData] = useState({
        email: "",
        password: "",
    });
    const [errors, setError] = useState<LoginErrorType>()
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        axios
            .post("/api/auth/administrator/login", authData)
            .then((res) => {
                const response = res.data;
                console.log("The response is ", response);
                if (response.status == 200) {
                    console.log("The user signed in", response);
                    signIn("credentials", {
                        email: authData.email,
                        password: authData.password,
                        callbackUrl: "/administrator/dashboard",
                        redirect: true,
                    });
                } else if (response.status == 400) {
                    setError(response?.errors);
                }
            })
            .catch((err) => {
                console.log("Error is", err);
            });
    };
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Toast />
            <div className="w-[500px] shadow-md rounded-lg p-5">
                <h1 className="text-2xl font-bold">Administrator Login</h1>
                <p>Welcome back</p>
                <form onSubmit={handleSubmit}>
                    <div className="mt-5">
                        <label className="block">Email</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full outline-red-300 p-2 h-10 rounded-md border"
                            onChange={(e) =>
                                setAuthData({ ...authData, email: e.target.value })
                            }
                        />
                        <span className="text-red-500 font-bold">
                            {errors?.email}
                        </span>
                    </div>
                    <div className="mt-5">
                        <label className="block">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full outline-red-300 p-2 h-10 rounded-md border"
                            onChange={(e) =>
                                setAuthData({ ...authData, password: e.target.value })
                            }
                        />
                        <span className="text-red-500 font-bold">
                            {errors?.password}
                        </span>
                    </div>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="w-full bg-red-400 rounded-lg p-2 text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
