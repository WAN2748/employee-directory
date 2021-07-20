import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/Search";
import SearchResults from "../components/searchResults";
 

class Search extends Component {
  state = {
    search: "",
    name: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    API.getRandomProfile()
      .then(res => {
        console.log(res.data)
        this.setState({ name: res.data.results })
    })
      .catch(err => console.log(err));
  }

  inputChange = event => {
    this.setState({ search: event.target.value });
  };

  formSubmit = event => {
    event.preventDefault();
    API.getProfileByName(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <div style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name!</h1>
          <SearchForm
            formSubmit={this.formSubmit}
            inputChange={this.inputChange}
            employees={this.state.name}
          />
          <SearchResults results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Search;