
export default function Hero() {

  return (
<>
    <div className="flex lg:flex-row md:flex-col flex-col lg:items-start md:mb-32 mb-0 lg:mb-10">
      
          {/*HERO LEFT*/}
          <div className="grid grid-cols-1 gap-5 py-5 hero-section px-12">
          <h1 
         className="general font-normal lg:text-6xl md:text-6xl text-3xl tracking-tight leading-10 font-Red" style={{}}> 
          Rent a  <span 
          style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold"> 
           Place </span> away from 
          <span style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold"> Home 
          </span> in the
          <span style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold"> Metaverse 
          </span>
          </h1>
          
          <p
          className="general text-2xl lg:leading-9 md: leading-9 leading-8 font-Red mt-10">
          we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
          </p>
          
          <div>
                <input 
                      className="input-box px-5 py-3 w-80 w-80 w-60 h-14 font-Red"
                      type="text"
                      placeholder="Search for location"
                />
                
                <input 
                      type="submit" 
                      value="search"
                      className="search-btn text-white px-5 py-3 w-56 mt-3 h-14 font-Red"
                />
          </div>
      </div>
          
          
          {/*HERO RIGHT*/}
          <div  className="items-center justify-center mx-auto h-full hero-img lg:mt-20 md:mt-48">
              <img src="../assets/Group 4028.svg" alt="Hero" className="HeroImg"/>
          </div>
    </div>
    
   </>
 )
}