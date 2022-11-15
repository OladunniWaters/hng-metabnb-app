export default function Brands() {
  return (
         <div className="flex flex-row justify-between px-10 py-4 lg:mt-24 lg:mb-8 lg:py-4 lg:px-36 "
                    style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)"}}>
                <div>
                    <img className="w-24 md:w-36 lg:w-64" src={require("../assets/Group-5.png")} alt="MbToken"/>
                </div>
                
                <div>
                    <img className="w-24 md:w-36  lg:w-64" src={require("../assets/Group-4.png")} alt="Metamask"/>
                </div>
                
                <div>
                    <img className="w-24 md:w-36 lg:w-64" src={require("../assets/Group-2.png")} alt="OpenSea"/>
                </div>
         </div>
 )
}