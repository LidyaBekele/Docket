import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heading } from "./_components/heading";
import { StarterImages } from "./_components/starterimages";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingPage = () =>{
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center
      md:justify-start text-center gap-y-8 flex-1 px-6">
        <Heading/>
        <StarterImages /> 
      </div>
      <Footer/>
    </div>
  );
}
export default MarketingPage;
