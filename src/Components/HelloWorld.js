import React from 'react'

class HelloWorld extends React.Component{
    render(){
        return(
        <h1>박동건 {this.props.name}</h1>
        )
    }
}

export default HelloWorld 