import React from "react";
import {IoClose} from 'react-icons/io5';
import {BsChevronRight} from "react-icons/bs";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.54%)"}} 
        className="font-Red text-white active:bg-pink-600 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-lg"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Connect wallet
      </button>
        
        {/*showModal*/}
          {showModal ? ( 
            <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto lg:max-w-md max-w-sm">
            
            {/*content*/} 
            
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> 
            {/*header*/} 
            
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"> 
            
            <h3 className="text-2xl" style={{fontFamily:"Red Rose", color:"#333333"}}> 
            Connect Wallet
            </h3>
            <button className="p-1 ml-auto text-md leading-none font-semibold" 
            onClick={() => setShowModal(false)}> 
            <span className="h-6 w-6 text-2xl block outline-none focus:outline-none" style={{fontFamily:"Red Rose", color:"#333333"}}> 
            <IoClose/>
            </span>
            </button>
            </div> 
            {/*body*/} 
            
            <div className="relative p-6 flex-auto"> 
                  <p className="my-4 font-normal text-xl leading-5"
                       style={{color:"#333333"}}>
                    Choose your preffered wallet:
                  </p>
                  
                 <div className="flex items-start justify-around p-5 modal-box mb-3"> 
                 <div className="flex flex-row items-start justify-between">
                 <img className="w-10" src="../assets/image 66.png"alt="metamask"/>
                 <p className="my-2 text-black text-lg leading-6 font-semibold ml-5" style={{fontFamily:"sora"}}>Metamask</p>
                 </div>
                 
                 <div className="flex flex-row items-start justify-between p-5">
                 <BsChevronRight/>
                 </div>
                  </div>
              
                 <div className="flex items-start justify-around p-5 modal-box"> 
                 <div className="flex flex-row items-start justify-between">
                 <img className="w-8" src="../assets/image 69.png" alt="WalletConnect"/>
                 <p className="my-2 text-black text-lg leading-6 font-semibold ml-5">WalletConnect</p>
                 </div>
                 
                 <div className="flex flex-row items-start justify-between p-5">
                 <BsChevronRight/>
                 </div>
                  </div>
         </div> 
            </div>
            </div>
            </div> 
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
            ) : null} 
            </>
            )
}