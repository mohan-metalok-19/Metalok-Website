import React, { useState } from 'react'
import Button from '../Button'
import Div from '../Div'
import Spacing from '../Spacing'

export default function Portfolio4({title, subtitle, btnText, btnLink, imageUrl, category}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2 cs-type1">
      <Div className="cs-gradient_shape" />


      <Div className="container">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-xl-5 col-lg-6">
            <Spacing lg='0' md='35'/>
            <Div className="cs-section_heading cs-style1">
              <h3 className="cs-section_subtitle">{subtitle}</h3>
              <h2 className="cs-section_title">{title}</h2>
              <Spacing lg='45' md='20'/>
              <span 
                onMouseEnter={()=>setHovered(true)} 
                onMouseLeave={()=>setHovered(false)} 
              >
                <Button 
                  btnLink={btnLink} 
                  btnText={btnText} 
                />
              </span>
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Div className={hovered?"cs-portfolio_img active":"cs-portfolio_img"}>
              <h3 className="cs-portfolio_img_title">{category}</h3>
              <Div className="cs-portfolio_img_in cs-shine_hover_1 cs-radius_5">
                {/* <img src={imageUrl} alt="Portfolio" className="cs-w100" /> */}
                {/* <iframe src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webglfiles/Fridge/index.html" title="W3Schools Free Online Web Tutorials"></iframe> */}
                <video
                  // style={{ maxWidth: "100%", height: "450px" }} 
                  autoPlay
                  className='video-metaverse'
                  playsInline
                  loop
                  muted
                  // controls
                  alt="All the devices"
                  src="https://s3.amazonaws.com/thecolosseum.metalok.io/final+(2)_1.mp4"              
                /> 
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>


    </Div>
  )
}
