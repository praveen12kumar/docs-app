
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";


const Card = ({data, reference}) => {


    
  return (
    <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{ scale: 1.1 }} 
        dragElastic={0.2} 
        dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
        className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 p-5 text-white overflow-hidden flex-shrink-0">
        <FaRegFileAlt/>
        <p className="text-sm leading-tight mt-5 font-semibold text-zinc-300 font-poppins">{data?.des}</p>
        <div className="w-full footer absolute bottom-0 left-0 ">
            <div className="flex items-center justify-between px-8 py-3 mb-3">
                <h5 className="font-poppins text-sm">{data?.filesize}</h5>
                <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
                    {
                        data?.close ? <IoIosClose size="0.8em" color="#fff"/> : <LuDownload size="0.8em" color="#fff"/>
                    }
                </span>
            </div>
            {
                data?.tag?.isOpen && (
                    <div className={`tag w-full py-4 ${data?.tag?.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} `}>
                        <h3 className="text-sm font-semibold text-center font-poppins">{data?.tag?.tagTitle}</h3>
                    </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card