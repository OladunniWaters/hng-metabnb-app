import {FaFacebookF,FaInstagram, FaTwitter,FaRegCopyright} from 'react-icons/fa';
export default function  Footer() {

  
  return(
    <footer style={{background:"#1D1D1E"}} className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-white gap-4 px-7 py-5 pt-20 pb-20">
    
    <div 
    className="flex flex-col items-start justify-center mx-auto">
    
    <img src={require("../assets/Group-3.png")} 
    alt="footer-logo" 
    className="w-56 h-10"/>
  
    <div className="grid grid-cols-3 gap-5 mt-12">
    <FaFacebookF
    style={{display:"inline-block"}}
    className="text-white-700"/>
    
    <FaInstagram
    style={{display:"inline-block"}} 
    className="text-white-700 me-20"/>
    
    <FaTwitter
    style={{display:"inline-block"}} 
    className="text-white-700 me-20"/>
     </div>
  
  <p className="mt-7 text" style={{color:"white", fontSize:14}}>
  <FaRegCopyright style={{display:"inline-block"}} className="me-3"/> 2022 Metabnb
  </p>
  
    </div>
    
    <article className="mt-7 flex flex-col items-start justify-center mx-auto">
    <ul>
   <li>
    <a href="#pablo" className="footer-title">Community</a>
   </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">NFT</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Tokens</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Landlords</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Discord</a>
    </li>
    </ul>
    </article>
    
   <article className="pt-7 flex flex-col items-center justify-center mx-auto">
    <ul>   
    <li>
    <a href="#pablo" className="footer-title">Places</a>
   </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Castle</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Farms</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Beach</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Learn More</a>
    </li>
    </ul>
    </article>
    
    <article className="pt-7 flex flex-col items-center justify-center mx-auto">
   <ul>
  <li>
    <a href="#pablo" className="footer-title">About Us</a>
   </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Road map</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Creators</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Career</a>
    </li>
    <li>
    <a href="#pablo" className="footer-text mb-5">Contact Us</a>
    </li>
    </ul>
    </article>
    
    </footer>
    )
}

