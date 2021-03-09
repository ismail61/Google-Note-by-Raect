import React,{Component} from 'react'

class Form extends Component{
    constructor(props) {
        super()
        this.state = {
            name : '',
            email : '',
            password : '',
            textarea : '',
            selectedItem : ''
        }
        
    }
   
    
    inputChange=(event)=>{
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({
            [inputName] : inputValue
        })
        //console.log(inputName +' '+inputValue)
        if(inputName === 'email'){
            var emailPattern = /\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue)){
                this.setState({
                    [inputName] : 'Not Valid email'
                })
            }
        }
        if(inputName==='password'){
            if(inputValue.length <5 ){
                this.setState({
                    [inputName] : 'Password must be greater than 6 char'
                })
            }
        }
        
    }
    
    onSubmitHandler=(e)=>{
        e.preventDefault();
        alert(this.state.name+' '+this.state.email+' '+this.state.password)
    }
    
    render(){
        const myList = ['md','ismail','hosen','raj']
        const listitem =  myList.map((list)=>{
            return <li>{list}</li>
        })
        return(
            
            <div className="mx-auto text-center">
               {/*  <form  action="" onSubmit={this.onSubmitHandler}>
                    <input onChange={this.inputChange} className="form-control border-danger mt-5" 
                    placeholder="Enter Your Name" type="text" name='name'/>
                    <input onChange={this.inputChange} className="form-control border-danger mt-5" 
                    placeholder="Enter Your Email" type="email" name='email'/>
                    <input onChange={this.inputChange} className="form-control border-danger mt-5" 
                    placeholder="Enter Your Password" type="password" name='password'/>
                    <textarea onChange={this.inputChange} name="textarea" placeholder="Your Message"
                     className="form-control border-danger mt-5" cols="60"></textarea>
                     <select onChange={this.inputChange} name='selectedItem' className='form-control border-danger mt-2'>
                         <option value="Dhaka">Dhaka</option>
                         <option value="Khulna">Khulna</option>
                         <option value="Sylhet">Sylhet</option>
                         <option value="Rajshahi">Rajshahi</option>
                     </select>
                    <span className="text-small">{this.state.name}</span><br/>
                    <span className="text-small">{this.state.email}</span><br/>
                    <span className="text-small">{this.state.password}</span><br/>
                    <span className="text-small">{this.state.textarea}</span><br/>
                    <span className="text-small">{this.state.selectedItem}</span><br/>
                    <button className="p-1 mt-2 btn btn-primary text-center" type="submit">Submit</button>
                </form> */}
                <ul>
                    {listitem}
                </ul>
                
            </div>
        )
    }
}
export default Form