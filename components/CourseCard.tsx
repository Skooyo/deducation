import { ICourse } from "@/models/course.model";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CourseCardProps = {
  course: ICourse;
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      className="
        flex flex-col h-[350px] max-w-[400px] border-2 border-s3 w-full rounded-lg
        hover:cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
      href={`/courses/${course._id}`}
    >
      {/* Image */}
      <Image
        src={course.coverImageUrl}
        alt="coverImage"
        width={400}
        height={225}
        className="rounded-t-lg"
      />
      {/* Text */}
      <div className="flex flex-col p-4 gap-3">
        <h1 className="text-2xl font-semibold line-clamp-1 text-p4">
          {course.title}
        </h1>
        <p className="text-sm line-clamp-2 text-p5">{course.description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
