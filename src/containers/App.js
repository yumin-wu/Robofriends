import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: "",
      robots: [],
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchfield } = this.state;

    if (robots.length === 0) {
      return <h1>Loading</h1>;
    }

    let filteredRobots = robots.filter((robot) => {
      let stat = robot.name.toLowerCase().includes(searchfield.toLowerCase());
      return stat;
    });

    if (!filteredRobots.length) {
      filteredRobots = [
        {
          id: "None",
          name: searchfield,
          username: "None",
          email: "None",
        },
      ];
    }

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
