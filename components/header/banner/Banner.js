//front-end
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//back-end

function Banner () {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              loading='lazy'
              src='https://sportshub.cbsistatic.com/i/r/2021/11/23/fe779ca1-e558-4f62-bb4e-6e19b02ad266/thumbnail/770x433/563e66f62edc649a27838577365eb59a/untitled-design-56.png'
              alt=''
              className='w-[720] md:w-full h-[430px] md:h-[820px] opacity-75'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='https://images.seattletimes.com/wp-content/uploads/2021/11/102451.jpg?d=1020x941'
              alt=''
              className='w-[720] md:w-full h-[430px] md:h-[820px] opacity-75'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='https://sportshub.cbsistatic.com/i/r/2021/11/22/48b18d6f-e29e-47b5-8413-7f9c8e5b3b87/thumbnail/770x433/a44d48afc6d8927d12cb56d13ba622ad/curry-mvp.jpg'
              alt=''
              className='w-[720] md:w-full h-[430px] md:h-[820px] opacity-75'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTg1NDQ1MzU3NzE3NTYyNjU5/usatsi_9746113.webp'
              alt=''
              className='w-[720] md:w-full h-[430px] md:h-[820px] opacity-75'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='https://cdn.footballoutsiders.net/files/styles/article_thumbnail/public/coverphotos/HuntleyTyl20_3.jpg'
              alt=''
              className='w-[720] md:w-full h-[430px] md:h-[820px] opacity-75'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='https://static01.nyt.com/images/2020/08/24/sports/24mlb-kepner-1/merlin_176084667_69b1099b-0b7e-41ce-bfdf-e407899f10dc-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
              alt=''
              className='w-[720] md:w-full h-[430px] md:h-[820px] opacity-75'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-superJumbo.jpg'
              alt=''
              className='w-[720] md:w-full h-[430px] md:h-[820px] opacity-75'
            />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Banner
