import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// App component - represents the whole app
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {toggleSelected: false};

    this.clickUser = this.clickUser.bind(this);
    this.clickToggle = this.clickToggle.bind(this);

  }

  clickToggle() {
    this.setState(state => ({
      toggleSelected: !state.toggleSelected
    }));
  }

  clickUser(aUser) {
    console.log("this prints when the app loads but not when I click");
    // I don't think this.clickUser on line 28 can contain () at the end
    // so I don't know how to pass the prop
    selectedUser = aUser;
  }

  render() {

    let users = Meteor.users.find({})
    let display = users.map((aUser, key) => {
      // Send out components that show details of each file
      return <div onClick={this.clickToggle} className="individual-user" key={key}>
      <li onClick={this.clickUser(aUser.userId)}>{aUser.username}{this.state.toggleSelected ? 'You selected this user' : ''}</li>
      </div>
    })

    return (
      <div className="container">
        <header>
          <h1>Users</h1>
        </header>
        <ul>
        {display}
        </ul>

      </div>
    );
  }
}

export default UserList;
