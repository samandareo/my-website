import ContainerHeader from "@/components/ContainerHeader";
import ContainerFooter from "@/components/ContainerFooter";

export default function Home() {
  return (
      <div className="flex flex-col gap-y-36">
        <ContainerHeader/>
        <ContainerFooter />
      </div>
)
  ;
}
