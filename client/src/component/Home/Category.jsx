import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import { useNavigate } from 'react-router-dom';


export default function Category() {

  const [{ product, cartShow, user, cartItems, favorite_Items }, dispatch] =
    useStateValue();

    const navigate = useNavigate();

    const generateSlides = [
        {
            src: "https://i.ibb.co/6tc3MWM/comfortable-office-chair.jpg",
            name: "Chair"
        },
        {
            src: "https://i.ibb.co/yhhS7nj/old-wooden-armchair.jpg",
            name: "Sofa"
        },
        {
            src: "https://i.ibb.co/qs3L4TW/mark-farias-fkug-MBh-Vf1c-unsplash.jpg",
            name: "Table"
        },
        {
            src: "https://i.ibb.co/YX67Nxp/erik-mclean-Ij9n-Ighk-I6k-unsplash.jpg",
            name: "Bed"
        },
        {
            src: "https://i.ibb.co/qpJMNf2/chastity-cortijo-o-Ofu-QYni-REA-unsplash.jpg",
            name: "Closet"
        },
        
    ]

    const shop_route = (e) => {
      console.log(e.target.id);
      dispatch({
        type: actionType.SET_SHOP_CATEGORY,
        shop_category: e.target.id,
      });
      navigate("/shop")
    };


  return (
    <div>
      <Splide
        options={{
            perPage: 4,
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
              className="bg-cover bg-center w-64 h-72 flex items-end justify-center rounded-xl"
            >
             <div>
             <button className="rounded-lg px-4 py-2 border-2 backdrop-blur-[3px] border-gray-900 text-gray-950 hover:bg-gray-900 hover:text-gray-100 duration-300 flex items-end justify-end -mt-[105px]"
             id={slide.name}
             onClick={
              shop_route
             }>
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
