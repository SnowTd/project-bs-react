export default function Joint ({Card, genaral}) {
    
    return (
        <>
            <div className="container m-24"> 
                <p className="font-bold text-2xl">GENERAL JOINT</p>
            </div>
            <div className="container mx-auto">
                            <div className="grid grid-cols-4 gap-4">
            {genaral.map((e) => {
                return (
                    <>
                        <Card {...e}/>
                    </>
                )
            })}
            </div>
                        </div>
                        <div className="container m-24"> 
                <p className="font-bold text-2xl">COUNTRY JOINT</p>
            </div>
            <div className="container mx-auto">
                            <div className="grid grid-cols-4 gap-4">
            {genaral.map((e) => {
                return (
                    <>
                        <Card {...e}/>
                    </>
                )
            })}
            </div>
                        </div>
                        <div className="container m-24"> 
                <p className="font-bold text-2xl">FESTIVAL JOINT</p>
            </div>
            <div className="container mx-auto">
                            <div className="grid grid-cols-4 gap-4">
            {genaral.map((e) => {
                return (
                    <>
                        <Card {...e}/>
                    </>
                )
            })}
            </div>
                        </div>
            
        </>

    )
}