import React, { Component } from 'react';
import firebase from './Firebase';
import { hulls, constructionCenters } from './knightHawksData';

class Users extends Component {
  state = {
    email: '',
    fullname: ''
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addUser = event => {
    event.preventDefault();

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    // db.collection('rooms').doc('roomA')
    // .collection('messages').doc('message1');

    let userRef = db
      .collection('knightHawks')
      .doc('hulls')
      .add(hulls);
    // userRef = db
    // .collection('knightHawks/constructionCenters')
    // .add(constructionCenters);

    // const userRef = db.collection('users').add({
    //   fullname: this.state.fullname,
    //   email: this.state.email
    // });

    // reset data
    // this.setState({
    //   email: '',
    //   fullname: ''
    // });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        {/* <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.onChange}
          value={this.state.fullName}
        />
        <input
          type="email"
          name="email"
          placeholder="eMail"
          onChange={this.onChange}
          value={this.state.eMail}
        /> */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Users;
