import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    const bannerImg = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        width: "100%",
        height: "auto",
        position: "relative",
    }
    
    return(
        <>
        <section id="banner">
            <div style={bannerImg}>
                <Image src="/images/banner1.jpg" alt="Banner" className="bannerImg" width="800" height="1000" />
            </div>
            
      </section>
        </>
    )
}