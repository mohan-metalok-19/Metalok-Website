import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'The Colloseum  ',
      subtitle:'See Details',
      href:'/colleseumProjectPage',
      src:'/images/portfolio-home/colosseum.png'
    },
    {
      title:'Ram Mandir ',
      subtitle:'See Details',
      href:'/ramandirProjectPage',
      src:'/images/portfolio-home/ram-mandir.jpg'
    },
    {
      title:'Zee Business ',
      subtitle:'See Details',
      href:'/zeeProjectPage',
      src:'/images/portfolio-home/zee.jpg'
    },
    {
      title:'W3 Summit ',
      subtitle:'See Details',
      href:'/websummitProjectPage',
      src:'/images/portfolio-home/web-three.jpg'
    },
    {
      title:'Sportsverse  ',
      subtitle:'See Details',
      href:'/sportsverseProjectPage',
      src:'/images/portfolio-home/stadium-img.png'
    }
    ,{
      title:'Akshaya NFTs  ',
      subtitle:'See Details',
      href:'/akshyaProjectPage',
      src:'/images/portfolio-home/akshaya.png'
    },
    // {
    //   title:'Kyyte  ',
    //   subtitle:'See Details',
    //   href:'/portfolio/portfolio-details',
    //   src:'/images/portfolio_3.jpeg'
    // }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
