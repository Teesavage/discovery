import Link from "next/link";
import Image from "next/image";
import BlogPosts from "@/components/blogPosts";


export default function TweehzSapaLoving(){
    return(
        <>
        <BlogPosts 
            bannerImg = "/images/tweehz2.jpg"
            blogTags ="Editorials, Music"
            blogTitle ="Fast-Rising Afrobeats Artist Tweehz Debuts Infectious New Single SAPA LOVING"
            blogDate ="September 29, 2024"
       />
       <div id = "blog">
            <i>The mid-tempo, groovy Amapiano track offers a heartfelt reflection on transactional love 
            amid a smooth, infectious vibe that’s both gentle and irresistibly feel-good.</i>
            <br /><br />
            <p>Emerging Afrobeats artist Tweehz, who late last year blessed audiences with his boisterous 
                and bombastic single ‘Rastafarian,’ cruises back onto the music scene with utmost irresistible 
                vibes and delicious swagger in his newest single ‘Sapa Loving’.</p>

            <br />
            <p>In a virtuosic show of versatility, he switches out the high energy of his previous single for a 
                more laid-back, groove-oriented track whilst offering a heartfelt meditation on the transactional 
                nature of romantic relationships today. “‘If to say I no go buy your papa benz, you no go follow 
                me go home this December,’” he sings, deftly weaving through his vocal register to craft a 
                narrative of unrequited love and material desire. The verses, delivered in a deeper, more 
                resonant tone, transition to a brighter, higher register in the pre-chorus and chorus, mirroring 
                the emotional complexity of a relationship strained by material expectations.</p>
                <br />

                <p>The song was inspired by an encounter with a girl Tweehz really liked, who asked him to pay to 
                    get her number. Reflecting on the broader context, he adds, “It’s a very transactional world we 
                    live in. People don’t really emotionally invest in genuine connections as often as they used to. 
                    Everywhere don choke.”
                    Produced by Feisty Savage, ‘Sapa Loving’ showcases a different side of Tweehz, both vocally and 
                    sonically. “My A&R hated the song initially,” he admits. “I forced us to continue with it because 
                    I thought it was good enough. We eventually recorded a pre-mix and sent a demo out to A&Rs. 
                    The reaction was positive—they couldn’t tell it was me. That showed a very different part of me, 
                    vocally and maybe sonically, using both my baritone and mixed tenor voice.”</p>
                    <br />
                    
                <p>Tweehz, who recently opened for Zinoleesky at Times Square and has performed alongside superstar acts 
                    like Wande Coal and Ayojay, is also planning a potential school tour in Nigeria, along with the 
                    release of an Afro-Fuji fusion banger later this year and a mini-documentary or storytelling 
                    series.</p>
                    <br />
                    <center><Image src="/images/tweehz.jpg" alt="Sapa Loving Cover Art" className="blogImages" width="300" height="300" /></center>
                    <br />

                <p>‘Sapa Loving’ is now available on all major streaming platforms. 
                    Follow Tweehz on Instagram:  https://www.instagram.com/tweehz/?hl=en
                    Tiktok : https://www.tiktok.com/@tweehz?lang=en
                    Twitter : https://x.com/tweehz for updates on new music, live performances, and more.</p>
                    <br />

                <p>For press inquiries, interviews, or review copies, contact:
                    Daniel Ojo
                    ojodanieloluwadara@gmail.com,tweehzmusic@gmal.com

                    Written by Ezenwa Onugbolu

                    About Tweehz:
                    Chukwudi Udoka, known professionally as Tweehz, is a singer-songwriter and producer from 
                    Eastern Nigeria, raised in Surulere and Egbeda, and currently based in New York. An Afrobeats 
                    artist by definition, but with an eclectic ear for music, Tweehz infuses elements from a host of 
                    other genres including hip hop and jazz. Influenced by Fela, Wizkid, Wande Coal, Michael Jackson, 
                    and The Weeknd, Tweehz began as a rapper on the streets of Egbeda, Lagos, and transitioned into 
                    music production, singing, and songwriting. Known among his peers as the ‘Chorus Machine,’ he is 
                    quickly gaining recognition in the industry, performing alongside big names like youngjohn, 
                    Shallipopi, Seyivibez, Omah lay, Ayojay and Wande Coal.</p>
                    <br />
       </div>

       <center><Link href="/"><button className="generalBtn">GO HOME</button></Link>
       <Link href="/blog"><button className="generalBtn">MORE BLOGS</button></Link></center><br />




        </>
    )
}