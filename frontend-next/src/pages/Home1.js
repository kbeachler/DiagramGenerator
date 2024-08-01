import React, { Component } from "react";
import "../pages/Home.css";
import Axios from "axios";

// using React so we extend Component 
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          message: ""
        }; 
  }

  componentDidMount() {
    // Axios has to be called inside a lifecycle method or event handler
    Axios({
      method: "POST",
      url: "http://localhost:8080/add/item",
      // payload for server in json object
      data: { jsonObject: {} }, 
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      this.setState({ message: res.data.message });
      console.log(res.data.message);
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="Home">
        <h1>Diagram Generator</h1>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default Home;