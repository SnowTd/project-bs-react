import Product from './product';

const Card = ({ title , content , price , detail }) => {
    
    return (
            <>
                <div className="w-72 max-w-xl rounded-md mt-4 bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                    <p className="text-sm font-bold uppercase text-gray-700">{title}</p>
                    <p className="text-sm font-bold">{price} <span className='text-sm'>THB</span></p>
                    </div>
                    <div className="flex items-end justify-end">
                    </div>
                </div>
                <div className=' border-t-2 mt-4'>
                </div>
                </div>
            </>
);
};

export default Card;