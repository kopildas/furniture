import React from 'react'
import {GiWoodenChair} from 'react-icons/gi'
export default function TopProd() {
  return (
    <div className="flex gap-5 w-full bg-slate-300 p-4 rounded-lg">
      <div className="w-36 h-28 rounded-lg text-black bg-fuchsia-400 flex items-center justify-center text-4xl">
      <GiWoodenChair className="text-black"/>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className='font text-lg font-semibold'>Shopping</p>
        <p className='text-'>West Mart Company st Mart Compan st Mart Companst Mart Companst Mart Companst Mart Compan</p>
        <p className='text text-gray-900'>price 1000</p>
      </div>
      <div className='flex text-lg font-semibold relative justify-end'>
        <p className='absolute'>1000$</p>
      </div>
    </div>
  )
}
