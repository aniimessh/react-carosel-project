import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";
import UserDeatils from './constant/UserDeatils';

function App() {

  return (
    <div className="App">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
      {UserDeatils.map((item)=>{
        return (
          <SwiperSlide className='slider'>
            <div className='user-slider'>
            <h2 className='user-Name'>{item.userName}</h2>
            <p className='user-Post-1'>{item.userPost}</p>
            <p className='user-Post-2'>{item.userPost2}</p>
            <p className='user-Email'>Email: <a href="mailto:bhupesh.dewangan@opju.ac.in">{item.userEmail}</a></p>
            <p className='user-PhoneNum'>Phone Number: {item.userPhoneNumber}</p>
            <img src="./arrow.svg" alt="arrow-svg" className='arrow-img'/>
            </div>
            </SwiperSlide>
        )
      })}
    </Swiper>
    </div>
  )
}

export default App
