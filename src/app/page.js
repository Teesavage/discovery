"use client"

import HomeCards from "@/components/homeCards";
import Image from "next/image";
import Link from "next/link";
import Banner from "./@banner/page";
import { motion } from "framer-motion";



export default function Home(){
    

    return(
        <>
        <Banner />
        <div className="homeHeader">
        <h1>Recent Articles</h1>
        </div>
        
        
        <section id="homeCardGrids">

        <Link href="/blog/tweehz-sapa-loving">
        <HomeCards 
            cardImage = "/images/tweehz.jpg"
            cardImageAlt = "Sapa Loving by Tweehz"
            cardTitle = "Tweehz reminisces on his encounters with Gold diggers."
            cardTrack = "Sapa Loving - Single"
            date = "September 27,2024"
            description = "This AfroBeat hit is a mixture of experience and fantasy. African Sensation Tweehz expresses his frustration on this one." 
        />
        
        </Link>
        

        
        <Link href="/blog/mod3st-candydreams">
        <HomeCards 
            cardImage = "/images/mod3st-candydreams.jpg"
            cardImageAlt = "CandyDreams by Mod3st"
            cardTitle = "Mod3st Announces Release of New Album &apos;CandyDreams&apos; With Guest Appearance From The Legendary Ice Prince"
            cardTrack = "Candy Dreams - Album"
            date = "July 30, 2024"
            description = " Thriller dropped on July 11th, 2024, ahead of Mod3st&apos;s highly anticipated album Candy Dreams." 
            />
        </Link>
        

        
        <HomeCards 
            cardImage = "/images/follied.jpg"
            cardImageAlt = "iRap by Follied"
            cardTitle = "Follie D releases Two Packed Single"
            cardTrack = "iRap - Singles(2)"
            date = "September 27,2024"
            description = "This Afro HipHop jams will definitely have you bopping your heads. From good lyrics to beats and everything in-between. This is true Rhythm and Poetry." 
        />
        
        
        <HomeCards 
            cardImage = "/images/majorxcrayon.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "Major AJ Teams Up With Superstar Crayon To Deliver New Hit Titled &apos;KERE&apos;"
            cardTrack = "BAD BOY MAJOR - EP"
            date = "September 20,2024"
            description = "If you are a fan of Asake and 1da Banton, the chances are high that you would enjoy Major AJ’s new seven-track EP." 
        />
        
        
        <HomeCards 
            cardImage = "/images/follied.jpg"
            cardImageAlt = "iRap by Follied"
            cardTitle = "Follie D releases Two Packed Single"
            cardTrack = "iRap - Singles(2)"
            date = "September 27,2024"
            description = "This Afro HipHop jams will definitely have you bopping your heads. From good lyrics to beats and everything in-between. This is true Rhythm and Poetry." 
        />
        
        
        <HomeCards 
            cardImage = "/images/majorxcrayon.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "Major AJ Teams Up With Superstar Crayon To Deliver New Hit Titled &apos;KERE&apos;"
            cardTrack = "BAD BOY MAJOR - EP"
            date = "September 20,2024"
            description = "If you are a fan of Asake and 1da Banton, the chances are high that you would enjoy Major AJ’s new seven-track EP." 
        />
        
        

        </section>
        
        <center><Link href="/blog"><button className="generalBtn">VIEW MORE</button></Link></center>
        <br />

        <hr />
        <center><h1>MUSIC</h1></center>
        <hr />
        
        <section id="homeCardGrids">

        
        <HomeCards 
            cardImage = "/images/majorxcrayon.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "KERE Is Not A Song You Just Listen To For Fun - Major"
            cardTrack = ""
            date = ""
            description = "Let us dive into why afrobeat sensation and fast rising artist thinks his song is a worldwide hit!" 
        />
        
        
        <HomeCards 
            cardImage = "/images/nms.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "KERE Is Not A Song You Just Listen To For Fun - Major"
            cardTrack = ""
            date = ""
            description = "Let us dive into why afrobeat sensation and fast rising artist thinks his song is a worldwide hit!" 
        />

<HomeCards 
            cardImage = "/images/nms.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "KERE Is Not A Song You Just Listen To For Fun - Major"
            cardTrack = ""
            date = ""
            description = "Let us dive into why afrobeat sensation and fast rising artist thinks his song is a worldwide hit!" 
        />
        

        </section>

        <center><Link href="/blog"><button className="generalBtn">VIEW MORE</button></Link></center>
        <br />

        <hr />

        <center><h1>INTERVIEWS</h1></center>
        <hr />
        
        <section id="homeCardGrids">

        
        <HomeCards 
            cardImage = "/images/majorxcrayon.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "KERE Is Not A Song You Just Listen To For Fun - Major"
            cardTrack = ""
            date = ""
            description = "Let us dive into why afrobeat sensation and fast rising artist thinks his song is a worldwide hit!" 
        />
        
        
        <HomeCards 
            cardImage = "/images/nms.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "KERE Is Not A Song You Just Listen To For Fun - Major"
            cardTrack = ""
            date = ""
            description = "Let us dive into why afrobeat sensation and fast rising artist thinks his song is a worldwide hit!" 
        />

        <HomeCards 
            cardImage = "/images/nms.jpg"
            cardImageAlt = "Kere By Major"
            cardTitle = "KERE Is Not A Song You Just Listen To For Fun - Major"
            cardTrack = ""
            date = ""
            description = "Let us dive into why afrobeat sensation and fast rising artist thinks his song is a worldwide hit!" 
        />
        

        </section>

        <center><Link href="/blog"><button className="generalBtn">VIEW MORE</button></Link></center>
        <br />

        <hr />
        <center><h1>CONTACT US</h1></center>
        <hr />

        <section id="contact">

        <div className="contactUs">
          <center>
            <input className="form" type="text" placeholder="Name" required=""  name="name" /><br />
            <input className="form" type="text" placeholder="Email Address" required=""  name="email" /><br />
            <input className="form" type="text" placeholder="Subject" required=""  name="subject" /><br />
            <textarea className="form" type="text" placeholder="Message" name="message" /><br />
            <button className="generalBtn testBtn">SEND MESSAGE</button>
          </center>
        </div>
    </section>





        </>
    )
}