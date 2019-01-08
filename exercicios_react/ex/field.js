import React, { Component } from 'react'
import { connect } from 'react-redux';

class Field extends Component {

  /* Comentado devido a interação do estado gerenciado pelo redux  
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    <label>{this.state.value}</label><br/>
     <input onChange={this.handleChange} value={this.props.value}/>
    */

    render(){
        return (
            <div>
                <label>{this.props.value}</label><br/>
                <input onChange={this.handleChange} value={this.props.value}/>
            </div>
        )
    }

}



function mapStateTopProps(state) {
    return {
        value: state.field.value
    }
}
/* Decorator Exportacao das classe e funcao*/
export default connect(mapStateTopProps)(Field)