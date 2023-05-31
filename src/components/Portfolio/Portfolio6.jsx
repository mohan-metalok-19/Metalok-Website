import React, { useState } from 'react'
import Button from '../Button'
import Div from '../Div'
import Spacing from '../Spacing'

export default function Portfolio6({title, subtitle, btnText, btnLink, imageUrl, category}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2"> 
      <Div className="cs-gradient_shape" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-lg-6">
            <Div className={hovered?"cs-portfolio_img active":"cs-portfolio_img"}> 
              <h3 className="cs-portfolio_img_title">{category}</h3> 
              <Div className="cs-portfolio_img_in cs-shine_hover_1 cs-radius_5">
                
                {/* <img src={imageUrl} alt="Portfolio" className="cs-w100" />  */}
                <iframe src=" https://s3.amazonaws.com/thecolosseum.metalok.io/leisurechair/index.htm" height="500px" width="100%" title="W3Schools Free Online Web Tutorials"></iframe>
                
              </Div>
            </Div>
          </Div>
          <Div className="col-xl-5 col-lg-6 offset-xl-1">
            <Spacing lg='0' md='35'/>
            <Div className="cs-section_heading cs-style1">
              <h3 className="cs-section_subtitle">{subtitle}</h3>
              <h2 className="cs-section_title"> We Build customizable 3D products driving sales</h2>
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
        </Div>
      </Div>

      

    </Div>
  )
}
