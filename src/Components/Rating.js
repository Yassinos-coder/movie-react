import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import {useState} from 'react'


const Rating = () => {
  const stars = Array(5).fill(0)
  const [currentValue, setValue] = useState(0)
  const [isHover, setHover] = useState(undefined)
  const styleClick = {
    yellow: '#FFD447',
    grey:"#555555"
  }

  const handleClick = value => {
    setValue(value)
  }

  const onHover = newHover => {
    setHover(newHover)
  }

  const isNotHover = notHover => {
    setHover(undefined)
  }


  return (
    <div className='div-rate-star'>
       <div className='p-star-rate'> 
          {
            stars.map((_, index) => {
              return (
                <FontAwesomeIcon
                 className='faStar' icon={ faStar }
                 key={index}
                 onClick={()=> handleClick(index + 1)}
                 onMouseOver={() => onHover(index + 1)}
                 onMouseLeave = {()=> isNotHover(index +1)}
                 color={(isHover || currentValue) > index ? styleClick.yellow : styleClick.grey}
                />
              )
            })
            
          }
       </div>
    </div>
  )
}

export default Rating
