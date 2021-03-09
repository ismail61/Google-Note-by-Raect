import React from "react";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Tooltip from '@material-ui/core/Tooltip';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
const Card = (props) => {
    const deleteHandlerNote=()=>{
        
        props.deleteNote(props.id)
    }
    const editHandlerNote=()=>{
        console.log(props)
    }
    //console.log(props)
    return (
        <div className="col-md-4">
        <div className=" mt-3 card border-success mb-3">
            <div className="card-header bg-transparent border-success text-center">{props.note.title}</div>
            <div className="card-body text-success">
                <h5 className="card-title"></h5>
                <p className="card-text">
                    {props.note.content}
                </p>
            </div>
            <div className="card-footer bg-transparent border-success d-flex justify-content-between">Created At : {props.note.date}
                <div className="pull-right">
                <Tooltip title="Edit">
                    <span onClick={editHandlerNote}>
                    <EditOutlinedIcon style={{color:'#eb3462',cursor : 'pointer'}} />
                    </span>
                </Tooltip>
                <Tooltip title="Delete">
                    <span onClick={deleteHandlerNote} className="ml-1">
                    <DeleteRoundedIcon style={{color:'#eb3462',cursor : 'pointer'}} />
                    </span>
                </Tooltip>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;
