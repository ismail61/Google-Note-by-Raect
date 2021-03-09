import React,{useState} from 'react';
import Navbar from './Navbar'
import Footter from './Footter'
import Container from './Container'
import Card from './Card'

const Main = () => {
   
    const [notes,setNotes] = useState([])

    const addNote=(note)=>{
        setNotes((oldNotes)=>{           
            return [...oldNotes,note]
        })    
    }
    const deleteNote=(id)=>{
        setNotes((oldNotes)=>{
            return (
                oldNotes.filter((oldNode,index)=>{
                    return(
                        index != id
                    )
                })
            )
        })
    }
    return (
        
        <div>
            <Navbar />
            <Container addNote={addNote}/>
                  
            <div className="row">
            {notes.map((note,index)=>{
                if(note.title && note.content && note.date){
                    return (   
                            <Card deleteNote={deleteNote} id={index} note={note}/>
                    )
                }
                
            })}
            </div>
            
            {/* <Footter /> */}
        </div>
    );
};

export default Main;