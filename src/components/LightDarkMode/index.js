// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component{
    state={changeModeBtn:true}
    changeModeBtnFunc=()=>{
        const {changeModeBtn}=this.state
        if(changeModeBtn===true){
            this.setState({changeModeBtn:false})
        }
        else{
            this.setState({changeModeBtn:true})
        }
    }
    render(){
        const {changeModeBtn}=this.state
        return(
            <div className="light-dark-mode-container">
                    {changeModeBtn ? ( <div className="light-dark-mode-sub-container1">
                    <h1 className="heading1">Click To Change Mode</h1>
                    <button className="light-btn" type="button" onClick={this.changeModeBtnFunc}>Light Mode</button>
                    </div>)
                    : 
                    (<div className="light-dark-mode-sub-container2">
                    <h1 className="heading2">Click To Change Mode</h1>
                    <button className="dark-btn" type="button" onClick={this.changeModeBtnFunc}>Dark Mode</button>
                    </div>
                    )}
            </div>
        )
    }
}

export default LightDarkMode
