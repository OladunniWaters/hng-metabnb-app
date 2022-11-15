import InspirationCard from "./InspirationCard";
export default function Inspiration() {
  
  
  return (
    <>
        <div className="p-9">
           <h1 
                className="font-bold lg:text-5xl text-3xl text-center leading-10"
                style={{fontFamily:"Red Rose"}}>
                Inspiration for your next adventure
            </h1>
       </div>
    
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-3 px-6 py-5 mb-3">
             <InspirationCard 
               cardImage="./assets/nft-5.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
             
             <InspirationCard 
               cardImage="./assets/nft-6.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
             
             <InspirationCard 
               cardImage="./assets/nft-7.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
             
             <InspirationCard 
               cardImage="./assets/nft-8.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
             
             <InspirationCard 
               cardImage="./assets/nft-9.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
             
             <InspirationCard 
               cardImage="./assets/nft-10.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
             
             <InspirationCard 
               cardImage="./assets/nft-11.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
             
             <InspirationCard 
               cardImage="./assets/nft-12.png"
               cardName="Desert King"
               distance="2345km away"
               price="1MBT per night"
               available="available for 2weeks stay"
             />
        </div>
    </>
    )
}