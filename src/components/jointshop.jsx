export default function Joint ({Card, genaral , festival , country}) {
    
    return (
        <>
            <div className=" m-24"> 
                <p className="font-bold text-2xl">GENERAL JOINT</p>
            </div>
            <div className="container mx-auto px-24">
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
            <div className=" m-24"> 
                <p className="font-bold text-2xl">LANDMARKS JOINT</p>
            </div>
            <div className="container mx-auto px-24">
                            <div className="grid grid-cols-4 gap-4">
            {country.map((e) => {
                return (
                    <>
                        <Card {...e}/>
                    </>
                )
            })}
            </div>
            </div>
            <div className=" m-24"> 
                <p className="font-bold text-2xl">FESTIVAL JOINT</p>
            </div>
            <div className="container mx-auto px-24">
                            <div className="grid grid-cols-4 gap-4">
            {festival.map((e) => {
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