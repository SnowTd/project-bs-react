import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hcontent () {
    const [isTyping, setIsTyping] = useState("")
    const [isTyping1, setIsTyping1] = useState("")
    const [typingStatus,setTypingStatus] = useState("sss")
    // const [status,setStatus] = useState("Manage your life")
    const status = ["Manage your life",5000,]
    const status1 = ["Costomize your watch",5000]
    const ppp = "dadadadada"


    return (
        <div className="">
            <div className="flex md:justify-center justify-center w-auto md:py-12">
                <img className="flex mt-8 hover:translate-y-2 transition duration-500" src="/logofull.png" alt="" />
            </div>
            <div className="flex justify-center mt-12">
                <div className="text-cyan-950 md:text-4xl text-xl font-bold text-center font-Kanit uppercase flex justify-around">
                    <TypeAnimation
                    className="md:pr-24"
                    sequence={[
                    'Manage your Time',
                    750,
                    ]}
                    wrapper="span"
                    speed={70}
                    cursor={false}
                    repeat={false}/>
                    <TypeAnimation
                    className="md:pr-24"
                    sequence={[
                    750,'Manage your life ',750
                    ]}
                    wrapper="span"
                    speed={70}
                    cursor={false}
                    repeat={false}/>
                    <TypeAnimation
                    className=""
                    sequence={[1500,"Customize your watch"
                    ]}
                    wrapper="span"
                    speed={70}
                    cursor={false}
                    repeat={false}/>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}