import HomeCards from "@/components/homeCards";
import Image from "next/image";
import Link from "next/link";
import Banner from "./@banner/page";

export default function Home(){
    return(
        <>
        <Banner />
        <div className="homeHeader">
        <center><h1>THE DECK'S TOP DISCOVERIES!</h1></center>
        </div>
        
        
        <section id="homeCardGrids">

        <HomeCards 
            cardImage = "/images/tweehz.jpg"
            cardImageAlt = "Sapa Loving by Tweehz"
            cardTitle = "Tweehz reminisces on his encounters with Gold diggers."
            cardTrack = "Sapa Loving - Single"
            date = "September 27,2024"
            description = "This AfroBeat hit is a mixture of experience and fantasy. African Sensation Tweehz expresses his frustration on this one." 
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
            cardTitle = "Major AJ Teams Up With Superstar Crayon To Deliver New Hit Titled 'KERE'"
            cardTrack = "BAD BOY MAJOR - EP"
            date = "September 20,2024"
            description = "If you are a fan of Asake and 1da Banton, the chances are high that you would enjoy Major AJ’s new seven-track EP." 
        />
        <HomeCards 
            cardImage = "/images/tweehz.jpg"
            cardImageAlt = "Sapa Loving by Tweehz"
            cardTitle = "Tweehz reminisces on his encounters with Gold diggers."
            cardTrack = "Sapa Loving - Single"
            date = "September 27,2024"
            description = "This AfroBeat hit is a mixture of experience and fantasy. African Sensation Tweehz expresses his frustration on this one." 
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
            cardTitle = "Major AJ Teams Up With Superstar Crayon To Deliver New Hit Titled 'KERE'"
            cardTrack = "BAD BOY MAJOR - EP"
            date = "September 20,2024"
            description = "If you are a fan of Asake and 1da Banton, the chances are high that you would enjoy Major AJ’s new seven-track EP." 
        />

        </section>







        </>
    )
}