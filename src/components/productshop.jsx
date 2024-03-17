export default function ProductShop ({Card}) {
    
    return (
        <>
            <div className=" m-24"> 
                <p className="font-bold text-2xl">WATCH</p>
            </div>
            <div className="container mx-auto px-24">
                            <div className="grid md:grid-cols-4 md:gap-4 gird-cols-2">
                        <Card name="WATCH COLLECTION" img="https://img2.pic.in.th/pic/S__2277571.jpeg" price="23,560" choose="BUY"/>
                        <Card name="WATCH COLLECTION" img="https://img5.pic.in.th/file/secure-sv1/S__2277572.jpeg" price="xxx" choose="CUSTOM" path="/custom"/>
                        
            </div>
            </div>
        </>

    )
}