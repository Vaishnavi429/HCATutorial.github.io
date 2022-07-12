import React from 'react'
import './ClassForm.css'

class ClassForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Name: '', Email: '' }
    }
   
    render() {
        const HandleName = (event) => {
            let input = event.target.value
            this.setState({ Name: input })
        }
        const HandleEmail = (event)=>{
            let input = event.target.value
            this.setState({Email:input})
        }

        const HandleClick = ()=>{
            console.log(this.state);
        }

        return (
            <div className='formContainer' >
                <div>
                    <span>Enter your Name</span>
                    <input type='text' name='Name' onChange={HandleName} />
                </div>
                <div>
                    <span>email</span>
                    <input type='text' name='Email ' onChange={HandleEmail} />
                </div>
                <button onClick={HandleClick}>Submit</button>
            </div>
        )
    }
}

export default ClassForm


// create one form name,email,password,confirm password ,DOB
// submit