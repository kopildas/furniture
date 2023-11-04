import React from 'react'
import {GiWoodenChair} from 'react-icons/gi'
export default function Transaction() {
  return (
    <div className="flex gap-5 w-full">
      <div className="w-16 h-16 rounded-lg text-black bg-fuchsia-400 flex items-center justify-center text-4xl">
      <GiWoodenChair className="text-black"/>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className='font text-lg font-semibold'>Shopping</p>
        <p className='text-'>West Mart Company</p>
      </div>
      <div className='flex items-center justify-center text-lg font-semibold ml-10'>
        <p>1000$</p>
      </div>
    </div>
  )
}
