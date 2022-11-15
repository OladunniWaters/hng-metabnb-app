
export default function Hero() {

  return (
<>
      <div className="flex lg:flex-row md:flex-col flex-col lg:items-start md:mb-32 mb-0 lg:mb-10 lg:p-10 mt-30">
      
             {/*HERO LEFT*/}
            <div className="grid grid-cols-1 hero-section px-6">
                <h1  className="lg:text-5xl md:text-4xl text-3xl font-Red tracking-wide"> 
                       Rent a  
                    <span 
                    style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold ml-2 mr-2"> 
                          Place 
                     </span> 
                         away from 
                    <span style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold ml-2 mr-2">
                          Home 
                    </span>
                         in the
                    <span style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold ml-2 mr-2"> 
                         Metaverse 
                    </span>
                </h1>
                
                <p className="general font-normal text-2xl lg:leading-9 md: leading-9 leading-8 font-Red lg:mt-10 -mt-20">
                   we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
                </p>
            
                <div className="-mt-20 -mb-24 lg:mb-24 lg:mt-10">
                      <input type="text"
                      placeholder="Search for location"
                      className="input-box px-5 py-3 lg:w-80 md:w-80 w-60 h-14"/>
                      
                      <input type="submit" value="search"
                      className="search-btn text-white px-5 py-3 w-56 mt-3 h-14"/>
                </div>
          </div>
    
              
              {/*HERO RIGHT*/}
              <div  className="items-center justify-center mx-auto h-full hero-img">
                  <img src="../assets/Group 4028.svg" alt="Hero" className="HeroImg"/>
              </div>
    </div>
    
   </>
 )
}