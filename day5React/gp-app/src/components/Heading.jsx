import React,{Component} from 'react'
class Heading extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"amazon"
        }
        this.handle=this.handle.bind(this)
    }

    handle(){
        this.setState({...this.state, name:"johan"})
    }
    render(){
        return(
        <div>
           <h1> Heading{this.props.name}</h1>
           <button onClick={this.handle}>click</button>
            </div>
        )
    }
}   
export default Heading