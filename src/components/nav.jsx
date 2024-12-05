import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Nav() {
    const [sticky,setSticky] = useState(false)
    const [isOpen, setIsOpen] = useState(false); // Initial state: closed
    const Menu = (name) => {
      setIsOpen(!isOpen); // Toggle state on click
        let list = document.querySelector('ul');
    
        if (isOpen) {
        list.classList.add('top-[70px]');
        list.classList.add('opacity-100');
        } else {
        list.classList.remove('top-[70px]');
        list.classList.remove('opacity-100');
        }
    };

    const scrollHeader = () => {
        if (window.scrollY >= 15) {
            setSticky(true)
        } else {
            setSticky(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll',scrollHeader)
        return ()=>{
                    window.addEventListener('scroll',scrollHeader)
        }
    },[])

    return (
        <> 
            <div className="sticky">
                <div className=" font-Kanit">
                    <div className="flex justify-center py-1 bg-rose-300">
                        <img className="w-8" src="/logo.png" alt="" />
                    </div>

                    <div className={sticky ? "fixed w-[100%] bg-white top-0 z-auto" : "bg-white"}>
                        <div className="p-4 px-20 shadow md:flex md:items-center justify-between ">
                            
                            <Link to='/'><div className=" font-bold text-black  hidden md:flex flex-1 w-1/2 ">
                            <img src="/logofull.png" alt="" className="w-6 h-6" />
                            <p className="pl-1">ZEMIT</p>
                                
                            </div></Link>
                            <Link to="/">
                                <div className="flex justify-between md:hidden">
                                    <div className=" md:px-10 ">
                                        <img src="/logofull.png" alt="" className="w-8 h-8" />
                                    </div>
                                    <span className="text-3xl cursor-pointer md:hidden block">
                                        <ion-icon name="menu" onClick={() => Menu("menu")}></ion-icon>
                                    </span>
                                </div>
                            </Link>
                            <ul className="text-black md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white md:bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-100">
                                <li className="mx-4 md:my-0 my-4 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-500"><Link to="/product"> <ion-icon name="watch-outline"></ion-icon>WATCH</Link> </li>
                                <li className="mx-4 md:my-0 my-4 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-500"><Link to="/joint"> <ion-icon name="git-commit-outline"></ion-icon>JOINT</Link> </li>
                                <li className="mx-4 md:my-0 my-4 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-500"><Link to="/community"> <ion-icon name="chatbubbles-outline"></ion-icon> ZEMIT COMMUNITY</Link> </li>
                                <li className="mx-4 my-4 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-500"><Link to="/contact"><ion-icon name="chatbubble-ellipses-outline"></ion-icon> CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
