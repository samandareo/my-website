import ContainerHeader from "@/components/ContainerHeader";
import ContainerFooter from "@/components/ContainerFooter";
import MainContent from "@/app/installing-docker-and-docker-compose-on-ubuntu-server/MainContent";

export default function Page(){
    return(
        <div className="flex flex-col gap-y-36">
            <ContainerHeader />
            <MainContent />
            <ContainerFooter />
        </div>
    )
}