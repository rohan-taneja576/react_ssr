import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUser();
    console.log(fetchUser());
  }

  render() {
    return (
      <div>
        UserList ::
        <ul>
          {this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUser());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUser })(UsersList),
};
