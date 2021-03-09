import React, { Component, useState } from "react";
import TodoList from './TodoList'

const Event = () => {
    const [state, setState] = useState({
        color: "green",
        text: "Click Me",
    });
    const changeState = () => {
        setState({
            color: "blue",
            text: "Changed 😊",
        });
    };
    const changeStateAgain = () => {
        setState({
            color: "red",
            text: "Double Changed 😊",
        });
    };
    const [name, setName] = useState({
        name: "",
        password: "",
    });
    const inputChange = (event) => {
        const { name, value } = event.target;
        setName((preValue) => {
            //preValue means previous value
            //console.log(preValue)
            return {
                ...preValue,
                [name]: value,
            };
        });
        /*  if(event.target.name==='name'){
                 setName({
                     name : event.target.value,
                     password : name.password
                 })
             }else{
                 setName({
                     name: name.name,
                     password : event.target.value
                 })
             } */
        //console.log(event.target.value)
    };
    return (
        <>
            {/*  <div
        style={{ backgroundColor: state.color }}
        className="text-center mt-5"
      >
        <button
          onDoubleClick={changeStateAgain}
          onClick={changeState}
          className="btn btn-success"
        >
          {state.text}
        </button>
        <br />
      </div> */}
            {/* <div>
           <button onMouseEnter={changeStateAgain} onMouseLeave={changeState} className="btn btn-success">{state.text}</button>
           </div> */}

            {/* <div className="mt-5">
        <input
          onChange={inputChange}
          name="name"
          placeholder="Enter Your Name"
          type="text"
          className="text-center border-danger form-control"
        />
        <input
          onChange={inputChange}
          name="password"
          placeholder="Enter Your Name"
          type="text"
          className="text-center border-danger mt-1 form-control"
        />
      </div>
      <h1 className="text-center mt-1">Name : {name.name}</h1>
      <h1 className="text-center">Pass : {name.password}</h1> */}
        </>
    );
};

const Todo = () => {
    const [state, setState] = useState('')
    const [items, setItems] = useState([])
    const changeHandler=(event)=>{
        setState(event.target.value)
    }
    const changeState=()=>{
        //console.log(state)
        setItems((oldItems)=>{
            //console.log(oldItems)
            return [...oldItems,state]
        })
        setState('')
    }
    const deleteList=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((item,idx)=>{
                return idx !== id
            })
        })
    }
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-3"></div>
                <div className="col-lg-4 col-md-6">
                    <div className="card text-center text-white bg-success border-secondary">
                        <div className="card-header">To do List</div>
                        <div className="card-body ">
                            <div className="d-flex text-secondary mx-auto">
                                <input onChange={changeHandler} value={state} type="text" placeholder="Add a item" className=" text-center form-control"/>
                                <span className="rounded-pill bg-white p-2 ml-1">
                                    {state?<i style={{cursor:'pointer'}}  onClick={changeState} className="fas fa-plus"></i>:<i  className="fas fa-plus"></i>}
                                </span>
                            </div>
                            <div>
                                <ul className='list-group'>
                                    {items.map((item,index)=>{
                                        
                                        return <TodoList deleteList={deleteList} key={index} idx={index} item={item}/>
                                    })}
                                </ul>
                            </div>


                        </div>
                        <div className="card-footer text-white">@2021 copyright</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3"></div>
            </div>

        </>
    );
};

export default Event;
export { Todo };

//export {Function1,Function2,...}
