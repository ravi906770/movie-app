import React from 'react'
import { useSelector } from 'react-redux'
import "./style.scss"

const Genres = ({ data }) => {

    const { genres } = useSelector((state)=>state.home);

  return (
    <div className="genres">
       <div className="genre">Action
       </div>
       <div className="genre">Comedy
       </div>
    </div>
  )
}

export default Genres