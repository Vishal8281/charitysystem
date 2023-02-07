import React from "react"
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter} from 'react-icons/ti';

const Footer =()=>{
  const pascSocials = [
    {
      icon: TiSocialFacebook,
      text: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      icon: TiSocialInstagram,
      text: "instagram",
      link: "https://www.instagram.com",
    },
    {
      icon: TiSocialTwitter,
      text: "twitter",
      link: "https://www.twitter.com",
    },
    {
      icon: TiSocialLinkedin,
      text: "linkdin",
      link: "https://www.linkdin.com",
    },
  ]
    return(
      <div className=" gradient-bg-footer">
    
      <div className={`grid grid-cols-2 gap-y-4 `}>
        {pascSocials.map(social => (
          <a 
            href={social.link}
            target="_blank"
            key={social.text}
            rel="noreferrer"
            className={`flex items-center mt-5`}
          >
            <span className={` ml-20 rounded text-2xl  hover:bg-blue-700 mr-2`} style={{fontSize:"2em"}}><social.icon  color="#fff"/></span>
            <p
              className="text-xl text-white"
            >
              {social.text}
            </p>
          </a>
        ))}
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5">
        
      </div>
    </div>
    );
}

export default Footer ;