import { useRef, useEffect } from 'react';



export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);


  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="4"
      navigation="true"
      className='suaiper'
    >
      {children}


    </swiper-container>
  );
};