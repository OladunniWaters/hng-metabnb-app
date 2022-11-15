import {ReactComponent as GroupNftLg} from "../assets/Frame 59546.svg"
import GroupNft from "../assets/Frame 59546.svg";
export default function LearnMore() {
  return (
    <> 
        <div style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)"}} className="flex lg:flex-row flex-col justify-center lg:gap-30 text-white lg:p-20 mt-10 pr-10 pl-10">
       
            <div className="flex flex-col items-start lg:justify-start justify-center lg:pr-48 lg:-mt-20">
            
                <h1 className="font-semibold md:text-5xl text-3xl tracking-wide lg:pt-48 pt-20 pb-10 font-Red">Metabnb NFTs</h1>
                
                <p className="text-start font-Red font-normal text-lg leading-9">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive  services.
                </p>
                
                <button className="mt-10 bg-white rounded-lg py-2 px-8 font-Red text-rose-900">Learn more</button>
            </div>
            
            <div className="mt-20 mb-20 mr-5 md:ml-20 lg:-mr-5 lg:mt-5 lg:mb-5">
               <img src={GroupNft} alt="GroupNft" className="lg:hidden" />
               <GroupNftLg className="hidden lg:block w-100" />
            </div>
            
     </div>
    </>
    )
}

