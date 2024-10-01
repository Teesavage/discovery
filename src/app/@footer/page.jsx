import Link from "next/link";

export default function Footer() {
    return(
        <>
    <div id="footer">
        <center>
            <a href="https://instagram.com/discoverydeckng" target="_blank"><i className="bi bi-instagram footerIcon"></i></a>
            <a href="https://x.com/discoverydeckng" target="_blank"><i className="bi bi-twitter-x footerIcon"></i></a>
            <i className="bi bi-whatsapp footerIcon"></i>
            <i className="bi bi-tiktok footerIcon"></i>
            <i className="bi bi-envelope footerIcon"></i>
            <br />
            <p>&copy;2024 DISCOVERY DECK NG. ALL RIGHTS RESERVED.</p>
        </center>
    </div>
        
        </>
    )
}