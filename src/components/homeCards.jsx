import Image from "next/image";
import * as motion from "framer-motion/client";

export default function HomeCards(props){
    return(
        <>
        <motion.div 
        className="homeCard"
        whileHover={{scale: 1.05}}
        initial={{ y: 180 , opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
          <Image src={props.cardImage} alt={props.cardImageAlt} className="homeCardImg" width="300" height="300" />
          <h1>{props.cardTitle}</h1>
          <div className="homeCardGrid">
            <p>{props.cardTrack}</p><p>{props.date}</p>
          </div>
          <div>
          <p>{props.description}</p>
          </div>
          
        </motion.div>
      
        
       
        </>
    )
}