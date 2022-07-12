import React from 'react'

class ClassCount extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
        // const [count,setCount] = useState(0)
    
    }
render(){
   const HandleClick = ()=>{
    // setCount
    this.setState({count :this.state.count+1})
    // this.state.count = this.state.count+1
    // console.log(this.state.count);
   }
   
    return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={HandleClick}>Add</button>
        </div>
    )
}
}
export default ClassCount

// classBased component is more about method and property
// lifeCycle of React
// Mounting - component creating and inserting in app
// updating - re-rending whenever change occur in state/props
// ummounting -removing component from dom
// error Handling 


