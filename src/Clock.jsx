import React from "react";


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time : new Date().toLocaleString()
    };
  }

  componentDidMount(){
    this.intervalId = setInterval(
      () => this.updateTime(), 1000 );
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  updateTime(){
    this.setState({time: new Date().toLocaleString()});
 }

  render() {
    return(
      <p>Time is{this.state.time} </p>
    )
  }
}

export default Clock;