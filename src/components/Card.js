import { useState } from 'react';
import './Card.css'
const Card = () => {
const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
    <div className='Card'>
    <div className='Card1'>
        <p>Hdfc</p>
        <div>
        <p>Account Number</p>
        <p>******2324</p>
        </div>
    </div>
    <div className='Card2'>
        <p>sbi</p>
        <div>
        <p>Account Number</p>
        <p>******2324</p>
        </div>
    </div>
    <div className='Card3'>
        <p>axis</p>
        <div>
        <p>Account Number</p>
        <p>******2324</p>
        </div>
        
    </div>
   </div>
   <div className={` card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <p>Front Content</p>
        </div>
        <div className="card-back">
          <p>Back Content</p>
        </div>
      </div>
    </div>
        
    
    </>
  )
}

export default Card