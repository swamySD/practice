import React, { useEffect, useState } from 'react'
import './CounterApi.css'
function CounterApi() {
    const [count,setCount]=useState(0)
    const [address,setAddress]=useState([])

    

    useEffect( ()=>{
        if(count === 0){
            return
        }
    const getAddress=async(count)=>{
            
            const data= await fetch(`https://random-data-api.com/api/v2/addresses?size=${count}`)
            const json= await data.json()
            setAddress((prevAddress) => [...prevAddress, json]);  
              console.log(json)
              
        }
        getAddress()
    },[count])
    
    const clickHandler=()=>{
        setCount(prevCount=>prevCount+1)
    }
   
    console.log(address)
return (
    <div className='counter'>
      <div className='button-container'>
      <button onClick={clickHandler} className='counter-button'>Click</button>
      <span className='count-span'>{count}</span>
      </div>
     <ul className='ul'>
        {address?.map((eachAddress)=>{
            return(
                <div className='address-card' key={eachAddress.uid}>
                    <span className='address-details'>{eachAddress.city}</span>
                    <span className='address-details'>{eachAddress.street_name}</span>
                    <span className='address-details'>{eachAddress.street_address}</span>
                    <span className='address-details'>{eachAddress.city}</span>
                    
                </div>
            )
        })}
     </ul>

    </div>
  )
}

export default CounterApi
