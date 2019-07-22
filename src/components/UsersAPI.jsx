import React, { Component } from "react";
import Users from "./users";

class UsersAPI extends Component {
  state = {
    isLoaded: false,
    users: [],
    error: ""
  };
  componentDidMount() {
    //Add web api route
    fetch("")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleDelete = user => {
    const users = this.state.users.filter(c => c.id !== user.id);
    this.setState({ users });
    //handle DELETE with API
  };

  handleEdit = user => {};

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return <Users users={this.state.users} onDelete={this.handleDelete} />;
    }
  }
}

export default UsersAPI;
