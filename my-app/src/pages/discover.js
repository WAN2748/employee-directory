import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextProfile();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };


    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextProfile();
  };

  loadNextProfile = () => {
    API.getRandomProfile()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };
}

export default Discover;