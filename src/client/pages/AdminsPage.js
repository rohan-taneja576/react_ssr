import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/HOC/requireAuth";

class AdminsPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    return (
      <div>
        <h1>Admins List</h1>
        <ul>
          {this.props.admins.map((admin) => {
            return <li key={admin.id}>{admin.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
