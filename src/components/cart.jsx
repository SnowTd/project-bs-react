export default function Cart ({cart, total}) {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-1/2 font-Kanit">
                    <div className="mt-4 border-b-2">
                        <div>
                            <p className="font-bold md:text-4xl flex justify-center">CART</p>
                        </div>
                        <div className="flex justify-center">
                        <img className="w-56 " src="https://cdn.discordapp.com/attachments/1152548462727020626/1217559034308198440/Asset_2logosym.png?ex=66047736&is=65f20236&hm=a1b898194505bb0b7ec6a9de15faa175a7202be7c42957c2dad677f66f364630&" alt="" />
                        </div>
                        <div className="flex md:mt-4 md:pl-4 justify-between md:mx-24 text-2xl">
                            <p>รายการ CUSTOM</p>                                    
                            <p>ราคา</p>                                    
                        </div>
                        {cart.map((e) => {
                            return (
                            <div className="flex justify-between md:mx-28 md:mb-1">
                            <p className="md:pl-4">{e.name}</p>
                            <p className="">{e.price}</p>
                        </div>)
                        })}
                        
                    </div>
                    <div className="flex justify-end">
                        <div className="flex"> 
                            <div className="flex justify-between mt-8">
                                <p className="md:px-24"> รวมยอดทั้งหมด </p>
                                <pc className="md:px-24 px-4"> {total} </pc>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end md:mr-28 mt-8">
                        <button className="bg-rose-500 py-2  hover:bg-rose-300 px-24 rounded-xl text-white font">ยืนยัน</button>
                    </div>
                    </div>
                </div>
        </>
)
}