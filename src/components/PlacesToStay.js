import Navbar from "./Navbar";
import Footer from "./Footer"
import {FaStar, FaSlidersH} from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import {useState} from "react";
import PlacesData from "./PlacesData";

export default function PlaceToStay() {
      const [data, setData] = useState(PlacesData)
  
      const filterResult = (catItem) =>{
        const result = PlacesData.filter((curDate) =>{
          return curDate.category === catItem;
        });
        setData(result)
      }
      
      
  return(
        <>
          <Navbar/>
        
           <header className="grid lg:grid-cols-9 grid-cols-3 md:grid-cols-5 gap-2 m-5">
        
              <button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("restaurant")}>
                   Restaurant
              </button>
              
              <button  className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("cottage")}>
                   Cottage
              </button>
              
              <button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("castle")}>
                   Castle
              </button>
              
              <button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("fantast city")}>
                  fantast city
              </button>
              
              <button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("beach")}>
                  beach
              </button>
              
              <button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("cabins")}>
                  Cabins
              </button>
              
              <button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("off-grid")}>
                 Off-grid
              </button>
              
              <button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("farm")}>
                  Farm
              </button>
              
              <button className="general  lg:text-xl text-base btn-location w-28 lg:w-32">Location 
                 <FaSlidersH className="inline-block ml-3 lg:ml-2"/>
              </button>
              </header>
              
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-3 px-6 py-5 mb-3">
                {data.map((places) =>{
                const {id, image, name, distance, price, available} = places
                
   
             return (
                  <div id={id} className="flex flex-col items-center justify-center"  style={{borderRadius:"15px", border:"1px solid #D7D7D7", width:"310px", height:"400px" }}>
                    <div className="relative">
                        <img className=""  src={image}  alt={name}  style={{borderRadius:"15px", border:"1px solid #D7D7D7", height:"265px", width:"260px" }}/>
                        
                        <BsFillHeartFill className="absolute top-3 left-56 text-slate-200 text-xl cursor-pointer hover:text-rose-500"/>
                    </div>
                    
                  <div className="flex flex-row">
                    <div>
                        <h3 style={{color:"#434343", fontSize:"12px", lineHeight:"20px", fontWeight:"400", fontStyle:"normal"}}  className="mt-5 font-Red "> {name} </h3>
                        <p style={{color:"#434343", fontSize:"12px", lineHeight:"20px", fontWeight:"400", fontStyle:"normal"}}  className="mt-2 font-Red "> {distance} </p>
                        
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
                           <h3 style={{color:"#434343", fontSize:"12px", lineHeight:"20px"}} className="font-Red text-right mt-5 font-bold">{price} </h3>
                           <p style={{color:"#434343", fontSize:"12px", lineHeight:"20px", fontWeight:"400", fontStyle:"normal"}}  className="font-Red  text-right mt-2">{available} </p>
                        </div>
                    </div>
            </div>
    )
   })}

            </div>
        <Footer/>
 </>
    )
}

