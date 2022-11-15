import { FaStar } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
export default function InspirationCard(props) {
  
  return (
    <>
       <div className="flex flex-col items-center justify-center  mx-auto"  style={{borderRadius:"15px", border:"1px solid #D7D7D7", width:"310px", height:"400px" }}>
            <div className="relative">
                <img className=""  src={props.cardImage}  alt={props.cardName}  style={{borderRadius:"15px", border:"1px solid #D7D7D7", height:"265px", width:"260px" }}/>
                
                <BsFillHeartFill className="absolute top-3 left-56 text-slate-200 text-xl cursor-pointer hover:text-rose-500"/>
            </div>
            
          <div className="flex flex-row">
            <div>
                <h3 style={{color:"#434343", fontSize:"12px", lineHeight:"20px", fontWeight:"400", fontStyle:"normal"}}  className="mt-5 font-Red "> {props.cardName} </h3>
                <p style={{color:"#434343", fontSize:"12px", lineHeight:"20px", fontWeight:"400", fontStyle:"normal"}}  className="mt-2 font-Red "> {props.distance} </p>
                
                <div className="">
                        <FaStar
                        style={{color:"#a02279"}} className="inline mr-2 mt-2 "
                        />
                        <FaStar
                        style={{color:"#a02279"}} className="inline mr-2 mt-2"
                        />
                        <FaStar
                        style={{color:"#a02279"}} className="inline mr-2 mt-2" />
                        <FaStar
                        style={{color:"#a02279"}}className="inline mr-2 mt-2"/>
                        <FaStar
                        style={{color:"#a02279"}} className="inline mt-2"/>
                 </div>
            </div>
            
                <div>
                   <h3 style={{color:"#434343", fontSize:"12px", lineHeight:"20px"}} className="font-Red text-right mt-5 font-bold">{props.price} </h3>
                   <p style={{color:"#434343", fontSize:"12px", lineHeight:"20px", fontWeight:"400", fontStyle:"normal"}}  className="font-Red  text-right mt-2">{props.available} </p>
                </div>
            </div>
    </div>
    </>
    )
}