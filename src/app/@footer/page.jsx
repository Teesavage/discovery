import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return(
        <>
    <div id="footer" className="footerGrid">

        <div>
            <Image src="/images/banner2.jpg" alt="Banner" className="" width="50" height="50" /><br />
            <p>Home To Future Sounds</p><br />
            <p>Submit your music here - discoverydeck@gmail.com</p>

        </div>

        <div>
            <br />
            <a href="https://instagram.com/discoverydeckng" target="_blank"><i className="bi bi-instagram footerIcon"></i></a>
            <a href="https://x.com/discoverydeckng" target="_blank"><i className="bi bi-twitter-x footerIcon"></i></a>
            <i className="bi bi-facebook footerIcon"></i>
            <i className="bi bi-spotify footerIcon"></i>
            <i className="bi bi-envelope footerIcon"></i>
            <br /> <br />
            <p>Weekly updates on music, style, culture and much more.</p><br />
            <button className="footerBtn">SUBSCRIBE</button>
        </div>

        
    </div>
        
        </>
    )
}