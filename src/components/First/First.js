import React,{Component} from 'react';
class First extends Component{
    render(){
        return (
             <div>           
                <h1>{this.props.name}</h1>
                <p>{this.props.email}</p>
                
            </div>
        );
    }
}

/* const name = 'Ismail Hosen Raj'
const h1 = `my name is ${name} `
function First(){
    return (
        <div>
            <h1>{h1}</h1>
            <h1>{this.props.name}</h1>
            <h1>{this.props.email}</h1>
        </div>
    );
}
 */
export default First;