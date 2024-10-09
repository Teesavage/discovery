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

    useEffect(() => {
        //THIS IS FOR HEADER COLOR CHANGE/OPACITY
        // The debounce function receives our function as a parameter
        const debounce = (fn) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            }
        };

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    })

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
            <Link href=""><li className="navItem">Honour Roll</li></Link>
            <Link href="/blog"><li className="navItem">Articles</li></Link>
            <Link href=""><li className="navItem">Music</li></Link>
            <Link href=""><li className="navItem">Interviews</li></Link>
            <Link href="/#contact"><li className="navItem">Contact Us</li></Link>
        </ul>

        <ul id="navList2">
            <motion.div whileHover={{scale: 1.1}}> <Link href="/"><li className = {currentPath === "/" ? "navItem22" : "navItem2"}>Home</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href=""><li className = "navItem2">Honour Roll</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href="/blog"><li className= {currentPath === "/blog" ? "navItem22" : "navItem2"}>Articles</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href=""><li className="navItem2">Music</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href=""><li className="navItem2">Interviews</li></Link></motion.div>
            <motion.div whileHover={{scale: 1.1}}> <Link href="/#contact"><li className="navItem2">Contact Us</li></Link></motion.div>
        </ul>

    </div>
        </>
    )
}