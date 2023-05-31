import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination' 
import Div from '../Div'
import Sidebar from '../Sidebar.jsx/index.jsx'
import Spacing from '../Spacing'
import Slider from '../Blog/slider'

export default function BlogPageOne() {
  pageTitle('Blog');
  const postData = [
    {
      thumb:'/images/blog-img/blog-3.png',
      title:'How to buy and sell in Metaverse',
      subtitle:' To put it simply, each tech giant’s Metaverse will be a completely immersive digital world which you will enter through a VR headset or in some cases even without a VR headset, with just one click on the company’s app or website. Just like a high end video game, the metaverse is a multi dimensional virtual world and you enter that virtual world via your avatar.',
      date:'07 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/blog-img/blog-4.png',
      title:'Make money in Metaverse',
      subtitle:' The Metaverse is predicted to become a trillion dollar industry by 2025 which means that the Moolah and the Metaverse go hand in hand. There are seemingly endless opportunities to make money in the Metaverse whether you’re an individual or a multi-national giant.',
      date:'05 Mar 2022',
      category:'Photography',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/blog-img/blog-2.png',
      title:'What is Metaverse?',
      subtitle:'Defining the Metaverse at this point is similar to trying to describe the Internet in the 1970’s. The internet existed then but what it would eventually become and look like was far from clear. So beyond the buzzword that is the Metaverse, what does the term metaverse encompass beyond the hype?',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-7.png',
      title:'What are NFTs?',
      subtitle:' Three simple letters, NFTs- Non Fungible Tokens. While the Big B was the first Indian celebrity to launch his NFT Collection which included an audio file of the legendary poem Madhushala and autographed film posters, the NFT industry has already captured the attention of several superstars globally. NFTs may be in a nascent stage in India, however globally it is a 2.5 billion dollar industry.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-6.png',
      title:'What is Blockchain?',
      subtitle:' If you have a mental block when it comes to understanding what does Blockchain mean-well you’re not alone. However, there are plenty of reasons why you should be well versed in this particular aspect of our Metalok for its ability to save you from all fraud, forgery and data leakage.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-9.jpg',
      title:'Applications of Blockchain',
      subtitle:'  In our earlier article we removed the blocks around understanding what blockchain is.Now, let’s discuss how blockchain is proving to be a boon in our day to day life. Whether you’re a common man or a celebrity, blockchain is the most secure way to conduct transactions. Especially when trust between entities is not a given, blockchain allows all parties involved to feel secure nonetheless. Bitcoin was the first real world application of blockchain, however it can assist in may other services from hospitality to healthcare, to digital art, to any industry, where there is content and IP rights are crucial.',
      
      
    
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,    {
      thumb:'/images/blog-img/blog-8.jpg',
      title:'Roadblocks in Blockchain adoption?',
      subtitle:'  Blockchain is hailed as a boon for technology due to its ability to reduce risk, stamp out fraud due to its decentralised nature and bring about transparency in a scalable way for several industries from healthcare to hospitality, finances to films, supply and distribution amongst other industries. In addition to securing transactions between people who don’t share the trust factor, blockchain importantly enables sharing of data in an ecosystem where no single entity is exclusively incharge.',
      
      
    
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-12.jpg',
      title:'Metaverse Real Estate',
      subtitle:' if you’re keen to know the hottest real estate address these days, the property which everyone from Rihanna to Snoop Dogg to Daler Mehendi have invested in, the property that might give you millions of Dollars of ROI, well then don’t start looking for its address on Google Maps because this place is in a whole new universe. Yes, quite literally- its the Metaverse which is a multidimensional virtual universe that only exists on the internet.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-1.png',
      title:"How NFTs and Tokenisation will disrupt tomorrow's economies?",
      subtitle:'The evolution of civilization and the creativity of human beings often go hand in hand and as humans have evolved, so has music, art and architecture. Today however creativity has entered the digital age and many expressions of art are now being digitised. Besides being a new way for creators to express themselves, digitisation technology is crucial to protect creative rights and property. Nowadays when people hear the term digital art for many of them the first term that comes to mind is NFT.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-11.png',
      title:'Environmental Concerns Of Blockchain',
      subtitle:' Blockchain technology came into larger public awareness in 2008 with Bitcoin technology, which has since led to the rise of several other cryptocurrencies. While it is largely agreed that blockchain technology can have far reaching impacts on society and the economy, it’s effect on the environment has been a matter of deep concern. The Cambridge Bitcoin Electricity Consumption Index estimates that Bitcoin, used an estimated 26.73 Terawatt-hours of electricity per year and 167.72 Terawatt-hours of electricity more than the Netherlands, Argentina, or the United Arab Emirates in 2020.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-5.png',
      title:'Gamefi',
      subtitle:' In November 2019, Jade Zhang, the founder of blockchain gaming platform Mixmarvel while delivering a speech at the Wuzhen World Blockchain Conference, said that technology and cryptocurrency have the potential to revolutionize the video gaming sector. In September 2020, Yearn founder Andre Cronje mentioned GameFi in his tweet, saying that blockchain technology and games are an important source of income. GameFi means earning from video gaming. It is a combination of two words, Game and Finance and is often used to refer to play-to-earn (P2E) games that offer economic incentive to players. Players typically earn in Crypto currencies or NFTs for completing various stages or tasks in the game. Here the game is played to earn and not just to win. Overall, it’s a great combination of fun, entertainment and earnings. It is important to note that GameFi is not gambling.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/blog-img/blog-10.jpg',
      title:'Retail and Metaverse',
      subtitle:' Shopping in the metaverse brings to mind immersive experiences and VR suits. But if you’re still the old school variety who needs time to get used to the idea of shopping with a headset and gloves, well not to worry you probably have a decade to get used to the idea.But while this new retail style in the Metaverse will take time to become mainstream according to experts, and customers can sit back and wait for the future of shopping to come to them, brands have to start getting future ready right now. Many are already making strides in that direction and have already set up shop, so to speak, in the Metaverse with great success. Luxury fashion brands from Gucci to Louis Vuitton to Burberry and Balenciaga as well as huge global brands such as Nike and Adidas are now selling their NFTs aka their virtual digital collections on different Metaverse platforms.',

      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Our Blog One'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Blog One'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {/* {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))} */}
            <Slider/> 
            <Spacing lg='60' md='40'/> 
            <Pagination/>
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      
      <Spacing lg='150' md='80'/>
      <Div className="container"> 
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Get in touch' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
