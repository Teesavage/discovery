import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";


export default function Banner() {
    const bannerImg = {
        width: "100%",
        height: "auto",
        position: "relative",
        opacity: "0.6",
        top: "-70px",
    }
    const bannerText = {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        fontSize: "1.4em",
    }
    
    return(
        <>
        <section id="banner">
            <div style={bannerImg}>
                <Image src="/images/bloodyciv.jpg" alt="Banner" className="bannerImg" width="800" height="900" />
            </div>
            <div style={bannerText} className="bannerText">
                <motion.div 
                className="bannerIcons"
                initial={{ y: -180 , opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                <a href="https://instagram.com/discoverydeckng" target="_blank"><i className="bi bi-instagram footerIcon"></i></a>
                <a href="https://x.com/discoverydeckng" target="_blank"><i className="bi bi-twitter-x footerIcon"></i></a>
                <i className="bi bi-facebook footerIcon"></i>
                <i className="bi bi-spotify footerIcon"></i>
                <i className="bi bi-envelope footerIcon"></i>
                </motion.div>
                <motion.h1
                initial={{ x: 90 , opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                    DISCOVERING TOMORROW&apos;S STARS
                </motion.h1>
                <motion.p
                initial={{ x: -90 , opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                    Dive into the vibrant world of emerging Nigerian music with this carefully
                    curated playlist. Discover fresh talent, unique sounds, and the next generation of music stars. 
                </motion.p><br />
                <motion.h2
                
                initial={{ x: 90 , opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                    LISTEN NOW <i className="bi bi-forward-fill"></i>
                </motion.h2>
            </div>
            
      </section>
        </>
    )
}