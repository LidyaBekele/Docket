import Image from "next/image";
export const StarterImages = () => {
    return(
        <div className="flex flex-col items-center justify-center
        max-w-5xl">
            <div  className="flex items-center">
                <div className="relative w-[300px] h[200px] sm:w-[350px]
                sm:h-[300px] md:h-[200px] md:w-[300px]">
                    <Image 
                    src="/light1.png" 
                    fill
                    className="object-contain"
                    alt="/light1.png"
                    />
                </div>
                <div className="relative h-[300px] w-[500px] hidden md:block">
                    <Image 
                    src="/light2.png" 
                    fill
                    className="object-contain"
                    alt="/slight2.png"
                    />
                </div>
            </div>
        </div>

    )
}