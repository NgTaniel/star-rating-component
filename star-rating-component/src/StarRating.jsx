import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const rateValue = i + 1;

        return (
          <label>
            <input 
              type='radio' 
              name='rating' 
              value={rateValue} 
              onClick={() => setRating(rateValue)} 
            />

            <FaStar 
              className='star' 
              color={rateValue <= (hover || rating) ? '#ffdf00' : '#d6d4d2'} 
              size={100} 
              onMouseEnter={() => setHover(rateValue)} 
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      
    </div>
  )
}

export default StarRating