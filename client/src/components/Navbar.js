import React from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Menu, Header, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';


class Navbar extends React.Component {

  userNavItems = () => {
    const { auth: { user, handleLogout }, location } = this.props;

    if (user) {
      return (
        <>
          <Link to='/'>
            <Menu.Item >
              Home
            </Menu.Item>
          </Link>
          <Link to='/account'>
            <Menu.Item>
              Account
            </Menu.Item>
          </Link>

          <Menu.Item
            onClick={() => handleLogout(this.props.history)}
          >
            Logout
          </Menu.Item>
        </>
      )
    } else {
      return (
        <>
          <Link to='/login'>
            <Menu.Item>
              Login
          </Menu.Item>
          </Link>
          <Link to='/register'>
            <Menu.Item>
              Register
          </Menu.Item>
          </Link>
        </>
      )
    }

  }

  render() {
    return (
      <StyledDiv>
        <Menu size='massive' secondary>
          {this.userNavItems()}
        </Menu>

      </StyledDiv>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

// Centering the Nav
const StyledDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`


export default withRouter(ConnectedNavbar);