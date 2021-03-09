import React, { Component } from 'react'
import SingleBook from './SingleBook'
export default class Book extends Component {
    
    render() {
        return (
            <div>
                {this.props.books.map(book=>{
                    return (
                        <SingleBook updateHandler={this.props.updateHandler} 
                        deleteHandler={this.props.deleteHandler}  book={book}/>
                    )
                })}
            </div>
        )
    }
}
