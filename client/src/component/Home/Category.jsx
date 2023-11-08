import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


export default function Category() {

    const generateSlides = [
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg"
        },
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg"
        },
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg"
        },
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg"
        },
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg"
        },
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg"
        },
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg"
        },
    ]


  return (
    <div>
      <Splide
        options={{
            perPage: 5,
            height: '16rem',
            rewind: true,
            gap: '2rem',
           
            breakpoints: {
              768: {
                perPage: 3, // Show 3 slides on screens wider than 768px
              },
              640: {
                perPage: 1, // Show 2 slides on screens wider than 640px
              },
            },
          }}
        aria-labelledby="basic-example-heading"
        onMoved={ ( splide, newIndex ) => {
          // eslint-disable-next-line
          console.log( 'moved', newIndex );

          // eslint-disable-next-line
          console.log( 'length', splide.length );
        } }
      >
        { generateSlides.map( slide => (
          <SplideSlide key={ slide.src } className='flex'>
           <div
              style={{
                backgroundImage: `url(${slide.src})`,
              }}
              className="bg-cover bg-center w-64 h-72 flex items-end justify-center"
            >
             <div>
             <button className="rounded-lg px-4 py-2 border-2 backdrop-blur-[3px] border-gray-900 text-gray-950 hover:bg-gray-900 hover:text-gray-100 duration-300 flex items-end justify-end -mt-[105px]">
              Explore More
            </button>
             </div>
            </div>
          </SplideSlide>
        ) ) }
        
      </Splide>
      
    </div>
  )
}
