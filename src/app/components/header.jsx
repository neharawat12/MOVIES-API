import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full mt-15 bg-black py-10 flex justify-center ">
      
      <div className="relative w-[90%] max-w-[1400px] h-[500px] rounded-3xl overflow-hidden ">
        
        <Image
          src="/images/hero.png"   
          alt="Movies Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Optional Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

      </div>

    </div>
  )
}

export default Header