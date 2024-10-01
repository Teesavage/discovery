import Link from "next/link";
import Image from "next/image";
import BlogPosts from "@/components/blogPosts";

export default function Mod3stCandyDreams(){
    return(
        <>
        <BlogPosts 
            bannerImg = "/images/mod3st2.jpg"
            blogTags ="Editorials, Music"
            blogTitle ="Mod3st Announces Release of New Album &apos;CandyDreams&apos; With Guest Appearance From The Legendary Ice Prince"
            blogDate ="July 30, 2024"
             />

        <div id = "blog">
            <i>Wav Factory is excited to announce the release of “Thriller,” by rising hip-hop artist 
                Mod3st, featuring renowned rapper Ice Prince. This high-energy track blends hip-hop and 
                Afrobeat, showcasing smooth verses from Mod3st and the signature rap style of Ice Prince.</i>
                <br /><br />
            <p>“Thriller” drops on July 11th, 2024, ahead of Mod3st’s highly anticipated album Candy Dreams, 
                set for release on July 18th, 2024. The album features an impressive lineup of collaborations 
                with artists such as Ebi, Juhkie, Khalil, Chyn, and Otega, promising a diverse and dynamic 
                musical experience.</p><br />

                <center><Image src="/images/mod3st-candydreams.jpg" alt="Sapa Loving Cover Art" className="blogImages" width="300" height="300" /></center>
                <br />
            <p>“Thriller” is now available for streaming and download on all major platforms. For more 
                information, interviews, or media requests, please contact:<br />Wavfactoryltd@hotmail.com<br /> Manager Abq – 08165156379</p>
            <br />
            <h2>About Mod3st</h2><br />
            <p>Kayode Moses a Nigerian hip hop artist/producer popularly known as Mod3st is an emerging artist 
                known for his unique blend of hip-hop and Afrobeat. His music resonates with a diverse audience, 
                and his upcoming album Candy Dreams is set to further establish his presence in the music industry. 
                He learnt how to authenticate his music style and create a unique Hip hop sound through music 
                production. He was inspired by rappers like Lil Wayne, 50 Cent, Drake, Tory Lanez, Ice Prince, 
                and Olamide.</p><br />
        </div>

        <center><Link href="/"><button className="generalBtn">GO HOME</button></Link>
       <Link href="/blog"><button className="generalBtn">MORE BLOGS</button></Link></center><br />

            
        </>
    )
}