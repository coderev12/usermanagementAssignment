import React, { use } from 'react';
import Link from 'next/link';
import axios from 'axios';
import RemoveBtn from '@/components/RemoveButton'; // Assuming RemoveBtn is a component
// import { HiPencilAlt } from 'react-icons/hi';

interface User {
    _id: string,
    name: string,
    email: string,
    role: string,
    nameOfOrg: string,
}

const getTopics = async (): Promise<User[]> => {
    try {
        const res = await axios.get('http://localhost:3000/api/auth/administrator/dashborad');

        // if (!res.ok) {
        //     throw new Error('Failed to fetch topics');
        // }
        // console.log(res.data);
        return res.data as User[];
    } catch (error) {
        console.log('Error loading topics: ', error);
        return []; // Handle errors gracefully, potentially return empty array
    }
};
export default async function TopicsList() {
    // console.log(await getTopics())

    const u: User[] = await getTopics();
    const user = Object.entries(u)[0][1]
    // console.log(user[0])
    return (
        <>
            {user.length > 0 ? (
                user.map((user: User) => (
                    <div className='flex items-center justify-center'>


                        <div
                            //     key={user._id}
                            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                        >
                            <div>
                                <h2 className="font-bold text-2xl">{user.name}</h2>
                                <div>{user.email}</div>
                                <div>{user.role}</div>
                                <div>{user.nameOfOrg}</div>
                            </div>
                            <div className="flex gap-2">
                                <RemoveBtn id={user._id} />
                            </div>
                        </div>
                    </div>
                )))
                : (
                    <div>No topics found.</div>
                )}
        </>
    );
}
