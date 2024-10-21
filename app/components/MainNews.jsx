import React, { useContext } from 'react'
import Dot from "../icons/dot.svg"
import Image from 'next/image'
import { MyContext } from '../context/FilterContext'

const MainNews = ({data}) => {


  const openModal = (box) => {
    setSelectedBox(box);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBox(null);
  };
 
  return (
    <div className='first-news'>
      <div>
        <img src={data?.image} />
        <div style={{display:"flex", alignItems:"center",margin:"0"}}>

        <Image src={Dot}   />
        <h3>LIVE</h3>
        </div>
        </div>
      <div>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
      </div>
    </div>
  )
}

export default MainNews