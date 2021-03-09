
import './App.css';
import First from './First/First'
import Count from './First/Count'
import Form from './Form/Form'
import Book from './Book/Book'
import Event,{Todo} from './Event/Event'
import MaterialUi from './Ui/MaterialUi'
import Main from './GoogleNote/Main'


import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    books: [
      {
        name: '❤️',
        price: '💵 20',
        id: 1
      },
      {
        name: 'React',
        price: 50,
        id: 2
      },
      {
        name: 'React Js',
        price: 40,
        id: 3
      },
      {
        name: 'Node Js',
        price: 30,
        id: 4
      }
    ]
  }
  deleteBookHandler=(id)=>{
    const newBooks = this.state.books.filter(book=>book.id!=id);
    this.setState({
      books : newBooks
    })
  }
  updateBookHandler=(name,id)=>{
    
    const newBook = this.state.books.map(book=>{
      this.key=book.id
      if(book.id===id){
        //console.log(name+' '+id) 
          return   {
            ...book,
            name : name
          }
      }
      return book
      
    })
    this.setState({
      books : newBook
    })
  }
  /* constructor(props){
    super(props)
    this.state = {
      name : ''
    }
    //this.refreshUpdate = this.refreshUpdate.bind(this)
  }
  eventHandler(data){
    alert('I am clicked '+data)
  }
  inputHandler = (event)=>{
    this.setState({
      name : event.target.value
    })
  }
  reactDomHandle=()=>{
    var container = document.getElementById('dom')
    var element = <h1>React Dom change</h1>
    ReactDOM.render(element,container)
  }
  refreshUpdate=()=>{
    this.forceUpdate()
    var container = document.getElementById('img')
    var element = <img src="https://picsum.photos/200/300" alt=""/>
    ReactDOM.render(element,container)
  }
  findDomeNodeHandler=()=>{
    //var container = document.getElementsByClassName('img')[0]
    var container = document.querySelector('.img')
    ReactDOM.findDOMNode(container).src='https://picsum.photos/200/300'
  } */
  render() {
    return (
      <div className="container">
        {/* <div className="App">
          <input onChange={this.inputHandler} className="from-controller" type="text" name="" id=""/>
          <button  onClick={this.eventHandler.bind(this,'Click Event Passing data')} className="btn btn-primary">
            Click Me
          </button>
          <h1 style={{
            padding : '20px',backgroundColor : 'green'
          }}>{this.state.name}</h1>
        </div>
        <button onClick={this.reactDomHandle}>React Dom</button>
        <h1 id="dom">< First name='Ismail Hosen Raj' email ='ismailhosen601@gmail.com'/></h1>
        < First name='Ismail Hosen' email ='ismailhosen1@gmail.com'/>
        < First name='Ismail' email ='ismailhosen61@gmail.com'/>
        < Count />
        <button onClick={this.refreshUpdate}>React Dom</button>
        <div id="img"><img  src="https://picsum.photos/200" alt=""/></div>
        <h1>{Math.random()}</h1> */}

        {/* <div>
          <button onClick={this.findDomeNodeHandler}>FindDomeNode</button>
          <img className='img' src="https://picsum.photos/200"/>
        </div> */}
        {/* <Form></Form> */}
       {/*  <Book  updateHandler={this.updateBookHandler} deleteHandler={this.deleteBookHandler} books={this.state.books}></Book>
        <Count /> */}
        {/* <Event />
        <Todo /> */}
        <Main />
      </div>
    )
  }
}

export default App;
