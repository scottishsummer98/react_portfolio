import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived for only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.',
  },
  {
    avatar: AVTR2,
    name: 'Jon Blake',
    review:
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived for only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.',
  },
  {
    avatar: AVTR3,
    name: 'Miles Morales',
    review:
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived for only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.',
  },
  {
    avatar: AVTR4,
    name: 'Saima Hadid',
    review:
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived for only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.',
  },
]

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="ClientPicture" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial
