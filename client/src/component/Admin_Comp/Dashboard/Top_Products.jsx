import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../context/StateProvider';
import Loader from '../../Loader';

export default function Top_Products() {

    const [{ product, user,updateProd }, dispatch] = useStateValue();
  console.log(product);
  const [data, setData] = useState(product ? product.slice(0, 4) : []);


  const updateDATA = () => {
    setData(product ? product.slice(0, 4) : []);
  };

  useEffect(() => {
    updateDATA()
  }, [product])

console.log(data)
if(!data){
    return (
        <>
            <div className='w-96 h-96 bg-fuchsia-800'>
                <Loader/>
            </div>
        </>
    )
}
else{
  return (
    <>
    {data && data.map((item) => (
        <div
        key={item?._id}
         className="flex gap-10 w-full bg-slate-50 p-4 rounded-lg">
      <div className="w-36 h-28 object-cover rounded-lg text-black bg-fuchsia-400 flex items-center justify-center text-4xl">
      {/* <GiWoodenChair className="text-black"/> */}
      <img src={item.image} alt="" className='ob obj w-36 h-full rounded-lg' />
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <p className='font text-lg font-semibold'>{item.item_name}</p>
        <p className='text-overflow-hidden max-h-[50px] overflow-hidden'>{item.short_descrip}</p>
        <p className='text text-gray-700 font-semibold'>Purchased {item.purchasing_number}</p>
      </div>
      <div className='flex text-lg font-semibold relative justify-end'>
        <p className='absolute'>{item.price}$</p>
      </div>
    </div>
    ))
        
    }  
    </>
  )
}
}