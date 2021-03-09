import React,{Component,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
/* class Count extends Component{

    constructor(){
        super()
        this.state = {
            count : 10,
            color : 'black',
            name : ''
        }
    }
    decrease=(data)=>{
        this.setState({
            count : this.state.count - 1,
            name : data
        })

        if(this.state.count <8){
            this.setState({
                color : 'red'
            })
        }else if(this.state.count >12){
                this.setState({
                    color : 'green'
             })
        }else{
            this.setState({
                color : 'black'
            })
        }
        //document.getElementById('count').innerHTML = this.count
    }
    increase=(data)=>{
        this.setState({
            count : this.state.count + 1,
            name : data
        })
        if(this.state.count <8){
            this.setState({
                color : 'red'
            })
        }else if(this.state.count >12){
                this.setState({
                    color : 'green'
             })
        }else{
            this.setState({
                color : 'black'
            })
        }
    }
    render(){
        return <div>
                <span onClick={
                    this.decrease.bind(this,'Decrease')
                }>-</span>
                <span id="count" style={{color : this.state.color}}>{this.state.count}</span>
                <span onClick={
                    this.increase.bind(this,'Increase')
                }>+</span>

                {this.state.name.length ? <span className="ml-2">{this.state.name}</span> : <span></span>}
                
            </div>
        
    }
} */


const Count = ()=>{
    //const [count,setCount] = useState(0)//0 means initial data
    //useState returns an array of two items
    //count -> initial data and setCount -> updated data
    const [name,setName] = useState({
        name : 'ismail',
        count : 0,
        time : new Date().toLocaleTimeString()
    })
    const click=()=>{
        //setCount(count+1)
        setName({            
            name : 'raj',
            count : name.count + 1,
            time : new Date().toLocaleTimeString()
        })
    }
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    const updateTime = ()=>{
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(updateTime,1000)
    return (
        <>
            <h1 className='count text-center text-black-500 mt-3'>{name.name}</h1>
            <h1 className='count text-center text-black-500 mt-3'>{name.time}</h1>
            <h1 className='count text-center text-black-500 mt-3'>{name.count}</h1>
            <div className="text-center"><button onClick={click} className='text-center btn btn-success'>
                Click</button></div>
            <h1>{time}</h1>
        </>
    )
}
export default  Count
