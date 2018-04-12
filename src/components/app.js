import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = { text: ''}

    this.onInputChange = this.onInputChange.bind(this);
  }


  onInputChange(event){
    this.setState({text: event.target.value})
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <h1>My First App</h1>
         <form onSubmit={this.onFormSubmit} className="input-group">
         <input
           placeholder="Input"
           className="form-control"
           value={this.state.text}
           onChange={this.onInputChange}
         />
         <span className="input-group-btn">
           <button type="submit" className="btn btn-secondary">Submit</button>
         </span>
       </form>
      </div>
    );
  }
}
