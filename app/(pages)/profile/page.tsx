'use client';
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import { SearchParamProps } from "@/types";
import { getAllCourses } from "@/actions/course.actions";

const ProfilePage = ({searchParams}: SearchParamProps) => {

  const query = searchParams?.q as string || "";

  const { data, page, totalPages } = getAllCourses({ query: query.toString() });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="bg-background w-full h-auto p-4 flex justify-center">
              <div className="bg-background max-w-[80vw] flex-col justify-center items-center
               border-col rounded-3xl hover:shadow-2xl p-6 outline outline-slate-400">
              
                <div className="w-full my-4 flex justify-center items-center rounded-lg">
                  
                  <div className="">
                    <Image 
                      src="/bean.png" width={500} height={500}  alt="test" 
                      className="h-48 w-48 rounded-full my-4 m-5"/>
                  </div>
                  
                  <div className="py-2 flex-col w-auto">
                      <div className="font-semibold text-4xl ml-4 mr-24">Skooy</div>
                      <div className="text-xl inline-flex items-center ml-4">@Skooyo</div>
                      
    
                      <div className="w-2/5 flex justify-start ml-1">
                        <SocialLinks />
                      </div>
                  </div>
                </div>
    
                <div className="flex-col justify-center pb-3">
                  <div className="pl-14 w-full border-slate-100 flex-col justify-center items-center">
                  
                    <h1 className="text-3xl font-bold mb-1 flex justify-center pr-10">Contributions</h1>
                    <div className="flex justify-center w-full mt-5">
                      <ul className="">
                        <li className="text-xl">☑️Completed Course</li>
                        <li className="text-xl">✅Completed Project</li>
                        <li className="text-xl">🥇Projects Win</li>
                      </ul>
                      
                      <ul className="pl-2">
                        <li className="text-lg">- 12</li>
                        <li className="text-lg">- 5</li>
                        <li className="text-lg">- 3</li>
                      </ul>
                    </div>
                  </div>


                  {/* <div className="pl-14 w-full border-slate-100 flex-col justify-start">
                    <h1 className="text-2xl font-bold mb-1">Skills</h1>

                      <div className="flex justify-center">
                        
                        <div className="w-1/2 m-3">
                          <p className="text-2xl">👨‍💻Frontend</p>
                          <ul>
                            <li className="text-xl">• React</li>
                            <li className="text-xl">• Next.js</li>
                            <li className="text-xl">• TailwindCSS</li>
                          </ul>
                        </div>

                        <div className="w-1/2 m-3">
                          <p className="text-2xl">⚙️Backend</p>
                          <ul>
                            <li className="text-xl">• Node.js</li>
                            <li className="text-xl">• Express</li>
                            <li className="text-xl">• MongoDB</li>
                          </ul>
                        </div>
                      </div>

                  </div>*/}
                </div>
                
              </div>
            </div>

            <div className="flex-col max-w-[80vw] justify-center items-center">
              <div className="flex justify-center">
                <h1 className="mt-5 mb-3 font-semibold text-4xl items-center">Completed Projects</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-5">
                {data.map(course => (
                  <ProjectCard course={course} key={course._id} />
                  ))}
              </div>
            </div>
        </main>
    );
}

export default ProfilePage;