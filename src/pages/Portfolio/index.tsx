import * as S from './styled'
import { project } from './project'
import Title from '../../components/Title'
import BlockPort from '../../components/BlockPort'
import IconHand from '../../assets/check-portfolio.svg'
import BigCircle from '../../assets/big-circle-icon.svg'
import SmallCircle from '../../assets/small-circle-icon.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Portfolio() {
  return (
    <S.Container>
      <S.BigCircle src={BigCircle} />
      <S.SmallCircle src={SmallCircle} />
      <Title title='Portfolio' icon={IconHand} />

      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}  
        modules={[Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        {project.map((item, index) => (
          <SwiperSlide key={index}>
            <BlockPort
              image={item.image}
              description={item.description}
              onClick={item.onClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  )
}
