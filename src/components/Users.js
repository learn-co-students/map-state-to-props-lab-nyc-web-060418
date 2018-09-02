import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  displayUsers = () => {
    return this.props.users.map((user) => <li> {user.username} </li>)
  }

  render() {
    return (
      <div>
        {this.props.users.length}
        <ul>
          Users:
          {this.displayUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(Users)
