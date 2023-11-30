import React from 'react'


const AppSwiperSld = ({children, ...props}) => {
  return <swiper-slide {...props}> {children} </swiper-slide>;
};

export default AppSwiperSld;