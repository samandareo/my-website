import ContainerHeader from "@/components/ContainerHeader";
import ContainerFooter from "@/components/ContainerFooter";
import ContainerExperience from "@/components/ContainerExperience";
import ContainerProjects from "@/components/ContainerProjects";

export default function Home() {
  return (
      <div className="flex flex-col gap-y-36 w-10/12 mx-auto">
        <ContainerHeader/>
        <div className="container mx-auto flex flex-col gap-y-10">

          {/* Experience section */}
          <div>
            <div>
              <h1 className="text-2xl font-semibold">Experience</h1>
              <div className="w-100 h-[0.5px] bg-white mt-2 opacity-50"></div>
            </div>
            <div className="flex flex-row flex-wrap gap-y-4 mt-4">
              <ContainerExperience/>
              <ContainerExperience/>
            </div>
          </div>
          
          {/* Projects section */}
          <div>
            <div>
              <h1 className="text-2xl font-semibold">Projects</h1>
              <p className="font-light text-sm">Some of the projects are from work and some are on my own time.</p>
              <div className="w-100 h-[0.5px] bg-white mt-2 opacity-50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <ContainerProjects/>
              <ContainerProjects/>
              <ContainerProjects/>
              <ContainerProjects/>
            </div>
          </div>

        </div>
        <ContainerFooter />
      </div>
)
  ;
}
