// "use client"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignoutButton from "@/components/signoutButton";
import HomeHere from "@/components/homeHere";
import Link from "next/link";
import Toast from "@/components/Toast";
export default async function dashboard() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login");
    }
    return (
        <main className="h-full">
            <Toast />
            <HomeHere />
            <div className="container">
                <div className="px-10 lg:px-80">

                    <h1 className="text-4xl mb-[30px]">Hello  <u>{(session.user?.name)}</u></h1>
                    <h2>This is your dashboard in which all the basic features that are provided to a user is displayed
                    </h2>

                </div>
            </div>
            <div className="mt-[40px] flex items-center justify-center">
                <SignoutButton />
            </div>
            <div className="m-[100px]">
                <Link href="/admin" className="text-xl m-[100px] border 2xl: border-black p-2  dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">For Admins Only</Link>
                <Link href="/manager" className="text-xl m-[100px] border 2xl: border-black p-2  dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">For Managers Only</Link>
            </div>
        </main>
    );
}
