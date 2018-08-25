import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers(){
    return this.props.users.map(user => {
      return <li key={user.username}>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          <p>{this.props.userCount} users</p>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

function mapStateToProps(state) {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
