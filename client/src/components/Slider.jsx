// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
// import { PropTypes } from 'prop-types';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AttentionSeeker } from "react-awesome-reveal";
import SlideComponents from './SlideComponents';
import bgimg1 from '../assets/images/carousel1.jpg';
import bgimg2 from '../assets/images/carousel2.jpg';
import bgimg3 from '../assets/images/carousel3.jpg';



const Slider = () => {
    // const Slider = ({ showSliders }) => {


    // console.log('southeastAsia', showSliders)

    const [typeEffect] = useTypewriter({
        words: ['Some Awesome Skilled People!', 'New Work!', 'New Talents!'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })


    return (
        <>
            <AttentionSeeker effect='flash' >
                <h1 className='text-3xl font-bold text-center my-10 uppercase'>
                    You can find{' '}
                    <span className='text-rose-500'>{typeEffect}</span>

                    <span className=''>
                        <Cursor cursorStyle='🖋️' cursorBlinking={false} />
                    </span>

                </h1>
            </AttentionSeeker>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                // slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[FreeMode, Autoplay, Pagination, Navigation]}
                loop={true}
                className="mySwiper"
            >

                {/* {
                    showSliders.map(showSlider => {
                        
                        return <SwiperSlide
                            key={showSlider._idx}
                            style={{
                                'position': 'relative',

                            }}
                        >
                           <img className='h-96 w-full' src={showSlider.photo} alt="" />
                            <div className='absolute bottom-4 right-4 p-6 text-primary font-serif text-right'>
                                <div className="text-3xl font-bold">
                                    {showSlider.country}
                                </div>
                                <div className="text-xl font-semibold">
                                    {showSlider.spotName}
                                </div>
                                <div className="text-base font-semibold" >
                                    <p>
                                        {showSlider.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                } */}
                <SwiperSlide  >
                    <SlideComponents 
                    image={bgimg1} 
                    text='Get your Web Development projects done skillfully!'/>
                </SwiperSlide>
                <SwiperSlide  >
                    <SlideComponents 
                    image={bgimg2}
                    text='Get your Graphics Design projects done skillfully!'/>
                </SwiperSlide>
                <SwiperSlide  >
                    <SlideComponents 
                    image={bgimg3}
                    text='Get your Digital marketing up and running!'/>
                </SwiperSlide>


            </Swiper>

        </>
    );
};

// Slider.propTypes = {
//     showSliders: PropTypes.array,
// }

export default Slider;