import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from "swiper";
import UserDeatils from './constant/UserDeatils';
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";

function App() {

  return (
    <div className="App">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {UserDeatils.map((item) => {
          return (
            <SwiperSlide>
              <div className='user-slider'>
                <h2 className='user-Name'>{item.userName}</h2>
                <p className='user-Post-1'>{item.userPost}</p>
                <p className='user-Post-2'>{item.userPost2}</p>
                <p className='user-Email'>Email: <a href="mailto:`${item.userEmail}`">{item.userEmail}</a></p>
                <p className='user-PhoneNum'>Phone Number: {item.userPhoneNumber}</p>
                <img src="./arrow.svg" alt="arrow-svg" className='arrow-img' />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default App
