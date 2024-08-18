import { ICourse } from '@/models/course.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectCardProps = {
  imageSrc: string;
  title: string;
}

const ProjectCard = ({ imageSrc, title }: ProjectCardProps) => {
  return (
    <Link
      className="
        flex flex-col h-[290px] max-w-[400px] outline outline-slate-400 w-full rounded-lg
        hover:cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
      href={`/profile`}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt="coverImage"
        width={400}
        height={225} 
        className="rounded-t-lg"
      />
      {/* Text */}
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-semibold line-clamp-1">{title}</h1>
      </div>
    </Link>
  )
}

export default ProjectCard;
