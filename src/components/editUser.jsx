import React, { Component } from "react";

class EditUser extends Component {
  state = { user: this.props.user };
  onNameChange(value) {
    const user = this.state.user;
    user.name = value;
    this.setState({
      user
    });
  }
  onEmailChange(value) {
    const user = this.state.user;
    user.email = value;
    this.setState({
      user
    });
  }
  onPhoneChange(value) {
    const user = this.state.user;
    user.phone = value;
    this.setState({
      user
    });
  }
  render() {
    const { user } = this.state;
    return (
      <form key={user.id}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={user.name}
            className="form-control"
            onChange={e => this.onNameChange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={user.email}
            className="form-control"
            onChange={e => this.onEmailChange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={user.phone}
            className="form-control"
            onChange={e => this.onPhoneChange(e.target.value)}
          />
        </div>
        <button
          onClick={() => this.props.onSubmitEdit(user)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default EditUser;
