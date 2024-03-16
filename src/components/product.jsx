import { useContext , useRef} from "react";
import DataContext from "../data/dataConText";
import { Link } from "react-router-dom";

export default function Product ({Card , image , allProduct,}) { 
    const {tt , oc} = useContext(DataContext)

    return (
    <div className=" font-Kanit">
        <p className="text-6xl flex justify-center mt-3"><span className="font-zemit mr-12 flex items-center">ZEMIT MORE AND MORE</span></p>
        <div className="">
            <div className="ml-12 md:sticky w-64 md:left-1/4 md:top-1/2 mt-4 mb-4 z-[-1]">
                <img id:original className="rounded-xl w-72 w-auto border z-[-1]" src={image} alt="" />
                
            </div>
            <div className=" mr-72 flex justify-end ">
                <div className="font-bold font-2xl">
                        {allProduct.map((prod)=> {
                            console.log(prod)
                            return (
                                <>
                                    <div className="">
                                        <div className="">
                                                <div className=" ">
                                                    <p className="font-extrabold text-gray-800 mt-8">{prod.header}</p>
                                                {prod.name.map((e) => {
                                                    console.log(e.img)
                                                    return (
                                                        <>
                                                            <div className='mt-4 rounded-2xl border shadow snap-y'>
                                                                <label className="cursor-pointer">
                                                                    <input type="radio" className="peer sr-only" name={e.header} value={e.price} onChange={oc} img={e.img} id={e.id} key={e.id} title={e.title}/>
                                                                    <Card {...e} />
                                                                </label>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                                </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <p className="text-3xl mt-4"> ราคา  : <span>{tt}</span> </p>
                        <Link to="/product/confirm"><button className="ml-2 mt-6 p-4 px-24 bg-blue-500 text-center rounded-xl text-white hover:bg-blue-400 transition duration-500">ยืนยันรายการ</button></Link>
                </div>
                
            </div>
        </div>
    </div>
    )
}