import React, { Component } from "react";
import usersLocal from "./usersLocal";
import Pagination from "./pagination.jsx";
import EditUser from "./editUser";

class Users extends Component {
  state = {
    users: [],
    currentPage: 1,
    usersPerPage: 1,
    currentEditing: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      users: usersLocal,
      currentPage: 1,
      usersPerPage: 2,
      currentEditing: usersLocal[0]
    };
  }
  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  handleDelete = user => {
    alert("Are you sure you want to delete the user?");
    const users = this.state.users.filter(c => c.id !== user.id);
    this.setState({ users });
  };
  handleEdit = user => {
    this.setState({ currentEditing: user });
  };
  handleSubmitEdit = user => {
    alert("Are you sure you want to save the changes", user);
  };
  render() {
    const { users, currentPage, usersPerPage, currentEditing } = this.state;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    return (
      <div>
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={this.paginate}
        />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">e-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.Status}</td>
                <td>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => this.handleDelete(user)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    user={user}
                    onClick={() => this.handleEdit(user)}
                    className="btn btn-primary m-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditUser onSubmitEdit={this.handleSubmitEdit} user={currentEditing} />
      </div>
    );
  }
}

export default Users;
