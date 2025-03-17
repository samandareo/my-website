import ContainerHeader from "@/components/ContainerHeader";
import ContainerFooter from "@/components/ContainerFooter";
import ContainerExperience from "@/components/ContainerExperience";

export default function Home() {
  return (
      <div className="flex flex-col gap-y-36 w-10/12 mx-auto">
        <ContainerHeader/>
        <div className="container mx-auto flex flex-col gap-y-4">
          <div>
            <div>
              <h1 className="text-2xl font-semibold">Experience</h1>
              <div className="w-100 h-[0.5px] bg-white mt-2 opacity-50"></div>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
              <ContainerExperience/>
              <ContainerExperience/>
            </div>
          </div>
          
          <div>

          </div>

        </div>
        <ContainerFooter />
      </div>
)
  ;
}
