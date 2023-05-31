import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function CryptoBlogPage() {
  pageTitle('NftBlogPage');
  const postData = [
    
   
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
      thumb:'/images/blog-img/blog-1.png',
      title:'How nfts and tokenization will disrupt tomorrows economies',
      subtitle:' NFT is actually a contract on the Blockchain network, which is also smart and secure.Economies based on Distributed Ledger technologies are expected to be adopted by all major investment players in a few years and tokens such as NFTs will be the lifeblood of this system. The most exciting part of a token economy accordingly to experts is that everyone with an Internet connection can interact and contribute in a meaningful way for example instead of paying brokers to invest on your behalf investors can invest directly even in previously out of reach spheres like real estate. Artists don’t have to lose out on half their earnings to streaming sites but instead can be paid directly',
      
      
    
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
        title='NftBlogPage'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='NftBlogPage'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index)=> (
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
            ))}
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
      {/* <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Get in touch' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div> */}
    </>
  )
}
