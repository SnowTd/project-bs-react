export default function Joint ({Card}) {
    
    return (
        <>
            <div className="container m-24"> 
                <p className="font-bold text-2xl">PRODUCT JOINT</p>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}