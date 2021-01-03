import React from 'react';
import axios from 'axios';

// Creating a Provider to carry the data we need to share with it's children
// The Consumer what gives the child components access to the data from the Provider

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null };

  handleRegister = ( user, history ) => {
    axios.post( '/api/auth', user )
      .then( res => {
        this.setState({ user: res.data.data });
        // Sends us to Home Page
        history.push('/');
      })
      .catch( res => {
        console.log( res );
      })
  }

  handleLogin = ( user, history ) => {
    axios.post( "/api/auth/sign_in", user )
      .then( res => {
        this.setState({ user: res.data.data })
        history.push('/');
      })
      .catch( res => {
        console.log( res );
      })
  }

  // Grabbing the User info and key to allowing them to view the Protected Routes

  handleLogout = ( history ) => {
    axios.delete( '/api/auth/sign_out' )
      .then( res => {
        this.setState({ user: null })
        history.push('/login');
      })
      .catch( res => {
        console.log( res );
      })
  }
    // Here we change state to no user to lock those pages that are 
    // required to have a user and send us back to the login screen

  render() {
    return(
      <AuthContext.Provider 
        value={{
          ...this.state,
          authenticated: this.state.user !==null,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: ( user ) => this.setState({ user })
        }}
      >
        { this.props.children }

      </AuthContext.Provider>
    )
  }

};