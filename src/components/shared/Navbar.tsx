"use client"
import { localImages } from "@/utils/imageProvider";
import Image from "next/image";
import { Segmented } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {


 const pathname = usePathname();


  return (
    <div className="flex  **:text-white backdrop:blur-2xl backdrop-blur-md bg-white/30 top-0 w-full z-50 justify-center  fixed left-0 right-0 py-4 items-center gap-10">
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <h4 className={`${pathname === '/' ? 'border-b border-white ' : 'border-b border-transparent'} text-nowrap mx-4 text-sm  py-1.5 `}>Home</h4>
        </Link>
        <Link href={"/projects"}>
          <h4 className={`${pathname === '/projects' ? 'border-b border-white ' : 'border-b border-transparent'} text-nowrap mx-4 text-sm  py-1.5 `} >Our Projects</h4>
        </Link>
        <Link href={"/chairmans-message"}>
          <h4 className={`${pathname === '/chairmans-message' ? 'border-b border-white ' : 'border-b border-transparent'} text-nowrap mx-4 text-sm  py-1.5 `}>Chairmans Message</h4>
        </Link>
      </div>
      <div>
        <Image className="w-52" src={localImages.InfinityDevelopmentsLogo} alt="nav-logo"/>
      </div>
      <div className="flex items-center gap-2">
        <Link href={"/infinity-foundation"}>
          <h4 className={`${pathname === '/infinity-foundation' ? 'border-b border-white ' : 'border-b border-transparent'} text-nowrap mx-4 text-sm  py-1.5 `}>Infinity Foundation</h4>
        </Link>
        <Link href={"/news"}>
          <h4 className={`${pathname === '/news' ? 'border-b border-white ' : 'border-b border-transparent'} text-nowrap mx-4 text-sm  py-1.5 `}>News</h4>
        </Link>
        <Link href={"/about"}>
          <h4 className={`${pathname === '/about' ? 'border-b border-white ' : 'border-b border-transparent'} text-nowrap mx-4 text-sm  py-1.5 `}>Abouts Us</h4>
        </Link>
        <Link href={"/contact"}>
          <h4 className={`${pathname === '/contact' ? 'border-b border-white ' : 'border-b border-transparent'} text-nowrap mx-4 text-sm  py-1.5 `}>Contact Us</h4>
        </Link>
      </div>
      <div className="custom-segments">
        <Segmented<string>
          options={["Eng", "العربية"]}
          onChange={(value) => {
            console.log(value); // string
          }}
          style={{}}
        />
      </div>
    </div>
  );
};

export default Navbar;
