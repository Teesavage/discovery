"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


export default function Header(){

    const currentPath = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const toggleSideBar = () => setIsOpen(prev => !prev);

    useEffect(() => {
        isOpen? document.getElementById("navList").style.display = "block" : document.getElementById("navList").style.display = "none";
    }, [toggleSideBar])
    return(
        <>

    <div id="header">
        <Image src="/images/discoverylogo.png" alt="Logo" className="logo" width="50" height="50" />
        <Image src="/images/discoverydeck.png" alt="LogoName" className="logoname" width="300" height="50" />
        
        <button className="navBtn" onClick={toggleSideBar}>
              &#9776;
        </button>
       
        <ul id="navList" onClick={toggleSideBar}>
            <Link href="/"><li className="navItem">Home</li></Link>
            <Link href="/blog"><li className="navItem">Blog</li></Link>
            <Link href=""><li className="navItem">Editorials</li></Link>
            <Link href=""><li className="navItem">About Us</li></Link>
            <Link href="/#contact"><li className="navItem">Contact Us</li></Link>
        </ul>

        <ul id="navList2">
            <motion.div whileHover={{scale: 1.1}}> <Link href="/"><li className = {currentPath === "/" ? "navItem22" : "navItem2"}>Home</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href="/blog"><li className= {currentPath === "/blog" ? "navItem22" : "navItem2"}>Blog</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href=""><li className="navItem2">Editorials</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href=""><li className="navItem2">About Us</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href="/#contact"><li className="navItem2">Contact Us</li></Link></motion.div>
        </ul>

    </div>
        </>
    )
}