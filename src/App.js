import React from 'react'
import './App.css';
import Arrow from './Component/Arrow';
import Count from './Component/Count';
import ClassCount from './Component/ClassCount'
import ClassForm from './Component/ClassForm'



class App extends React.Component{
  render(){
    return(
      <>
      <h1>Class based Component</h1>
     {/* <ClassCount/> */}
     {/* <Count/>
     <ClassForm/> */}
     <Arrow/>
      </>

    )
  }

}

export default App;
