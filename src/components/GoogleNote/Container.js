import React, { useState } from 'react';
import { Button } from '@material-ui/core'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
const Container = (props) => {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: '',
        content: '',
        date: ''
    })
    const inputHandler = (event) => {
        const { name, value } = event.target

        setNote((oldNote) => {
            return {
                ...oldNote,
                [name]: value,
                date: new Date().toLocaleTimeString()
            }
        })
    }
    const addNoteEvent = () => {
        props.addNote(note)
        setNote({
            title: '',
            content: '',
            date: ''
        })
        setExpand(false)
    }
    const expandChange = () => {
        setExpand(true)
    }
    const btNormal = () => {
        setExpand(false)
    }

    return (
        <div className="card card-body"  onDoubleClick={btNormal}>
            <div style={{ margin: '50px', width: '400px', marginLeft: '300px' }} className="rounded-pill text-center">
                {expand ? <input value={note.title} onChange={inputHandler} name="title" style={{ fontSize: '20px', outline: 'none' }} placeholder='Title'
                    className="text-center form-control mb-2" type="text" /> : null}
                <textarea value={note.content} onClick={expandChange} onChange={inputHandler} name="content" placeholder="Enter Some Note" className=" mb-2 form-control"></textarea>
                {expand ? <Button onClick={addNoteEvent} variant="outlined" color="primary">
                    <NoteAddIcon />
                Add A Note
            </Button> : null}
            </div>

        </div>
    );
};

export default Container;