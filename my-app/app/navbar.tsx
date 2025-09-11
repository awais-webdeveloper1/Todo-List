import Image from "next/image"
import logo from "./asetes/logo.avif"
import Link from "next/link"








export default function Nav(){
    return(
        <>
           <title>My Project</title>
      <section className="fixed h-16 w-full flex justify-between items-center shadow-xl  bg-white text-black px-12">
        <div className=""><Image className="w-14 h-14 rounded-full cursor-pointer" src={logo} alt="logo" /></div>
        <div className="">
          <ul className="flex gap-8 font-semibold">
          <a href=""><li>Home</li></a>
          <a href=""><li>About</li></a>
          <Link href="/sinup">Contact Us</Link>
          </ul>
        </div>
        <Link href="/sinup"> <div ><button className="bg-emerald-600 text-white border h-12 w-30 rounded-3xl shadow-xl cursor-pointer font-semibold">Sign Up</button></div></Link>
      </section>
        
        
        </>
    )
}