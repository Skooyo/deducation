'use client';
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";

const ProfilePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="bg-background w-full h-auto p-4 flex justify-center">
              <div className="bg-background w-2/3 flex-col justify-center items-center
               border-col rounded-3xl hover:shadow-2xl p-6 border-slate-400">
              
                <div className="w-2/3 my-4 flex justify-center border-slate-400 rounded-lg">
                  <div className="border border-black">
                    <Image 
                      src="/miku.png" width={500} height={500}  alt="test" 
                      className="h-48 w-48 rounded-full border-2 border-black my-4 m-5"/>
                  </div>
                  
                  <div className="py-2 border border-black">
                      <div className="font-bold text-text text-2xl">Kai Zhe</div>
                      <div className="text-text inline-flex items-center">@Kaiz404</div>
                      
    
                      <div className="mt-2 w-full flex justify-center">
                        <SocialLinks />
                      </div>
                  </div>
                </div>
    
                <div className="border border-slate-400 text-text p-8">
                    <p>Details</p>
                    <p>Completed Course</p>
                    <p>Completed Project</p>
                    <p>Projects Win</p>
                    <p>Skills</p>
                    <p>Crying</p>
                </div>
    
                {/* <div className="mt-2 pb-5 w-full flex justify-center">
                  <SocialLinks />
                </div> */}
              </div>
            </div>
            <div className="grid bg-background w-full grid-cols-3 space-evenly">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
        </main>
    );
}

export default ProfilePage;