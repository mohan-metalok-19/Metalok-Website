
// working code is below 
import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    {
      memberImage: '/images/sac-img.jpg',
      name: " 'Sacred Foods of India'",
      new: "  Phygital NFT",
      position: 'Masterpiece of Chef Vikas Khanna presented to Telangana IT Secretary' ,
      // type: 'Telangana IT Secretary',
    },
    {
      memberImage: '/images/startup.jpg',
      name: 'Best Emerging Blockchain ',
      new:"Start-up of the year ",
      // position: 'Winner of W3 Summit 2023 Global Awards  ',
      position: 'Proud to be the winners of W3 Summit Global Awards ',
    
    },
    {
      memberImage: '/images/accolades/wtl.jpg',
      name: " Designer of Phygital  ",
      new: "  NFTs for WTL",
      position: 'Designed exclusive Digital Collectibles for “The Greatest Show on Court” ' ,
      // type: 'Telangana IT Secretary',
    },
    {
      memberImage: '/images/accolades/zee.jpg',
      name: 'Featured as Pioneers in Media Metaverse ',
      // new:"Metaverse Spaces- Zee Business ",
      position: 'Proud to be a part of the Zee Business Studio journey into the Metaverse   ',
    
    },
    // {
    //   memberImage: 'https://metalok.io/wp-content/uploads/2022/04/1-4.png',
    //   name: 'Sacred Foods of India',
    //   position: 'Masterpiece of Chef Vikas Khanna presented to',
    //   type: 'Telangana IT Secretary',
    // },
    // {
    //   memberImage: 'https://metalok.io/wp-content/uploads/2022/04/1-4.png',
    //   name: 'Sacred Foods of India',
    //   position: 'Masterpiece of Chef Vikas Khanna presented to',
    //   type: 'Telangana IT Secretary',
    // },
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Div key={index}>
            <img src={item.memberImage} alt="Member" />
            <h2 className='award_name'>{item.name}</h2>
            <h2 className='award_name_new'>{item.new}</h2>
            <p className='award_description'>{item.position}</p>
            <p className='award_description'>{item.positionnew}</p>
            {/* <p className='award_type'>{item.type}</p> */}
          </Div>
        </Div>
         ))}
              </Slider>
            );
          }
