import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
//import ThreeModle from './threeModle';

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'The Colloseum',
      subtitle: 'See Details',
      href: '/colleseumProjectPage',
      src: '/images/portfolio-img/colloseum.jpg',
      category: 'ui_ux_design',
    },
    // {
    //   title: 'Akshaya NFT',
    //   subtitle: 'See Details',
    //   href: '/portfolio/akshyaProjectPage',
    //   src: '/images/portfolio_5.jpeg',
    //   category: 'logo_design',
    // },
    // {
    //   title: 'Colorful Art Work',
    //   subtitle: 'See Details',
    //   href: '/portfolio/portfolio-details',
    //   src: '/images/portfolio_6.jpeg',
    //   category: 'web_design',
    // },
    {
      title: 'Ram Mandir',
      subtitle: 'See Details',
      href: '/ramandirProjectPage',
      src: '/images/portfolio-img/ram mandir.jpg',
      category: 'mobile_apps',
    },
    {
      title: 'Zee Business ',
      subtitle: 'See Details',
      href: '/zeeProjectPage',
      src: '/images/portfolio-img/zee.jpg',
      category: 'mobile_apps',
    },
    {
      title: 'W3 Summit  ',
      subtitle: 'See Details',
      href: '/websummitProjectPage',
      src: '/images/portfolio-img/w3.jpg',
      category: 'mobile_apps',
    },
    {
      title: 'Sportsverse',
      subtitle: 'See Details',
      href: '/sportsverseProjectPage',
      src: '/images/portfolio-img/sportsverse.jpg',
      category: 'logo_design',
    },
    // {
    //   title: 'The Colloseum',
    //   subtitle: 'See Details',
    //   href: '/portfolio/portfolio-details',
    //   src: '/images/portfolio_4.jpeg',
    //   category: 'ui_ux_design',
    // },
    {
      title: 'Akshaya NFT',
      subtitle: 'See Details',
      href: '/akshyaProjectPage',
      src: '/images/portfolio-img/akshaya nft.jpg',
      category: 'logo_design',
    },
    // {
    //   title: 'Akshaya NFT',
    //   subtitle: 'See Details',
    //   href: '/portfolio/portfolio-details',
    //   src: '/images/portfolio_6.jpeg',
    //   category: 'web_design',
    // },
  ];
  const categoryMenu = [
    // {
    //   title: 'Web Design',
    //   category: 'web_design',
    // },
    {
      title: '3D Configurators ',
      category: 'ui_ux_design',
    },
    {
      title: 'Metaverse spaces',
      category: 'mobile_apps',
    },
    {
      title: 'Blockchain Services ',
      category: 'logo_design',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      {/* <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      /> */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss to build<br />something <i>cool</i> together"
         
          btnText="
          Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      
    </>
  );
}
