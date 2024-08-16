"use client"

import { getAllCourses } from "@/actions/course.actions";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import { useSearchParams, useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import PaginationControls from "@/components/PaginationControls";
import { SearchParamProps } from "@/types";
import Link from "next/link";

const AllCoursePage = ({ searchParams }: SearchParamProps) => {
  // const searchParams = useSearchParams() || 1;
  // const query = searchParams.get("q") || "";

  const query = searchParams?.q as string || "";

  const { data, page, totalPages } = getAllCourses({ query: query.toString() });

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col gap-10 2xl:max-w-[80vw] px-10">
        <div className="md:flex-row flex flex-col justify-between items-center mt-2">
          <h1 className="text-4xl font-semibold mt-5">Browse Courses</h1>
          <Link className="bg-primary text-background rounded-lg p-3 flex items-center mt-5" href="/courses/create">Create New Course</Link>
          <div className="flex items-center mt-5 w-full md:max-w-[350px]">
              <SearchBar placeholder="Search for a course..."/>
            {/* Filter */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.map(course => (
            <CourseCard course={course} key={course._id} />
            ))}
            </div>
          <PaginationControls totalPages={totalPages}/>
      </div>
    </div>
  )
}

export default AllCoursePage;
