import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserFiles } from '../api/files.js';

class User extends Component {
  constructor(props) {
    super(props);

    this.clickUser = this.clickUser.bind(this);

  }

  clickUser() {
    console.log(this);
  }


  render() {


    return (

      <li onClick={this.clickUser}>{this.props.username}</li>

    );
  }
}
export default User;
