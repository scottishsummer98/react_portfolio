import React from 'react'
import './Projects.css'
// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
//import images
import ims1 from '../../assets/ims1.jpg'
import ims2 from '../../assets/ims2.jpg'
import ims3 from '../../assets/ims3.jpg'
import ims4 from '../../assets/ims4.jpg'
import ims5 from '../../assets/ims5.jpg'
import erp1 from '../../assets/erp1.jpg'
import erp2 from '../../assets/erp2.jpg'
import erp3 from '../../assets/erp3.jpg'
import erp4 from '../../assets/erp4.jpg'
import erp5 from '../../assets/erp5.jpg'
import ehat1 from '../../assets/ehat1.jpg'
import ehat2 from '../../assets/ehat2.jpg'
import ehat3 from '../../assets/ehat3.jpg'
import ehat4 from '../../assets/ehat4.jpg'
import ehat5 from '../../assets/ehat5.jpg'

const data = [
  {
    id: 1,
    image1: ims1,
    image2: ims2,
    image3: ims3,
    image4: ims4,
    image5: ims5,
    title: 'Insurance Management System (IMS)',
    details:
      'This is the running inhouse software for Mercantile Islami Life Insurance built with Laravel framework for back-end and Vue.js for front-end. I have been in the developing team for more than 1.5 years now',
    github: 'https://github.com/scottishsummer98/php_vue_ims',
    demo: 'https://ims.milil.com.bd/',
  },
  {
    id: 2,
    image1: erp1,
    image2: erp2,
    image3: erp3,
    image4: erp4,
    image5: erp5,
    title: 'ERP MILIL',
    details:
      'This is the currently developed ERP software for Mercantile Islami Life Insurance. Mostly used by marketing users around the country, built with ASP.Net MVC framework for back-end and jquery for front-end. I have been in this developing team for past 6 months',
    github: 'https://github.com/scottishsummer98/csharp_asp.netmvc_ims',
    demo: 'https://erp.milil.com.bd/',
  },
  {
    id: 3,
    image1: ehat1,
    image2: ehat2,
    image3: ehat3,
    image4: ehat4,
    image5: ehat5,
    title:
      'This is an amazone clone front-end built on react. You can browse products and add/remove them from your shopping cart. Basic authentication is done by google firebase',
    github: 'https://github.com/scottishsummer98/react_ecom',
    demo: 'https://ehat.netlify.app/',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="container projects_container">
        <Swiper
          className="swiper_container"
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(
            ({
              id,
              image1,
              image2,
              image3,
              image4,
              image5,
              title,
              details,
              github,
              demo,
            }) => {
              return (
                <SwiperSlide>
                  <article key={id} className="projects_item">
                    <div className="projects_item_image">
                      <Swiper
                        className="swiper_container"
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                      >
                        <SwiperSlide>
                          <img src={image1} alt="ProjectDP1" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image2} alt="ProjectDP2" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image3} alt="ProjectDP2" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image4} alt="ProjectDP2" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image5} alt="ProjectDP2" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <h3>{title}</h3>
                    <h5>{details}</h5>
                    <div className="projects_item_cta">
                      <a href={github} className="btn" target="_blank">
                        Github
                      </a>
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </div>
                  </article>
                </SwiperSlide>
              )
            },
          )}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
