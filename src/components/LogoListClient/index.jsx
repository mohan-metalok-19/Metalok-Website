import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoListClient() {
  const partnerLogos = [
    {
      src: '/images/partner/client/akshaya.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/filmable.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/kyyte.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/pixxort.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/shardeum.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/sportsverse.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/wtl.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/zee.png', 
      alt:'Partner'
    },
    
    
   
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=>
      <div className="cs-partner_logo" key={index}>
        <img src={partnerLogo.src} alt={partnerLogo.alt} />
      </div>)}
    </Div>
  )
}
