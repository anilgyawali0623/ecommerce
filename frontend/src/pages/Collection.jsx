import React from 'react'
import { useParams } from 'react-router-dom'
import BannerImage from '../components/BannerImage';

function Collection() {
     const {name}= useParams();
  return (
    <div>
       <BannerImage/>
    </div>
  )
}

export default Collection
