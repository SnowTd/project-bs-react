import { Link } from "react-router-dom"
export default function Content () {
    return (
        <>
            <p id="product" className="flex justify-center mt-96 text-4xl font-bold text-gray-700">PRODUCT</p>
            
            <div className="h-96 bg-rose-300 mt-24 z-[-1]">
                <div className="static bg-white top-0 pb-20 z-auto">
                
                </div>
                <div className="flex justify-around m-5 mt-5 ml-32 mr-32 ">
                    <Link to="/product"><div class="hover:translate-y-2 transition duration-500 p-36 bg-white rounded-xl transition duration-150 ease-out hover:ease-in">
                        <p>watch</p>
                    </div></Link>
                    <Link to="/joint"><div className="hover:translate-y-2 transition duration-500 p-36 bg-white rounded-xl transition duration-150 ease-out hover:ease-in">
                        <p>joint</p>
                    </div></Link>
                </div>
            </div>
        </>
    )
}