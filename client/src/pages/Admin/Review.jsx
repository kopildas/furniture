import React from 'react'
import U_construction from '../../component/U_construction'
import Sidebar from '../../component/Admin_Comp/Sidebar/Sidebar'

export default function Review() {
  return (
    <div className="mt-20 text-black flex">
      <Sidebar className="sticky scroll-m-0 z-50" />
      <div className='flex items-center justify-center w-full'>
      <U_construction/>
      </div>
    </div>
  )
}
