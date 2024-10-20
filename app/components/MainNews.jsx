import React from 'react'

const MainNews = ({data}) => {
 
  return (
    <div className='first-news'>
      <div><img src={data?.image} /></div>
      <div>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
      </div>
    </div>
  )
}

export default MainNews