import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  renderUsers = () => {
    return this.props.users.map(user => <li key={user.username}>Name: {user.username} Hometown: {user.hometown}</li>)
  }

  render() {
    return (
      <div>
      <p>Total Number of Users: {this.props.users.length}</p>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}


export default connect(mapStateToProps)(Users)
