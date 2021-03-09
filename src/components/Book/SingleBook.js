import React, { Component } from 'react'

export default class SingleBook extends Component {
    state = {
        editable : false
    }
    keyPress=(event)=>{
        if(event.key === 'Enter'){
            this.setState({
                editable : false
            })
        }
    }

    render() {
        const edit = this.state.editable ?
         <input onChange={(event)=>this.props.updateHandler(event.target.value,this.props.book.id)} onKeyPress={this.keyPress} className="ml-auto mr-2" value={this.props.book.name} type="text"/>
         :<span className="ml-auto mr-2">{this.props.book.name}</span>
        return (
            <li className='list-group-item d-flex'>
                <p className="font-bold">{edit}</p>
                <span className="ml-auto mr-2">${this.props.book.price}</span>
                <span onClick={()=>this.setState({editable:true})}><i className="fas fa-edit px-3"></i></span>
                <span onClick={()=>this.props.deleteHandler(this.props.book.id)}><i className="fas fa-trash mt-1"></i></span>
            </li>
        )
    }
}
