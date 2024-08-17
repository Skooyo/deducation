"use client"

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import "./style.css";
import TextEditor from '@/components/TextEditor';
import { getCourseById } from '@/actions/course.actions';
import CourseToolbar from '@/components/CourseToolbar';
import CoursePageSidebar from '@/components/CoursePageSidebar';

import DOMPurify from 'dompurify';
import { createNewUrl } from '@/utils/url';
import PageCreatorControls from '@/components/PageCreatorControls';
import { SearchParamProps } from '@/types';
import Link from 'next/link';

interface PageContent {
  type: string;
  data: string;
}

const CoursePage = ({ params: { id } ,searchParams }: SearchParamProps) => {
  const isCourseCreator = true; // TODO: Replace with actual value
  const course = getCourseById(id);
  const router = useRouter();
  // const searchParams = useSearchParams();
  const page = searchParams?.page as string || "1";
  let num_of_pages = 1;
  
  const [isLastPage, setIsLastPage] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const [value, setValue] = useState<string>(course?.pages[Number(page) - 1].content ?? "");
  const [objValue, setObjValue] = useState<Array<PageContent>>(course?.pages[Number(page)-1].content ?? {})

  const handleSaveEditClick = () => {
    if (isEditing) {
      console.log("Save clicked", value);
    }

    setIsEditing(!isEditing);
  }

  useEffect(() => {
    const newUrl = createNewUrl({ newParam: "page", newValue: page});
    setValue(course?.pages[Number(page) - 1].content ?? "");
    setObjValue(course?.pages[Number(page) - 1].content ?? {})
    num_of_pages = course?.pages.length ?? 1
    setIsLastPage(num_of_pages == page)

    router.push(newUrl);
  }, [router, page])

  return (
    <div className="flex flex-col h-screen">

      <CourseToolbar course={course} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="flex flex-row flex-grow">
        {showSidebar && (
          <CoursePageSidebar course={course} pageId={page} />
        )}
        <div className="w-full flex flex-col text-black z-99"> 
          {/* hide as per mario's request */}
          {/* {isCourseCreator && (
           <PageCreatorControls course={course} isEditing={isEditing} setIsEditing={setIsEditing} />
          )} */}
          
          {isEditing && (
            <TextEditor data={value} onDataChanged={setValue} />
          )}

          {/* idk what i did but it works */}
          {!isEditing && (objValue.map((data, index) => {
            // console.log(data)
            if(data.type == "h3") {
              return(
                <div key={index} className="text-white m-5 px-40 text-xl">
              {React.createElement(data.type, {}, data.data)}
            </div>
            )
          } else if (data.type == "h1") {
            return(
              <div key={index} className="text-white font-semibold text-3xl m-5 flex items-center justify-center mx-30 pt-8">
                {React.createElement(data.type, {}, data.data)}
              </div>
            )
          } else {
            return(
              <div className="m-2 items-center justify-center w-full flex">
              <img src={data.data} width="810" height="405" alt="img" />
              </div>
            )
          }}))}

          {isLastPage && (
            <Link 
            className="w-full justify-center items-center flex pt-16"
            href={`/courses`}>
              <button
                className="items-center justify-center px-4 py-3 bg-gradient-to-tl from-[#f5ff45] to-[#26e400]
                text-background rounded-lg glow-button font-semibold w-fit"
                >
                Finish Course
              </button>
            </Link>
          )}

          {/* {!isEditing && (
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
              className="text-white text-xl ck-content px-10 pt-4 z-1 relatve m-2"
            />
          )} */}

        </div>
      </div>
    </div>
  );
}

export default CoursePage;