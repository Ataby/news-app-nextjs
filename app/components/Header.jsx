import React from 'react'
import Logo from "../icons/pngegg.png"
import Image from 'next/image';

const Header = () => {
  return (
    <div className='header'>
       <Image src={Logo} alt="description" width={150} height={100} />
       <h3>NEWS</h3>
    </div>
  )
}

export default Header