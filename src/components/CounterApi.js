import React, { useState } from 'react'

function CounterApi() {
    const [count,setCount]=useState(0)
    const [address,setAddress]=useState('')

    const getAddress=async(count)=>{
        const data= await fetch(`https://random-data-api.com/api/v2/addresses?size=${count}`)
        const res= await data.json()
        setAddress(res)
    }

    
    const clickHandler=()=>{
        setCount(prevsCount=>prevsCount+1)
        
        getAddress(count)
    }
   console.log(address)
return (
    <div className='counter'>
      <div className='button-container'>
      <button onClick={clickHandler}>Clcick</button>
      <span>{count}</span>
      </div>
     <ul>
        {address && address.map((eachAddress)=>{
            return(
                <div className='address-card' key={eachAddress.id}>
                    <span>{eachAddress.city}</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )
        })}
     </ul>

    </div>
  )
}

export default CounterApi
