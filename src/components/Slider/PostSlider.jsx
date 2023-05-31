import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post'; 

export default function PostSlider() { 
  const postData = [
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-1.jpg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'How to buy and sell in Metaverse' 
    },
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-2.jpg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title:'Make money in Metaverse'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-3.png', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'What is Metaverse?'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-4.jpg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'What is an NFT?'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-5.jpg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title:'What is Blockchain?'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-6.jpg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Applications of Blockchain'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-7.jpg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Roadblocks in Blockchain adoption'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-8.jpg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Metaverse Real Estate'
    },{
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-9.png', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'How NFTs and tokenisation will disrupt tomorrows economies'
    },
    ,{
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-10.png', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Environmental concerns of Blockchain'
    },
    ,{
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-11.jpg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Gamefi'
    },
    ,{
      url:'/blog/blog-details', 
      src:'/images/blog-home/blog-12.jpg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Retail and Metaverse'
    },
    
    
  ]
  
  /** Slider Settings **/
  const settings = { 
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}> 
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
