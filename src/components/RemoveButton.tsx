"use client"
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface RemoveBtnProps {
    id: string;
}

export default function RemoveBtn({ id }: RemoveBtnProps) {
    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await axios.delete(`/api/auth/administrator?id=${id}`);

            if (res.status == 200) {
                router.refresh(); // Refresh the page on successful deletion
            }
        }
    };

    return (
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}
