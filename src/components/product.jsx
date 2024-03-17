import { useContext , useRef, useState} from "react";
import DataContext from "../data/dataConText";
import { Link } from "react-router-dom";

export default function Product ({Card , image , allProduct,setimg}) { 
    const {tt , oc ,} = useContext(DataContext)

    return (
    <div className=" font-Kanit">
        <p className="text-6xl flex justify-center mt-3"><span className="font-zemit mr-12 flex items-center">ZEMIT MORE AND MORE</span></p>
        <div className="">
            <div className="ml-12 md:sticky w-96 md:left-1/4 md:top-1/3 mt-4 mb-4 z-[-1] hover:scale-125">
                <img id:original className="rounded-xl w-96 w-auto border z-[-1] " src={image} alt="" />
                
            </div>
            <div className=" md:mr-72 flex justify-end ">
                <div className="font-bold font-2xl">
                        {allProduct.map((prod)=> {
                            return (
                                <>
                                    <div className="">
                                        <div className="">
                                                <div className=" ">
                                                    <p className="font-extrabold text-gray-800 mt-8">{prod.header}</p>
                                                {prod.name.map((e) => {
                                                    return (
                                                        <>
                                                            <div className='mt-4 rounded-2xl border shadow snap-y'>
                                                                <label className="cursor-pointer">
                                                                    <input type="radio" className="peer sr-only" name={e.header} value={e.price} onChange={oc} alt={e.img} img={image}  id={e.id} key={e.id} title={e.title}/>
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
                        <Link to="/confirm"><button className="ml-2 mt-6 p-4 px-24 bg-rose-300 text-center rounded-xl text-white hover:bg-rose-200 transition duration-500">ยืนยันรายการ</button></Link>
                </div>
                
            </div>
        </div>
    </div>
    )
}