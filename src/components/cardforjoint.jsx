export default function Jointshop ({name,price,img}) {
    return (
        <>


            

            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow shadow-2xl">
                <a href="#" className="flex justify-center">
                    <img class="p-8 rounded-t-lg w-56" src={img} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-white-900">{name}</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-gray-900">{price}</span>
                        <a href="#" class="text-white bg-rose-300 hover:bg-rose-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">รายละเอียด</a>
                    </div>
                </div>
            </div>


        </>
    )
}