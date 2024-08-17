"use client";

import { IBounty } from '@/models/bounty.model';
import React, { useState } from 'react';
import Image from 'next/image';
import BountyPopUp from './BountyPopUp';

type BountyCardProps = {
    bounty: IBounty;
};

const BountyCard = ({ bounty }: BountyCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        console.log("Card clicked");
        setIsModalOpen(true);
        console.log("isModalOpen after click:", isModalOpen);
    }

    return (
        <>
            <div
                className="
                flex h-40 w-full outline outline-slate-400 rounded-lg
                hover:cursor-pointer transform transition duration-300 hover:translate-x-2 hover:shadow-lg"
                onClick={handleCardClick}
                >
                <Image
                    src={bounty.placeholderPic}
                    alt="creator profile picture"
                    width={256}
                    height={160}
                    className="h-min-40"
                    />

                {/* text */}
                <div className="flex flex-col justify-between w-full p-4">
                    <h1 className="text-xl font-semibold line-clamp-1">{bounty.title}</h1>
                    <p>By {bounty.creator}</p>
                    <p className="text-sm line-clamp-2">{bounty.description}</p>
                    <div className="pt-3 flex flex-wrap justify-between">
                        <p className="text-red-500">{`Due in ${calculateDueDate(bounty.dueDate)} days (${getFormattedDate(bounty.dueDate)})`}</p>
                        <p className="text-green-300">{`${bounty.reward} ${bounty.currency}`}</p>
                    </div>
                </div>
            </div>
            <BountyPopUp bounty={bounty} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
    );
};

export default BountyCard;

function calculateDueDate(bountyDate: Date) {
    const date = new Date(bountyDate);
    const currentDate = new Date();

    const diffInMili = Math.abs(date.getTime() - currentDate.getTime());
    const miliSecondsInADay = 1000 * 60 * 60 * 24;
    const daysDue = Math.floor(diffInMili / miliSecondsInADay);
    return daysDue;
}

function getFormattedDate(bountyDate: Date) {
    return bountyDate.toDateString();
}