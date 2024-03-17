import { Link } from "react-router-dom"
export default function Content () {
    return (
        <>
            <p id="product" className="flex justify-center mt-96 text-4xl font-bold text-gray-700">PRODUCT</p>
            
            <div className="h-96 bg-rose-300 mt-24 z-[-1]">
                <div className="static bg-white top-0 pb-20 z-auto">
                
                </div>
                <div className="flex justify-around md:m-5 mt-5 ml-32 mr-32 font-Kanit">
                    <Link to="/product"><div class="hover:translate-y-2 transition duration-500 md:p-12 bg-white box-shadow shadow-xl rounded-xl transition duration-150 ease-out hover:ease-in">
                        <div>
                             <p className="uppercase font-bold text-4xl justify-center flex text-gray-700 ">watch</p>    
                            <img className="" width="250px"src="https://img2.pic.in.th/pic/b2e08af9cf6a76671f6f0dc33b085fea.png" alt="" />
                        </div>
                    </div></Link>
                    <Link to="/joint"><div className="hover:translate-y-2 transition duration-500 md:p-12 p-24 bg-white box-shadow shadow-xl rounded-xl transition duration-150 ease-out hover:ease-in">
                        <p className="uppercase font-bold text-4xl justify-center flex text-gray-700 ">JOINT</p>    
                            <img width="250px" src="https://img2.pic.in.th/pic/ADD81D58-C3DE-4834-B2A7-E87F3BDC0CEA.png" alt="" />
                    </div></Link>
                </div>
            </div>
        </>
    )
}