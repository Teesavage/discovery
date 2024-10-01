import Image from "next/image";
import Link from "next/link";

export default function BlogPosts(props) {
    const bannerImg = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        width: "100%",
        height: "auto",
        position: "relative",
    }
    
    return(
        <>
        <section>
            <div style={bannerImg}>
                <Image src={props.bannerImg} alt="Banner" className="blogBannerImg" width="800" height="1000" />  
            </div>
        </section>

      <section id="blogPostCard">

      <div>
        <span>{props.blogTags}</span>
        <h1>{props.blogTitle}</h1>
        <span>{props.blogDate}</span><br />
      </div>
        
      </section>
    
    
    </>

    )
}