// import Table from './components/table'
import Card from './components/Card';
import { useState,useEffect } from 'react';
import { fetchData, fetchs } from './components/fetch';
import './App.css';
import Modal from './components/Modal';
import ModalComponent from './components/ModalComponent';
import CounterApi from './components/CounterApi';


// const dummyData = [
//   { id: 1, name: 'Alice', age: 25, city: 'New York' },
//   { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
//   { id: 3, name: 'Charlie', age: 28, city: 'Chicago' },
//   // ... more data
// ];

function App() {
  const [users,setUsers]=useState([])
// const [time,setTime]=useState(0)
// const [dataa,setDataa]=useState([])

// useEffect(()=>{
//   const data=async()=>{
//   const res=await fetchData()
//   console.log(res)
//   setDataa(res)
//  }
//  data()
// },[])




// const HeadingWithCharacterLimit = (title,length) => {

//   return <h1 style={{width:'200px', whiteSpace:"nowrap", textOverflow:'ellipsis',overflow:'hidden'}}>{title}</h1>;
// };





// useEffect(()=>{
// let clear=setInterval(()=>{
//  setTime((prevState)=>prevState+1)
// },5000)
// return ()=>clearInterval(clear)
// },[time])
// if(dataa.length ===0){
//   return <h1>...Loading</h1>
// }

useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>response.json())
 .then((json)=>{
  console.log(users)
  setUsers(json)
})
},[])

  return (
    <div className="App">
    
    {/* <ModalComponent/> */}

     {/* <h1>Hello</h1>
     <Card/>
     {/* <Table data={dummyData} /> */}
     {/* <Card/> */}
      {/* <h1>{time}</h1> */}
      {/* {dataa && dataa.map((item,index)=>{
        return(
          <div key={index}>
            <h1>{HeadingWithCharacterLimit(item.title,20)}</h1>
            </div>
        )
      })} */}

    {/* <div className='card-container-g'>
        <h1>Users</h1>
        
        {
          users&&users.map((eachUser,index)=>{
            return(
              <div className='card' key={index}>
                <h1>{eachUser.name}</h1>
              </div>
            )
          })
        }
    </div> */}
   


{/* click button with when increment the api calls the clicked counting  */}

 <CounterApi/>

    </div>
  );

}

export default App;
