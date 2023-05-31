import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/partner/built-with/aws.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/jiotesseract.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/metamask.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/polygon.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/unity.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/unreal.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/web3.png', 
      alt:'Partner'
    },
    
   
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
