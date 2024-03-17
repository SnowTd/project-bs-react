export default function CardProduct ({img , name , price , choose , path}) {
    return (
        <>
            <div class="w-full bg-whitw border w-72 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-auto md:p-8 p-2 rounded-t-lg" src={img} alt="product image" />
                </a>
                <div class="md:px-5 md:pb-5">
                    <a href="#">
                        <h5 class="md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <div class="flex items-center md:mt-2.5 md:mb-5">
                        <div class="flex items-center ">

                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="md:text-3xl font-bold text-gray-900 dark:text-white">{price} <span className="text-sm">THB</span> </span>
                        <a href={path} class="text-white py-4 px-8 m-3 bg-rose-300 hover:bg-rose-200 font-medium rounded-lg text-sm md:px-5 md:py-2.5 text-center">{choose}</a>
                    </div>
                </div>
            </div>

        </>
    )
}