import React,{useState} from 'react'

export default function Arrow() {
    const [name ,setName] = useState()
    const [email,setEmail]  = useState()
    const [age,setAge] = useState()
     const [detail,setDetail] = useState([])

     const [person,setPerson] = useState({
      Name:'',
      Email:'',
      Age:''
     })
     


  const HandleChange = (name, value) => {
       if(name === 'name'){
        setName(value)
        // name=subham
       }
       else if(name === 'email'){
        setEmail(value)
        // email= subham@gmail.com
       }
       else if(name === 'age')
       {
        setAge(value)
        // age = 22
       }
    }
  
  
  const HandleClick = () => {
    
    let newInput = {
      'Name':name,
      'Email':email,
      'Age':age}
    setDetail((prevState)=>{
     return [...prevState,newInput]
    })
    console.log(detail);
     
  }

 


  





  return (
    <div className='form'>
      <div>
        <span>Enter your name</span>
        <input type='text' name='name' onChange={(e) => HandleChange(e.target.name, e.target.value)} />
      </div>
      <div>
        <span>Email</span>
        <input type='text' name='email'  onChange={(e) => HandleChange(e.target.name, e.target.value)} />
      </div>
      <div>
        <span>Age</span>
        <input type='number' name='age' onChange={(e) => HandleChange(e.target.name, e.target.value)} />
      </div>
      <button onClick={HandleClick}>Submit</button>

    </div>
  )
}


// Name, DOB, gender(checkbox)
// hook  useState,useEffect,useContext,useReducer,useMemo,useCallback

// useState
// inital state, change 


// spread opertor
// let array = [1,2,3,4,5]
// let newArray =[...array] 
// console.log('newArray'+newArray);

 // detail =[
  //   {person1}
  //    {person2} 
  //    {person3}
  //    {person4}
  // ]
  // prevState = person1,person2,person3 ,newInput