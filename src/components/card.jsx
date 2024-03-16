import Product from './product';

const Card = ({ title , content , price , detail }) => {
    
    return (
            <>
                <div className="w-72 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                    <p className="text-sm font-bold uppercase text-gray-700">{title}</p>
                    </div>
                    <div className="flex items-end justify-between">
                    <p className='font-semi-bold'>{content}</p>
                    <p className="text-sm font-bold">{price}</p>
                    </div>
                </div>
                <div className=' border-t-2 mt-2'>
                    <p className=' font-light'>{detail}</p>
                </div>
                </div>
            </>
);
};

export default Card;