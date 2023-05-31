import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link>
      <Link to='/' className="cs-center">
      <Icon icon="fa-brands:instagram" />             
      </Link>
      <Link to='/' className="cs-center">
      <Icon icon="fa-brands:facebook" />
      </Link>
    </Div>
  )
}
