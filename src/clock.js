import React,{Component} from 'react';
import './App.css';

class Clock extends Component{

  constructor(props){
    super(props);
      this.state={
        days:0,
        hours:0,
        mins:0,
        secs:0
      }
}

getTimeUntil(deadline){
  const time =Date.parse(deadline) - Date.parse(new Date());

  const secs= Math.floor((time/1000)%60);

  const mins= Math.floor((time/1000/60)%60);
  const hours= Math.floor(time/(1000*60*60)%24);
  const days= Math.floor(time/(1000*60*60*24));



this.setState({days,hours,mins,secs});



}

componentWillMount(){
  this.getTimeUntil(this.props.deadline);
}

componentDidMount(){
  setInterval(() => this.getTimeUntil(this.props.deadline),1000);
}

leading0(num){
  if(num<10){
    return '0'+num;
  }

  return num;
}


  render(){
    return(
    <div>

      <div className="con-tent"> {this.leading0(this.state.days)} days</div>
    <div className="con-tent"> {this.leading0(this.state.hours)} hours</div>

  <div className="con-tent"> {this.leading0(this.state.mins)} mins</div>
<div className="con-tent"> {this.leading0(this.state.secs)} seconds</div>


    </div>
  )
  }

}
export default Clock;
