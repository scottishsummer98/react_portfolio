import React from "react";
import "./Testimonial.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import AVTR1 from "../../assets/Avatar1.jpeg";
import AVTR2 from "../../assets/Avatar2.jpg";
import AVTR3 from "../../assets/Avatar3.jpg";
import AVTR4 from "../../assets/Avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Zia Md. Giasuddin",
    desig: "GM & Head Of IT, Mercantile Islami Life Insurance Company Ltd",
    linkedin: "https://linkedin.com",
    github: "https://github.com/",
    review:
      "Very passionate and innovative young mind always looking to go ahead of ownself setting new personal goals. Would surely be an asset for any company",
  },
  {
    avatar: AVTR2,
    name: "Md Sharif Alam Priom",
    desig: "Software Developer, Mercantile Islami Life Insurance Company Ltd",
    linkedin: "https://www.linkedin.com/in/md-sharif-alam",
    github: "https://github.com/Priom7",
    review:
      "Amazing co-worker and human being. I have always find himself eager to learn new things and has amazing problem solving and analytical skills. Lovely to have such a colleague who is always there for you.",
  },
  {
    avatar: AVTR3,
    name: "Md Razwanul Ghani",
    desig: "Software Engineer, Tikweb Dhaka",
    linkedin: "https://www.linkedin.com/in/ghanirez1/",
    github: "https://github.com/rezwan23",
    review:
      "Samiur Rahman is a quick learner. He is very keen to learn new technologies. He keeps patience in tough situations and brings out the best of him. He is an efficient PHP and Laravel developer. He always maintained best practices. I wish him for better career.",
  },
  {
    avatar: AVTR4,
    name: "Mir Istiak Tarek",
    desig: "Android Developer, Mercantile Islami Life Insurance Company Ltd",
    linkedin: "https://www.linkedin.com/in/istiak28/",
    github: "https://github.com/",
    review:
      "His behavior with everyone in the office is always very friendly and not only he is an amazing co-worker but also an amazing listener too. He makes the work environment very lively",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(
          ({ avatar, name, desig, linkedin, github, review }, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="ClientPicture" />
                </div>
                <h4 className="client_name">{name}</h4>
                <h5 className="client_name">{desig}</h5>
                <div className="testimonial_socials">
                  <a href={linkedin} target="_blank">
                    <BsLinkedin />
                  </a>
                  <a href={github}>
                    <BsGithub />
                  </a>
                </div>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Testimonial;
