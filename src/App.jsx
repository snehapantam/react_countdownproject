import React,{Component} from 'react';
import Clock from './clock'
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';


class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      deadline:'December 27, 2017',
      newDeadline: ''
    }
  }

  changeDeadline(){


    this.setState({deadline:this.state.newDeadline});
  }
render(){
return(
<div>
<div className="App-name">Countdown to {this.state.deadline}
<div className="time">
<Clock
deadline={this.state.deadline}/>
</div>


<Form inline >



<FormControl placeholder='new date' className="input-text"
onChange={event =>this.setState({newDeadline: event.target.value})}
/>
<Button onClick={() =>this.changeDeadline()}> Submit</Button>
</Form>
</div>
</div>


)
}
}

export default App;
