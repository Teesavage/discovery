import Image from "next/image";

export default function HomeCards(props){
    return(
        <>
        <div className="homeCard">
          <Image src={props.cardImage} alt={props.cardImageAlt} className="homeCardImg" width="300" height="300" />
          <h1>{props.cardTitle}</h1>
          <div className="homeCardGrid">
            <p>{props.cardTrack}</p><p>{props.date}</p>
          </div>
          <div>
          <p>{props.description}</p>
          </div>
          
        </div>
      
        
       
        </>
    )
}