import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  mapUsers = () => {
    return this.props.users.map((element, index) => (
      <li key={index}>{element.username}</li>
    ));
  };

  render() {
    return (
      <div>
        <ul>
          Users: {this.props.users.length} {this.mapUsers()}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Users);
