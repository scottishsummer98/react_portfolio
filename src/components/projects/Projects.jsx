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
import dp1 from '../../assets/dp1.jpg'
import dp2 from '../../assets/dp2.jpg'
import dp3 from '../../assets/dp3.jpg'
import dp4 from '../../assets/dp4.jpg'
import dp5 from '../../assets/dp5.jpg'
import kamp1 from '../../assets/kamp1.jpg'
import kamp2 from '../../assets/kamp2.jpg'
import kamp3 from '../../assets/kamp3.jpg'
import kamp4 from '../../assets/kamp4.jpg'
import kamp5 from '../../assets/kamp5.jpg'
import tms1 from '../../assets/tms1.jpg'
import tms2 from '../../assets/tms2.jpg'
import tms3 from '../../assets/tms3.jpg'
import tms4 from '../../assets/tms4.jpg'
import tms5 from '../../assets/tms5.jpg'
import jb1 from '../../assets/jb1.jpg'
import jb2 from '../../assets/jb2.jpg'
import jb3 from '../../assets/jb3.jpg'
import jb4 from '../../assets/jb4.jpg'
import jb5 from '../../assets/jb5.jpg'

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
    image1: kamp1,
    image2: kamp2,
    image3: kamp3,
    image4: kamp4,
    image5: kamp5,
    title: 'Kampsoahus Restaurant',
    details:
      'This is react front-end project of a restaurant website. Design idea was taken from famous Hawksmoore steakhouse website. It has email sending functionality from the website via emailjs. Hosting was done by netlify',
    github: 'https://github.com/scottishsummer98/react_restaurant',
    demo: 'https://kampsoahus.netlify.app/',
  },
  {
    id: 4,
    image1: jb1,
    image2: jb2,
    image3: jb3,
    image4: jb4,
    image5: jb5,
    title: 'Jinnbook (On going)',
    details:
      'This is a social media platform like facebook, but for jinns. They can add, remove, follow, send friends requests to other jinns. Post status,pictures, update cover photos and display pictures. They can create, follow and post on pages. Built with Vue.js front-end and a Laravel back-end.',
    github: 'https://github.com/scottishsummer98/laravel_vue_socialplatform',
    demo: 'https://github.com/scottishsummer98/laravel_vue_socialplatform',
  },
  {
    id: 5,
    image1: dp1,
    image2: dp2,
    image3: dp3,
    image4: dp4,
    image5: dp5,
    title: 'DP Dental',
    details:
      'This is a doctor portfolio website with authentication and admin panel. I did it as an independent project. This was built with Laravel back-end and Vue.js front-end. For admin panel, I have used adminlte-3.',
    github: 'https://github.com/scottishsummer98/dpweb',
    demo: 'https://github.com/scottishsummer98/dpweb',
  },
  {
    id: 6,
    image1: tms1,
    image2: tms2,
    image3: tms3,
    image4: tms4,
    image5: tms5,
    title: 'Task Management System (TMS)',
    details:
      'This is a task management system built with laravel back-end and laravel blade front-end. Users can assign task to other registered user and pin own tasks, mark them as done,doing or pending. Assigned tasks will be shown in the task dashboard for each user individually.',
    github: 'https://github.com/scottishsummer98/php_laravel_blade_tms',
    demo: 'https://github.com/scottishsummer98/php_laravel_blade_tms',
  },
  {
    id: 7,
    image1: ehat1,
    image2: ehat2,
    image3: ehat3,
    image4: ehat4,
    image5: ehat5,
    title: 'EHAT Ecommerce',
    details:
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
