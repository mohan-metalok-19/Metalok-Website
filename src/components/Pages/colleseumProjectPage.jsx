import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Button from '../Button'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'

import { Icon } from '@iconify/react';


export default function ColleseumProjectPage() {
  const videoRef = useRef(null)
  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };


 const params = useParams()
  pageTitle('The Colloseum');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <PageHeading
        title='The Colloseum'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="The Colloseum"
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <img src="/images/portfolio-home/colosseum.png" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <iframe src="https://www.spatial.io/s/The-Colosseum-Ground-Floor-6435784ac02f064c976335e2?share=0" className='d-modal-div' />
        <Spacing lg='90' md='40' />
        {/* <video className='d-modal-div' src="/images/3d-model/ground-video.mp4" /> */}
        {/* <div>
          <video ref={videoRef} controls className='d-modal-div'>
            <source src="/images/3d-model/ground-video.mp4" type="video/mp4" /> 
            Your browser does not support the video tag.
          </video>
          <p onClick={playVideo}>Play</p>
          <p onClick={pauseVideo}>Pause</p>
        </div> */}
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='The Colloseum – 3D Interactive Products '
              subtitle='3D Configurators'
            >
              <Spacing lg='40' md='20' />
              <p> We have designed home furniture customizable with options of texture, materials and colours. The customers can have a 360-degree view of the product and the spatial implementation in real time space. </p>
              <Spacing lg='10' md='10' />
              <p>Our project is enables with VR mode and AR mode where the customer can interact with the products in the try-in (for VR mode), enabling the user to experience the products in the virtual world and the try-out (in AR mode), enabling the environment to interact with the user’s world. </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40' />
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30' />
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>3D Configurator – Home Space </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>VR, AR </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, 3D Vista, Unreal Engine </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile, VR Glasses (Oculus) </p>
                <Spacing lg='30' md='30' />
              </Div>


              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>VR Try-in, AR Try-out, Product Interaction, Product Customization, 360 degree Product view  </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>The Colloseum </p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>


            <Div className =" parent_portfolio">
              <span className="cs-text_btn " >
                <span> 
                  <a href="https://www.spatial.io/s/The-Colosseum-Ground-Floor-6435784ac02f064c976335e2?share=0"> Explore Colloseum Metaverse </a >
                </span>
                <Icon icon="bi:arrow-right" /> 
              </span>
            </Div>

          </Div>
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/akshyaProjectPage' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>

           <Button btnLink='/ramandirProjectPage' btnText='Next Project' />
          </Div>
        </Div>
      </Div>
      <Spacing lg='145' md='80' />
      {/* <Cta
        title='agency@arino.com'
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      /> */}
    </>
  )
}
 