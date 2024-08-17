'use client';
import BountyCard from "@/components/BountyCard";
import { tempBounties } from "../../../data/mockData";
import { useState } from "react";
import BountyPopUp from "@/components/BountyPopUp"

export default function bountyPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return(
    <>
        <div className = "flex flex-col px-72 items-center justify-center h-full pb-120">
            {/* Bounties */}
            <div className="flex flex-col gap-6 px-30 p-4 mt-4 h-full">
                    <h1 className="font-semibold text-4xl">Bounties</h1>
                    <div className="flex flex-col gap-5 h-fit">
                        {tempBounties.map(bounty => (
                            <BountyCard bounty={bounty} key={bounty._id} isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
                        ))}
                        <div className="h-full"></div>
                    </div>
                </div>
            </div>
        <BountyPopUp isOpen = {isModalOpen} setIsOpen = {setIsModalOpen} />
    </>
    )
}