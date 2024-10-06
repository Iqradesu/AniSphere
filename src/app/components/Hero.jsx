import Image from "next/image";

const Hero = () => {
  return (
    <div className="absolute w-full h-screen bg-gradient-to-t from-orange-950 via-transparent to-orange-950 flex-row flex">
        <Image
        src="/sukuna.jpeg"
        alt="background"
        quality={100}
        width={1000}
        height={1000}
        objectFit="cover"  // Ensures the image fills the container without stretching
         className=" h-full mix-blend-overlay  md:block hidden"
         style={{width:'33vw'}}
        />
        <Image
        src="/tanjiro.jpeg"
        alt="background"
        quality={100}
        width={1000}
        height={1000}
        objectFit="cover"  // Ensures the image fills the container without stretching
         className=" h-full mix-blend-overlay  md:block hidden"
         style={{width:'34vw'}}

        />
        <Image
        src="/yorforger.jpeg"
        alt="background"
        quality={100}
        width={1000}
        height={1000}
        objectFit="cover"  // Ensures the image fills the container without stretching
         style={{width:'33vw'}}
         className=" h-full mix-blend-overlay  md:block hidden"
        />


         <Image
        src="/sukuna.jpeg"
        alt="background"
        quality={100}
        fill
        sizes="100vw"
        objectFit="cover"  // Ensures the image fills the container without stretching
         className=" h-full mix-blend-overlay md:hidden sm:block hidden  "
        />
        
        <Image
        src="/tanjiro.jpeg"
        alt="background"
        quality={100}
        fill
        sizes="100vw"
        objectFit="cover"  // Ensures the image fills the container without stretching
         className=" h-full mix-blend-overlay sm:hidden block "
        />
        
    </div>
  )
}

export default Hero
