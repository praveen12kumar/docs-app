import { useRef } from "react";
import Card from "./Card"


const Foreground = () => {
    const ref = useRef(null);

    const data = [
        {
        des:"It is a long established fact that a reader will be distracted by the readable content of a page",
        filesize:"0.9mb",
        close:true,
        tag:{
            isOpen:true,
            tagTitle:"Download Now",
            tagColor:"green"
            }
        },
        {
            des:"It is a long established fact that a reader will be distracted by the readable content of a page",
            filesize:"0.9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now",
                tagColor:"blue"
                }
            },
            {
                des:"It is a long established fact that a reader will be distracted by the readable content of a page",
                filesize:"0.9mb",
                close:true,
                tag:{
                    isOpen:true,
                    tagTitle:"Upload",
                    tagColor:"green"
                    }
                },
];
  return (
    <div ref={ref} className="fixed z-[3] p-5 top-0 left-0 w-full h-full flex gap-10 flex-wrap ">
        {
            data.map((item, index)=>(
                <Card key={index} data={item} reference={ref} />
            ))
        }
    </div>
  )
}

export default Foreground