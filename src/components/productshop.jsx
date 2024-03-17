export default function ProductShop ({Card}) {
    
    return (
        <>
            <div className=" m-24"> 
                <p className="font-bold text-2xl">WATCH</p>
            </div>
            <div className="container mx-auto px-24">
                            <div className="grid md:grid-cols-4 md:gap-4 gird-cols-2">
                        <Card name="WATCH COLLECTION" img="" price="19,999" choose="BUY"/>
                        <Card name="WATCH COLLECTION" img="" price="19,999" choose="CUSTOM" path="/product/custom"/>
                        
            </div>
            </div>
        </>

    )
}