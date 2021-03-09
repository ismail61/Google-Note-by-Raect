import React from 'react';

const TodoList = (props) => {
    
    return(
        <>
        <div className="d-flex">
            <i style={{cursor:"pointer"}} onClick={()=>props.deleteList(props.idx) } className=" mt-3 fa fa-trash" ></i>
            <li className='bg-success border-0 list-group-item text-center'>
                {props.item}</li>
                
        </div>

        </>
    )
};

export default TodoList