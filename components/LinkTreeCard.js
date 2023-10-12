import Link from 'next/link'
import React from 'react'

const LinkTreeCard = ({title, url, image}) => {
  return (
    <>
     <span>
      <Link className='' href={url}>
        <img src={image} alt=''/>
        <h4>{title}</h4>
      </Link>
      </span> 
    </>
  )
}

export default LinkTreeCard
